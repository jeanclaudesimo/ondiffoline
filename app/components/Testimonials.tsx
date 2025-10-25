export default function Testimonials() {
  const testimonials = [
    {
      name: 'Denise Ruff',
      company: 'Privathaushalt',
      rating: 5,
      text: 'Die Reinigungsfirma hat hervorragende Arbeit geleistet! Unser Privathaushalt wurde gründlich und mit großer Sorgfalt gereinigt. Der Service war professionell, zuverlässig und dabei zu einem absolut fairen Preis. Wir sind mehr als zufrieden und können die Firma wärmstens weiterempfehlen!',
    },
    {
      name: 'Bridinette Kwendja',
      company: 'Gastronomie & Privathaushalt',
      rating: 5,
      text: 'Professionelles Angebot, schnelle Terminvereinbarung, sympathisch und vor allem super sauber geputzt. Ich bin sehr zufrieden.',
    },
    {
      name: 'Arnold Fosso',
      company: 'Ferienwohnung',
      rating: 5,
      text: 'Wir sind sehr mit der angebotenen und ausgeführten Leistung zufrieden. Eine absolute Referenz für Sauberkeit, Ordnung und Komfort. Die Preise sind fair jedoch die Leistung auf hohem Niveau. Die nächste Beauftragung zum Jahren 2026 folgt auf jeden Fall.',
    },
    {
      name: 'Michael Schuler',
      company: 'Firmenreinigung',
      rating: 5,
      text: 'Super zuverlässiger Partner. Absolut blitzsaubere Arbeit. Wir sind glücklich, dass ONDIFFOLINE unser Partner ist. Kann ich nur weiterempfehlen.',
    },
    {
      name: 'Nadja Rundel',
      company: 'Fensterreinigung',
      rating: 5,
      text: 'Super Team, immer wieder gerne.',
    },
    {
      name: 'Rebecca Kuate / Schinzel',
      company: 'Bauabschlussreinigung',
      rating: 5,
      text: 'Ich bin äußerst zufrieden mit der Leistung! Alles wurde gründlich und sorgfältig gereinigt, selbst auf kleine Details wurde geachtet. Das Team war pünktlich, professionell und sehr freundlich.',
    },
    {
      name: 'Laura Kunzelmann',
      company: 'Fensterreinigung',
      rating: 5,
      text: 'Top Service und erstklassige Fensterreinigung! Ich bin mehr als zufrieden mit dem Service von Ondiffoline! Die Fensterreinigung wurde professionell und äußerst gründlich durchgeführt.',
    },
    {
      name: 'Michelle Yenda',
      company: 'Event- & Clubreinigung',
      rating: 5,
      text: 'Zuverlässige Firma ich kann nur weiter empfehlen. Wir sind vor allem zufrieden mit der Haushalt Reinigung.',
    },
    {
      name: 'Josefa Pagui',
      company: 'Haushaltsreinigung',
      rating: 5,
      text: 'Top Service!!!! Super schnell und sehr zuverlässig.',
    },
    {
      name: 'Neomi Mokathe',
      company: 'Haushaltsreinigung',
      rating: 5,
      text: 'Sehr gute Arbeit. Immer gerne wieder. Ich kann nur weiterempfehlen',
    },
    {
      name: 'Gitte Wenk',
      company: 'Fensterreinigung',
      rating: 5,
      text: 'Reinigung der Fenster mit Rahmen. Die Reinigung wurde absolut sauber durchgeführt. Ich bin sehr zufrieden gewesen. Bis ins kleinste Detail wurden auch die Rahmen gereinigt.',
    },
    {
      name: 'Katja D.',
      company: 'Fensterreinigung',
      rating: 5,
      text: 'Wir sind rundum zufrieden; Sehr freundlich, zuverlässig und ausgesprochen gründlich.',
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
