import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

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
