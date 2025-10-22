import type { Metadata } from 'next';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Kontakt - Ondiffoline Reinigungsdienste | Jetzt anfragen',
  description: 'Kontaktieren Sie Ondiffoline für professionelle Reinigungsdienste. Telefon: +49 178 1757330 | E-Mail: team@ondiffoline.de. Kostenlose Erstberatung!',
  keywords: 'Kontakt Reinigungsfirma, Reinigung anfragen, Ondiffoline Kontakt, Reinigungsdienst Anfrage',
  openGraph: {
    title: 'Kontakt - Ondiffoline Reinigungsdienste',
    description: 'Kontaktieren Sie uns für professionelle Reinigungsdienste. Kostenlose Erstberatung!',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
