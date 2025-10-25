import Image from 'next/image';

export default function Services() {
  const services = [
    {
      name: 'Gastronomie reinigen',
      icon: '🍽️',
      description: 'Professionelle Reinigung für Restaurants und Küchen',
    },
    {
      name: 'Event- & Clubreinigung',
      icon: '🎉',
      description: 'Schnelle und gründliche Reinigung nach Veranstaltungen',
    },
    {
      name: 'Bauabschlussreinigung',
      icon: '🏗️',
      description: 'Entfernung von Baustaub und Schmutz',
    },
    {
      name: 'Praxis & Büroreinigung',
      icon: '🏢',
      description: 'Hygienische Reinigung für Arztpraxen und Büros',
    },
    {
      name: 'Grundreinigung',
      icon: '✨',
      description: 'Tiefenreinigung für alle Bereiche',
    },
    {
      name: 'Haushaltsreinigung',
      icon: '🏠',
      description: 'Regelmäßige Pflege für private Haushalte',
    },
    {
      name: 'Industriereinigung',
      icon: '🏭',
      description: 'Spezialreinigung für Industriebetriebe',
    },
    {
      name: 'Treppenhausreinigung',
      icon: '🪜',
      description: 'Saubere und gepflegte Treppenhäuser',
    },
    {
      name: 'Unterhaltsreinigung',
      icon: '🧹',
      description: 'Regelmäßige Pflege und Wartung',
    },
    {
      name: 'Endreinigung',
      icon: '🏁',
      description: 'Abschließende Reinigung nach Bauarbeiten',
    },
    {
      name: 'Bodenreinigung',
      icon: '🪨',
      description: 'Spezialisierte Reinigung aller Bodenbeläge',
    },
    {
      name: 'Sonderreinigung',
      icon: '⭐',
      description: 'Individuelle Reinigungslösungen',
    },
    {
      name: 'Hygienereinigung',
      icon: '🦠',
      description: 'Desinfektion und Hygienereinigung',
    },
    {
      name: 'Umzugsreinigung',
      icon: '📦',
      description: 'Reinigung vor und nach Umzügen',
    },
    {
      name: 'Firmenreinigung',
      icon: '🏢',
      description: 'Umfassende Reinigung für Unternehmen',
    },
    {
      name: 'Büroreinigung',
      icon: '💼',
      description: 'Regelmäßige Pflege Ihrer Büroräume',
    },
    {
      name: 'Kita und Schulreinigung',
      icon: '🎓',
      description: 'Hygienische Reinigung für Bildungseinrichtungen',
    },
    {
      name: 'Entrümpelung & Haushaltsauflösung',
      icon: '🗑️',
      description: 'Professionelle Entrümpelung von Räumen',
    },
    {
      name: 'Wohnungräumung',
      icon: '🏠',
      description: 'Komplette Räumung von Wohnungen',
    },
    {
      name: 'Kellerräumung',
      icon: '🏠',
      description: 'Entrümpelung von Kellerräumen',
    },
    {
      name: 'Garageräumung',
      icon: '🚗',
      description: 'Räumung von Garagen und Stellplätzen',
    },
    {
      name: 'Büroräumung',
      icon: '🏢',
      description: 'Komplette Räumung von Büroräumen',
    },
    {
      name: 'Fensterreinigung',
      icon: '🪟',
      description: 'Streifenfreie Sauberkeit für alle Fenster',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassendes Angebot für gewerbliche und private Reinigungsdienste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Images */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/OnDiffoline_1_freigestellt_crop.jpg"
                alt="OnDiffoline - Professionelle Reinigungsdienste"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Umfassende Reinigungsdienste</h3>
                <p className="text-lg opacity-90">Von der Grundreinigung bis zur Spezialreinigung</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/OnDiffoline_2_freigestellt_crop.jpg"
                alt="OnDiffoline - Qualität und Zuverlässigkeit"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Höchste Qualitätsstandards</h3>
                <p className="text-lg opacity-90">Professionelle Ausführung mit modernster Technik</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#00467b] text-white font-semibold rounded-full hover:bg-[#005a9c] transition-all shadow-lg"
          >
            Kostenlos Anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
