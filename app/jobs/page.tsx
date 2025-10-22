import type { Metadata } from 'next';
import Header from '../components/Header';
import Jobs from '../components/Jobs';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Jobs & Karriere - Ondiffoline | Jetzt bewerben',
  description: 'Arbeiten Sie bei Ondiffoline! Wir suchen Reinigungskräfte für gewerbliche Reinigung. Faire Bezahlung, flexible Arbeitszeiten. Jetzt bewerben!',
  keywords: 'Reinigungskraft Jobs, Stellenangebote Reinigung, Karriere Ondiffoline, Jobs Gebäudereinigung',
  openGraph: {
    title: 'Jobs & Karriere - Ondiffoline',
    description: 'Arbeiten Sie bei Ondiffoline! Wir suchen Reinigungskräfte.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/jobs',
  },
};

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="mt-[88px]">
        <Jobs />
      </main>
      <Footer />
    </>
  );
}
