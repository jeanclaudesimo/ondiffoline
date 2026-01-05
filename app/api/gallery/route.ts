import { NextResponse } from 'next/server';

export async function GET() {
  // Server-side: Use non-prefixed env vars (runtime) with NEXT_PUBLIC fallback (build-time)
  const apiUrl = process.env.PORTAL_API_URL || process.env.NEXT_PUBLIC_PORTAL_API_URL;
  const tenantKey = process.env.PORTAL_TENANT_KEY || process.env.NEXT_PUBLIC_PORTAL_TENANT_KEY;
  const gallerySlug = process.env.GALLERY_SLUG || process.env.NEXT_PUBLIC_GALLERY_SLUG || 'arbeit-im-bild';

  if (!apiUrl || !tenantKey) {
    return NextResponse.json(
      { error: 'Portal API not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${apiUrl}/api/public/galleries/${gallerySlug}`, {
      headers: {
        'X-Tenant-Key': tenantKey,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch gallery: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}
