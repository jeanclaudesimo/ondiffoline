import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum - Ondiffoline | Angaben gemäß § 5 TMG',
  description: 'Impressum von Ondiffoline - Angaben gemäß § 5 TMG mit Kontaktdaten und rechtlichen Hinweisen.',
  keywords: 'Impressum, Ondiffoline, Kontaktdaten, rechtliche Hinweise, TMG',
  openGraph: {
    title: 'Impressum - Ondiffoline',
    description: 'Angaben gemäß § 5 TMG',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/impressum',
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="mt-[88px]">
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                Impressum
              </h1>

              {/* Firmeninformationen */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Firmeninformationen
                </h2>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">OnDIFFOline</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Altlachen 4</p>
                        <p>72505 Krauchenwies</p>
                        <p>Deutschland</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontaktdaten */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Kontaktdaten
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[rgb(100,13,27)] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                    </div>
                    <p className="text-gray-700 font-medium">+49 178 1757330</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[rgb(100,13,27)] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">E-Mail</h3>
                    </div>
                    <p className="text-gray-700 font-medium">team@ondiffoline.de</p>
                  </div>
                </div>
              </section>

              {/* Vertreten durch */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Vertreten durch
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <p className="text-lg text-gray-700 font-medium">Frau Alphonsine Diffo</p>
                </div>
              </section>

              {/* Weitere Informationen */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Weitere Informationen
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Umsatzsteuer-ID:</span>
                      <span className="text-gray-700 ml-2">DE360103494</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Steuernummer:</span>
                      <span className="text-gray-700 ml-2">85134/67314</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Verantwortlich für den Inhalt
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <p className="text-gray-700">
                    Alphonsine Diffo, Altlachen 4, 72505 Krauchenwies, Deutschland
                  </p>
                </div>
              </section>

              {/* Rechtliche Hinweise */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Rechtliche Hinweise
                </h2>

                <div className="space-y-8">
                  {/* Urheberrecht */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Urheberrecht</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Alle Inhalte unserer Webseite sind urheberrechtlich geschützt. Wir gestatten ausdrücklich die Nutzung aller Daten für den privaten, nicht kommerziellen Gebrauch. Bei Vervielfältigung ist auf die Urheber- und Eigentumsrechte von simweb ausdrücklich hinzuweisen.
                      </p>
                      <p>
                        Inhalte dürfen in keiner Weise verändert werden und ohne schriftliche Genehmigung nicht auf anderen Internetseiten oder vernetzten Rechnern genutzt werden. Jegliche Nutzung für öffentliche oder kommerzielle Zwecke bedarf der Zustimmung von simweb.
                      </p>
                      <p>
                        Ein Verstoß gegen diese Bedingungen verpflichtet zur sofortigen Vernichtung aller Inhalte. Die Geltendmachung weiterer Schadensersatzansprüche bleibt vorbehalten.
                      </p>
                    </div>
                  </div>

                  {/* Haftung */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Haftung</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Wir sind für eigene Inhalte auf diesen Seiten verantwortlich. Unsere Webseite enthält auch Querverweise (LINKS) zu Webseiten anderer Anbieter. Für fremde Inhalte, die über solche Querverweise (LINKS) erreichbar sind wir jedoch nicht verantwortlich.
                      </p>
                      <p>
                        Das fremde Angebot wurde bei der erstmaligen Verlinkung auf rechtswidrige Inhalte überprüft. Erst wenn wir feststellen oder darauf hingewiesen werden, dass ein Angebot rechtswidrigen Inhalt aufweist, wird dieser Querverweis (LINK) aufgehoben.
                      </p>
                    </div>
                  </div>

                  {/* Gewährleistung */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Gewährleistung</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Die Informationen auf unserer Webseite wurden mit größter Sorgfalt erstellt. simweb übernimmt jedoch keine Gewähr für deren Vollständigkeit oder Geeignetheit für bestimmte Verwendungszwecke. Die Nutzung der auf den Internetseiten zur Verfügung gestellten Inhalte erfolgt auf alleinige Gefahr des Nutzers.
                      </p>
                      <p>
                        Die EU-Kommission hat eine Online Plattform für außergerichtliche Streitschlichtung bereitgestellt (OS Plattform). Verbrauchern gibt dies die Möglichkeit, Streitigkeiten im Zusammenhang mit Ihrer Online-Bestellung zunächst ohne die Einschaltung eines Gerichts zu klären.
                      </p>
                      <p>
                        Wir sind bemüht, eventuelle Meinungsverschiedenheiten aus unserem Vertrag einvernehmlich beizulegen. Darüber hinaus sind wir zu einer Teilnahme an einem Streitschlichtungsverfahren nicht verpflichtet und können Ihnen die Teilnahme an einem solchen Verfahren leider auch nicht anbieten.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt für rechtliche Angelegenheiten */}
              <section className="bg-[rgb(100,13,27)] text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Kontakt für rechtliche Angelegenheiten</h2>
                <div className="space-y-3">
                  <p><strong>E-Mail:</strong> team@ondiffoline.de</p>
                  <p><strong>Telefon:</strong> +49 178 1757330</p>
                  <p><strong>Adresse:</strong> Altlachen 4, 72505 Krauchenwies, Deutschland</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
