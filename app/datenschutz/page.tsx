import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutz - Ondiffoline | Datenschutzerklärung',
  description: 'Datenschutzerklärung von Ondiffoline - Informationen zur Verarbeitung personenbezogener Daten gemäß DS-GVO.',
  keywords: 'Datenschutz, DS-GVO, Datenschutzerklärung, Ondiffoline, personenbezogene Daten',
  openGraph: {
    title: 'Datenschutz - Ondiffoline',
    description: 'Datenschutzerklärung gemäß DS-GVO',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://test.c-simweb.de/datenschutz',
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="mt-[88px]">
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                ALLGEMEINES ZUR DATENVERARBEITUNG
              </h1>

              {/* Umfang der Verarbeitung */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Umfang der Verarbeitung personenbezogener Daten
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p>
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                  </p>
                </div>
              </section>

              {/* Rechtsgrundlage */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient <strong>Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DS-GVO)</strong> als Rechtsgrundlage.
                  </p>
                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient <strong>Art. 6 Abs. 1 lit. b DS-GVO</strong> als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                  </p>
                  <p>
                    Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient <strong>Art. 6 Abs. 1 lit. c DS-GVO</strong> als Rechtsgrundlage.
                  </p>
                  <p>
                    Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient <strong>Art. 6 Abs. 1 lit. d DS-GVO</strong> als Rechtsgrundlage.
                  </p>
                  <p>
                    Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient <strong>Art. 6 Abs. 1 lit. f DS-GVO</strong> als Rechtsgrundlage für die Verarbeitung.
                  </p>
                </div>
              </section>

              {/* Datenlöschung */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Datenlöschung und Speicherdauer
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p>
                    Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                  </p>
                </div>
              </section>

              {/* E-Mail Kontakt */}
              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  E-Mail-KONTAKT
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      1. Beschreibung und Umfang der Datenverarbeitung
                    </h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse ist möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.
                      </p>
                      <p>
                        Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten werden ausschließlich für die Verarbeitung der Konversation verwendet.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      2. Rechtsgrundlage für die Datenverarbeitung
                    </h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist <strong>Art. 6 Abs. 1 lit. f DS-GVO</strong>. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung <strong>Art. 6 Abs. 1 lit. b DS-GVO</strong>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      3. Zweck der Datenverarbeitung
                    </h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      4. Dauer der Speicherung
                    </h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      5. Widerspruchs- und Beseitigungsmöglichkeit
                    </h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail-Kontakt mit uns auf, so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In einem solchen Fall kann die Konversation nicht fortgeführt werden.
                      </p>
                      <p>
                        Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme gespeichert wurden, werden in diesem Fall gelöscht.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rechte der betroffenen Person */}
              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  RECHTE DER BETROFFENEN PERSON
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed mb-6">
                  <p>
                    Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DS-GVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Auskunftsrecht</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
                      </p>
                      <p>
                        Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                        <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                        <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;</li>
                        <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>
                        <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
                        <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                        <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;</li>
                        <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DS-GVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recht auf Berichtigung</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recht auf Löschung</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                        <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                        <li>Sie legen gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
                        <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                        <li>Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DS-GVO verstößt.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Haftung und Urheberrecht */}
              <section className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Haftung und Urheberrecht
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                      </p>
                      <p>
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Haftungsbeschränkung für externe Links</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die &quot;externen Links&quot; auch keine Gewähr auf Richtigkeit der Inhalte übernehmen.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Urheberrecht</h3>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p>
                        Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes.
                      </p>
                      <p>
                        Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt worden, sind die Urheberrechte Dritter zu beachten.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>E-Mail:</strong> team@ondiffoline.de</p>
                    <p><strong>Telefon:</strong> +49 178 1757330</p>
                    <p><strong>Adresse:</strong> Altlachen 4, 72505 Krauchenwies</p>
                  </div>
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
