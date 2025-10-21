import Header from '../components/Header';
import Jobs from '../components/Jobs';
import Footer from '../components/Footer';

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
