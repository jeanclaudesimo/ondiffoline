import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  // Block suspicious path patterns (LFI attempts)
  const suspiciousPatterns = [
    /\.\.\//, // Path traversal
    /\/etc\//,
    /\/var\//,
    /\/dev\//,
    /\/proc\//,
    /\/tmp\//,
    /lrt/i,
    /passwd/i,
    /shadow/i,
    /\.env/i,
    /\.git/i,
    /\.config/i,
    /wp-admin/i,
    /wp-includes/i,
    /phpMyAdmin/i,
    /\.php$/i,
  ];

  const fullPath = url + searchParams;

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(fullPath)) {
      console.log(`[BLOCKED] Suspicious request: ${fullPath}`);
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
