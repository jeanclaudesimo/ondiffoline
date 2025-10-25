export default function ContactHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-2xl mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#00467b] to-gray-900 bg-clip-text text-transparent mb-6">
              PROFITIEREN SIE VON UNSERER REINIGUNGSFIRMA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] mx-auto rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Telefon</h3>
                <div className="text-center mb-6">
                  <a 
                    href="tel:+491781757330" 
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                  >
                    +49 178 1757330
                  </a>
                </div>
                <p className="text-gray-600 text-center mb-8 leading-relaxed flex-grow">
                  Sie haben Wünsche oder Fragen?<br />
                  Wir rufen Sie gerne zu Ihrem Wunschtermin zurück.
                </p>
                <div className="text-center mt-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Rückruf anfragen
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">ONDIFFOLINE</h3>
                <div className="text-center mb-8 flex-grow">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Altlachen 4<br />
                    <span className="font-semibold text-gray-800">72505 Krauchenwies</span>
                  </p>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      ✓ Regional und Umgebung<br />
                      ✓ Krauchenwies & Umkreis
                    </p>
                  </div>
                </div>
                <div className="text-center mt-auto">
                  <a
                    href="https://maps.google.com/?q=Altlachen+4,+72505+Krauchenwies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Standort anzeigen
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(100,13,27)] to-[rgb(100,13,27)] rounded-xl mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">E-Mail Kommunikation?</h3>
                <p className="text-gray-600 text-center mb-8 leading-relaxed flex-grow">
                  Sehr gerne! Schreiben Sie uns einfach.<br />
                  Wir melden uns gerne zurück.
                </p>
                <div className="text-center mt-auto">
                  <a
                    href="mailto:team@ondiffoline.de"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[rgb(100,13,27)] to-[rgb(100,13,27)] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Mail senden
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ihr regionaler Fachspezialist für professionelle Reinigungsdienste in Krauchenwies und Umgebung
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">✓ Zertifiziert</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">✓ Versichert</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">✓ Lokal verwurzelt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}