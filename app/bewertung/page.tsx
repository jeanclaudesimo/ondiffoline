import type { Metadata } from 'next';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kundenbewertungen - Ondiffoline | 4.9 ★ von 500+ Kunden',
  description: 'Lesen Sie authentische Bewertungen von unseren zufriedenen Kunden. 4.9/5 Sterne bei über 500 Bewertungen. Überzeugen Sie sich von unserer Qualität!',
  keywords: 'Ondiffoline Bewertungen, Kundenmeinungen Reinigung, Erfahrungen Reinigungsfirma, Testimonials',
  openGraph: {
    title: 'Kundenbewertungen - Ondiffoline',
    description: '4.9/5 Sterne bei über 500 Bewertungen. Überzeugen Sie sich!',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/bewertung',
  },
};

export default function BewertungPage() {
  return (
    <>
      <Header />
      <main className="mt-[88px]">
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
