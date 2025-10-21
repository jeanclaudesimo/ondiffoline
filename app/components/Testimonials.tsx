export default function Testimonials() {
  const testimonials = [
    {
      name: 'Thomas Schmidt',
      company: 'Restaurant am Markt',
      rating: 5,
      text: 'Hervorragende Arbeit! Die Küche und der Gastraum sind immer blitzsauber. Sehr professionell und zuverlässig.',
    },
    {
      name: 'Maria Weber',
      company: 'Weber & Partner Rechtsanwälte',
      rating: 5,
      text: 'Seit Jahren unser Partner für die Büroreinigung. Immer pünktlich und gründlich. Sehr zu empfehlen!',
    },
    {
      name: 'Andreas Müller',
      company: 'Event Location XL',
      rating: 5,
      text: 'Die Event-Reinigung ist fantastisch. Auch nach großen Veranstaltungen ist alles wieder perfekt sauber.',
    },
    {
      name: 'Petra Klein',
      company: 'Arztpraxis Dr. Klein',
      rating: 5,
      text: 'Hygiene ist in unserer Praxis das A und O. Ondiffoline erfüllt alle unsere hohen Anforderungen.',
    },
    {
      name: 'Stefan Bauer',
      company: 'Bauunternehmen Bauer GmbH',
      rating: 5,
      text: 'Die Bauabschlussreinigung war perfekt. Termintreu und sehr gründlich. Danke für die tolle Arbeit!',
    },
    {
      name: 'Julia Fischer',
      company: 'Hotel am Park',
      rating: 5,
      text: 'Professionelles Team mit Auge fürs Detail. Unsere Gäste schätzen die Sauberkeit sehr.',
    },
    {
      name: 'Michael Schneider',
      company: 'Fitness Studio Pro',
      rating: 5,
      text: 'Zuverlässige und gründliche Reinigung unseres Studios. Immer freundlich und flexibel.',
    },
    {
      name: 'Sandra Wagner',
      company: 'Mode Boutique Wagner',
      rating: 5,
      text: 'Unser Laden erstrahlt jeden Morgen in neuem Glanz. Ein tolles Service!',
    },
    {
      name: 'Robert Hoffmann',
      company: 'Industrie Solutions AG',
      rating: 5,
      text: 'Auch große Industriehallen werden zuverlässig und professionell gereinigt. Top Service!',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">aus {testimonials.length} Bewertungen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Werden Sie Teil unserer zufriedenen Kunden!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#6c0c1c] to-[#00467b] text-white font-semibold rounded-full hover:from-[#8a1024] hover:to-[#005a9c] transition-all shadow-lg"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
