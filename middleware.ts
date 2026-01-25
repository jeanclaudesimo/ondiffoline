import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Known malicious IPs (add more as needed)
const BLOCKED_IPS = new Set([
  '77.90.185.76', // Botnet C2 server from attack logs
]);

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

function logSecurityEvent(event: SecurityEvent, request: NextRequest): void {
  const logEntry = {
    level: 'warn',
    category: 'security',
    ...event,
  };
  console.log(JSON.stringify(logEntry));

  // Send to stats API (fire and forget)
  try {
    const baseUrl = request.nextUrl.origin;
    fetch(`${baseUrl}/api/security-stats`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    }).catch(() => {
      // Ignore errors - stats are optional
    });
  } catch {
    // Ignore - logging to console is the primary method
  }
}

// Rate limiting storage (in-memory, resets on restart)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  record.count++;
  return record.count > RATE_LIMIT;
}

export function middleware(request: NextRequest) {
  const clientIP = getClientIP(request);
  const url = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;
  const fullPath = url + searchParams;
  const userAgent = request.headers.get('user-agent') || '';
  const method = request.method;

  const baseEvent = {
    timestamp: new Date().toISOString(),
    ip: clientIP,
    method,
    path: fullPath,
    userAgent,
  };

  // 1. Block known malicious IPs
  if (BLOCKED_IPS.has(clientIP)) {
    logSecurityEvent({
      ...baseEvent,
      type: 'BLOCKED_IP',
      reason: 'Known malicious IP address',
    }, request);
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 2. Rate limiting
  if (isRateLimited(clientIP)) {
    logSecurityEvent({
      ...baseEvent,
      type: 'RATE_LIMITED',
      reason: 'Rate limit exceeded (100 req/min)',
    }, request);
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // 3. Block suspicious HTTP methods
  const allowedMethods = ['GET', 'POST', 'HEAD', 'OPTIONS'];
  if (!allowedMethods.includes(method)) {
    logSecurityEvent({
      ...baseEvent,
      type: 'BLOCKED_METHOD',
      reason: `Disallowed HTTP method: ${method}`,
    }, request);
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  // 4. Block malicious user agents
  const maliciousAgents = [
    /sqlmap/i,
    /nikto/i,
    /nmap/i,
    /masscan/i,
    /zgrab/i,
    /gobuster/i,
    /dirbuster/i,
    /wpscan/i,
    /nessus/i,
    /curl\/.*libcurl/i, // Scripted curl attacks
    /python-requests/i,
    /go-http-client/i,
    /wget/i,
    /libwww-perl/i,
  ];

  for (const agent of maliciousAgents) {
    if (agent.test(userAgent)) {
      logSecurityEvent({
        ...baseEvent,
        type: 'BLOCKED_USER_AGENT',
        reason: 'Malicious user agent detected',
        matched: agent.source,
      }, request);
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // 5. Block suspicious path patterns (LFI, RCE, etc.)
  const suspiciousPatterns = [
    // Path traversal
    /\.\.\//,
    /\.\.%2[fF]/,
    /%2e%2e/i,

    // System paths
    /\/etc\//i,
    /\/var\//i,
    /\/dev\//i,
    /\/proc\//i,
    /\/tmp\//i,
    /\/root\//i,
    /\/home\//i,
    /\/usr\//i,
    /\/bin\//i,
    /\/mnt\//i,

    // Sensitive files
    /lrt/i,
    /passwd/i,
    /shadow/i,
    /\.env/i,
    /\.git/i,
    /\.config/i,
    /\.ssh/i,
    /\.bash/i,
    /\.aws/i,
    /credentials/i,
    /secrets?\.json/i,
    /\.pem$/i,
    /\.key$/i,

    // WordPress/CMS attacks
    /wp-admin/i,
    /wp-includes/i,
    /wp-content/i,
    /wp-login/i,
    /xmlrpc\.php/i,
    /phpMyAdmin/i,
    /phpmyadmin/i,
    /adminer/i,

    // PHP/CGI attacks
    /\.php/i,
    /\.asp/i,
    /\.aspx/i,
    /\.jsp/i,
    /\.cgi/i,

    // Shell/command injection patterns
    /;.*(?:ls|cat|id|whoami|uname|pwd|wget|curl|bash|sh|nc|netcat)/i,
    /\|.*(?:ls|cat|id|whoami|uname|pwd|wget|curl|bash|sh|nc|netcat)/i,
    /`[^`]*`/,
    /\$\([^)]*\)/,
    /\$\{[^}]*\}/,

    // Base64 encoded payloads (common in attacks)
    /base64/i,
    /eval\s*\(/i,
    /exec\s*\(/i,
    /system\s*\(/i,
    /passthru/i,
    /shell_exec/i,
    /popen\s*\(/i,
    /proc_open/i,

    // SQL injection patterns
    /union.*select/i,
    /select.*from/i,
    /insert.*into/i,
    /drop.*table/i,
    /delete.*from/i,
    /update.*set/i,
    /'.*or.*'.*='/i,
    /".*or.*".*="/i,
    /--\s*$/,
    /;--/,

    // XSS patterns
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,

    // Common exploit paths
    /\.well-known\/security/i,
    /actuator/i,
    /console/i,
    /manager\/html/i,
    /solr/i,
    /jenkins/i,
    /api\/v1\/pods/i,
    /debug/i,
    /trace/i,
    /config\.json/i,
    /package\.json/i,
    /composer\.json/i,

    // Log4j/JNDI attacks
    /\$\{jndi:/i,
    /\$\{lower:/i,
    /\$\{upper:/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(fullPath)) {
      logSecurityEvent({
        ...baseEvent,
        type: 'BLOCKED_PATTERN',
        reason: 'Suspicious pattern detected in request',
        matched: pattern.source,
      }, request);
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // 6. Block suspicious request bodies for POST requests
  const contentType = request.headers.get('content-type') || '';
  if (method === 'POST' && contentType.includes('application/x-www-form-urlencoded')) {
    // Check for oversized requests (potential DoS)
    const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
    if (contentLength > 1024 * 1024) { // 1MB limit
      logSecurityEvent({
        ...baseEvent,
        type: 'BLOCKED_PAYLOAD_SIZE',
        reason: `Payload too large: ${contentLength} bytes`,
      }, request);
      return new NextResponse('Payload Too Large', { status: 413 });
    }
  }

  // 7. Add security headers to response
  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
