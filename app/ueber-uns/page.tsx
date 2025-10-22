import type { Metadata } from 'next';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Über uns - Ondiffoline | Ihr Fachspezialist für Reinigung',
  description: 'Ondiffoline - Ihr regionaler Fachspezialist für gewerbliche Reinigung mit 500+ zufriedenen Kunden. 100% Zufriedenheitsgarantie.',
  keywords: 'Reinigungsfirma Erfahrung, professionelle Reinigung, Ondiffoline Team, Reinigungsexperten',
  openGraph: {
    title: 'Über uns - Ondiffoline Reinigungsdienste',
    description: '500+ zufriedene Kunden, 18 Dienstleistungen. Ihr Partner für Sauberkeit.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/ueber-uns',
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
