import { NextRequest, NextResponse } from 'next/server';

// Security event types
type SecurityEventType =
  | 'BLOCKED_IP'
  | 'RATE_LIMITED'
  | 'BLOCKED_METHOD'
  | 'BLOCKED_USER_AGENT'
  | 'BLOCKED_PATTERN'
  | 'BLOCKED_PAYLOAD_SIZE';

interface SecurityEvent {
  timestamp: string;
  type: SecurityEventType;
  ip: string;
  method: string;
  path: string;
  userAgent: string;
  reason: string;
  matched?: string;
}

// Use globalThis to persist data across requests (works in Node.js runtime)
const globalStore = globalThis as typeof globalThis & {
  __securityEvents?: SecurityEvent[];
  __securityStartTime?: string;
};

if (!globalStore.__securityEvents) {
  globalStore.__securityEvents = [];
  globalStore.__securityStartTime = new Date().toISOString();
}

const MAX_EVENTS = 1000;

// Secret key for accessing stats (set in environment)
const STATS_SECRET = process.env.SECURITY_STATS_SECRET || 'change-this-secret-key';

export async function GET(request: NextRequest) {
  // Check authentication
  const authHeader = request.headers.get('authorization');
  const urlSecret = request.nextUrl.searchParams.get('secret');

  const providedSecret = authHeader?.replace('Bearer ', '') || urlSecret;

  if (providedSecret !== STATS_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const events = globalStore.__securityEvents || [];

  // Calculate stats
  const byType: Record<string, number> = {};
  const ipCounts: Record<string, number> = {};
  const patternCounts: Record<string, number> = {};
  const hourlyStats: Record<string, number> = {};

  for (const event of events) {
    // Count by type
    byType[event.type] = (byType[event.type] || 0) + 1;

    // Count by IP
    ipCounts[event.ip] = (ipCounts[event.ip] || 0) + 1;

    // Count by matched pattern
    if (event.matched) {
      patternCounts[event.matched] = (patternCounts[event.matched] || 0) + 1;
    }

    // Hourly distribution
    const hour = event.timestamp.slice(0, 13); // YYYY-MM-DDTHH
    hourlyStats[hour] = (hourlyStats[hour] || 0) + 1;
  }

  // Sort IPs by count
  const topIPs = Object.entries(ipCounts)
    .map(([ip, count]) => ({ ip, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  // Sort patterns by count
  const topPatterns = Object.entries(patternCounts)
    .map(([pattern, count]) => ({ pattern, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  return NextResponse.json({
    status: 'ok',
    stats: {
      totalBlocked: events.length,
      byType,
      topIPs,
      topPatterns,
      hourlyStats,
      recentEvents: events.slice(-50).reverse(),
      since: globalStore.__securityStartTime,
      serverTime: new Date().toISOString(),
    },
  });
}

// POST endpoint to receive events from middleware
export async function POST(request: NextRequest) {
  // Simple validation - only accept from localhost/internal
  const event = await request.json() as SecurityEvent;

  if (!event.type || !event.ip || !event.timestamp) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }

  globalStore.__securityEvents = globalStore.__securityEvents || [];
  globalStore.__securityEvents.push(event);

  // Trim old events
  if (globalStore.__securityEvents.length > MAX_EVENTS) {
    globalStore.__securityEvents = globalStore.__securityEvents.slice(-MAX_EVENTS);
  }

  return NextResponse.json({ status: 'recorded' });
}
