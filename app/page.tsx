import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Ondiffoline - Professionelle Reinigungsdienste | Ihr regionaler Fachspezialist',
  description: 'Ondiffoline - Ihr regionaler Fachspezialist für gewerbliche Reinigung. Büroreinigung, Gastronomie-Reinigung, Fensterreinigung & mehr. ☎ +49 178 1757330',
  alternates: {
    canonical: 'https://test.c-simweb.de',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
