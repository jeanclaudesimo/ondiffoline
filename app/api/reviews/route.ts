import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  approved: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const connection = await getConnection();
    
    // SQL Query um alle genehmigten Bewertungen zu holen
    const [rows] = await connection.execute(
      'SELECT id, name, rating, comment, service, created_at as date FROM reviews WHERE approved = 1 ORDER BY created_at DESC LIMIT 10'
    );
    
    const reviews: Review[] = rows as Review[];
    
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, rating, comment, service } = body;
    
    // Validierung
    if (!name || !rating || !comment || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    const connection = await getConnection();
    
    // Neue Bewertung einfügen (erstmal nicht genehmigt)
    await connection.execute(
      'INSERT INTO reviews (name, rating, comment, service, approved) VALUES (?, ?, ?, ?, 0)',
      [name, rating, comment, service]
    );
    
    return NextResponse.json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}
