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
                Mit <strong>jahrelanger Erfahrung</strong> im Bereich der professionellen
                Reinigung sind wir Ihr vertrauensvoller Partner für höchste Sauberkeit
                und Hygiene.
              </p>
              <p>
                Unser Anspruch ist eine <strong>gründliche Reinigung</strong> bis in die
                kleinsten Ecken und Nischen. Wir verstehen, dass Sauberkeit nicht nur
                ein optischer Aspekt ist, sondern auch für Gesundheit und Wohlbefinden
                entscheidend ist.
              </p>
              <p>
                Als <strong>regionaler Fachspezialist</strong> für gewerbliche Reinigung
                bieten wir maßgeschneiderte Lösungen für Unternehmen jeder Größe. Von
                der regelmäßigen Unterhaltsreinigung bis zur Spezialreinigung – wir
                haben die passende Lösung für Sie.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00467b] mb-2">10+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00467b] mb-2">500+</div>
                <div className="text-gray-600">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00467b] mb-2">18</div>
                <div className="text-gray-600">Dienstleistungen</div>
              </div>
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
