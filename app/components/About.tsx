import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Über Ondiffoline
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Als <strong>frisches, junges und ehrgeiziges Team</strong> haben wir uns zum Ziel gesetzt, 
                die Erwartungen unserer Kunden stets zu übertreffen und ihr Vertrauen in uns zu bestätigen. 
                Wir sind davon überzeugt, dass unsere Leidenschaft für exzellenten Service und unsere 
                Einsatzbereitschaft uns dabei helfen werden, uns als vertrauenswürdiger Partner für alle 
                Reinigungsbedürfnisse zu etablieren.
              </p>
              <p>
                Unser Fokus liegt darauf, <strong>maßgeschneiderte Lösungen</strong> anzubieten, die genau 
                auf die individuellen Anforderungen unserer Kunden zugeschnitten sind. Dabei setzen wir 
                nicht nur auf Qualität und Zuverlässigkeit, sondern auch auf Flexibilität und 
                Kundenzufriedenheit. Egal ob es sich um Grundreinigung, Unterhaltsreinigung, 
                Gartenreinigung, Treppenhausreinigung oder andere Dienstleistungen handelt - wir sind 
                für Sie da, um Ihr Zuhause, Ihr Unternehmen oder Ihre Immobilie in bestem Zustand zu halten.
              </p>
              <p>
                Als <strong>lokal verwurzeltes Unternehmen</strong> verstehen wir die Bedürfnisse unserer 
                Gemeinschaft und sind bestrebt, einen positiven Beitrag zu leisten. Wir setzen auf 
                nachhaltige Praktiken, umweltfreundliche Produkte und eine enge Zusammenarbeit mit 
                unseren Kunden, um sicherzustellen, dass wir nicht nur saubere, sondern auch gesunde 
                und sichere Umgebungen schaffen.
              </p>
              <p>
                Wir sind stolz darauf, <strong>Teil der Krauchenwies-Gemeinschaft</strong> zu sein und 
                freuen uns darauf, Ihr Vertrauen zu gewinnen und langfristige Beziehungen aufzubauen. 
                Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen zu erfahren und 
                zu erleben, wie wir Ihre Reinigungsbedürfnisse mit Leidenschaft und Professionalität 
                erfüllen können.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/OnDiffoline_1_freigestellt.jpg"
                alt="OnDiffoline - Professionelle Reinigung"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#6c0c1c] text-white p-8 rounded-lg shadow-xl">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg">Zufriedenheitsgarantie</div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/OnDiffoline_2_freigestellt.jpg"
              alt="OnDiffoline Team bei der Arbeit"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              quality={80}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Unser Team</h3>
              <p className="text-sm opacity-90">Erfahrene Fachkräfte</p>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/OnDiffoline_3_freigestellt Kopie.jpg"
              alt="Professionelle Reinigungsausrüstung"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              quality={80}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Moderne Ausrüstung</h3>
              <p className="text-sm opacity-90">Hochwertige Geräte</p>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/OnDiffoline_3_freigestellt Kopie2.jpg"
              alt="Saubere Arbeitsergebnisse"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              quality={80}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Perfekte Ergebnisse</h3>
              <p className="text-sm opacity-90">Höchste Qualität</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#00467b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00467b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Qualitätsgarantie</h3>
            <p className="text-gray-600">
              Höchste Qualitätsstandards bei jedem Auftrag
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#6c0c1c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#6c0c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pünktlichkeit</h3>
            <p className="text-gray-600">
              Termingerechte und zuverlässige Ausführung
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#00467b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00467b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Erfahrenes Team</h3>
            <p className="text-gray-600">
              Geschulte Fachkräfte mit langjähriger Expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
