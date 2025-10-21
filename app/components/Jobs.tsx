'use client';

import { useState } from 'react';

export default function Jobs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const jobOpenings = [
    {
      title: 'Reinigungskraft (m/w/d)',
      type: 'Vollzeit / Teilzeit',
      location: 'Regional und Umgebung',
      description: 'Wir suchen zuverlässige Reinigungskräfte für verschiedene Einsatzorte',
      requirements: [
        'Zuverlässigkeit und Pünktlichkeit',
        'Sorgfältige Arbeitsweise',
        'Teamfähigkeit',
        'Bereitschaft zur Schichtarbeit',
      ],
    },
    {
      title: 'Objektleiter (m/w/d)',
      type: 'Vollzeit',
      location: 'Regional',
      description: 'Zur Verstärkung unseres Teams suchen wir einen erfahrenen Objektleiter',
      requirements: [
        'Erfahrung in der Gebäudereinigung',
        'Führungserfahrung',
        'Organisationstalent',
        'Führerschein Klasse B',
      ],
    },
    {
      title: 'Bürokraft (m/w/d)',
      type: 'Teilzeit',
      location: 'Büro',
      description: 'Unterstützung im Backoffice für administrative Tätigkeiten',
      requirements: [
        'Erfahrung im Büro',
        'MS Office Kenntnisse',
        'Organisationsgeschick',
        'Kommunikationsstärke',
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bewerbung gesendet:', formData);
    // Hier würde die Bewerbung verarbeitet werden
  };

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karriere bei Ondiffoline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der professionellen Reinigung
          </p>
        </div>

        {/* Job Openings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-[#00467b] text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {job.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{job.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Anforderungen:</h4>
                <ul className="space-y-2 mb-6">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
                <a
                  href="#bewerbung"
                  className="block w-full text-center px-6 py-3 bg-[#6c0c1c] text-white font-semibold rounded-lg hover:bg-[#8a1024] transition-colors"
                >
                  Jetzt Bewerben
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="bewerbung" className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-[#6c0c1c] text-white p-8">
            <h3 className="text-3xl font-bold mb-2">Online Bewerben</h3>
            <p className="text-white/90">
              Füllen Sie das Formular aus und wir melden uns bei Ihnen
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-[#6c0c1c]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors text-gray-900"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail <span className="text-[#6c0c1c]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors text-gray-900"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon <span className="text-[#6c0c1c]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors text-gray-900"
                  placeholder="+49 ..."
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                  Position <span className="text-[#6c0c1c]">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors text-gray-900"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="reinigungskraft">Reinigungskraft (m/w/d)</option>
                  <option value="objektleiter">Objektleiter (m/w/d)</option>
                  <option value="buerokraft">Bürokraft (m/w/d)</option>
                  <option value="andere">Andere Position</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Anschreiben / Motivation
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors resize-none text-gray-900"
                placeholder="Erzählen Sie uns etwas über sich und warum Sie bei uns arbeiten möchten..."
              />
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Nach dem Absenden des Formulars können Sie Ihre Bewerbungsunterlagen
                per E-Mail an <a href="mailto:team@ondiffoline.de" className="text-[#00467b] font-semibold">team@ondiffoline.de</a> senden.
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#00467b] text-white font-bold text-lg rounded-xl hover:bg-[#005a9c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Bewerbung absenden
            </button>

            <p className="text-xs text-gray-500 text-center">
              Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu
            </p>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Warum bei uns arbeiten?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#00467b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00467b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Faire Bezahlung</h4>
              <p className="text-gray-600">Leistungsgerechte Vergütung und pünktliche Zahlung</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#6c0c1c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6c0c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Flexible Arbeitszeiten</h4>
              <p className="text-gray-600">Anpassbare Schichten für Work-Life-Balance</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#00467b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00467b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Weiterbildung</h4>
              <p className="text-gray-600">Regelmäßige Schulungen und Entwicklungsmöglichkeiten</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#6c0c1c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6c0c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tolles Team</h4>
              <p className="text-gray-600">Familiäres Arbeitsklima und kollegiale Zusammenarbeit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
