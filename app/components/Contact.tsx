'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne individuell
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Ihre Ansprechpartner
            </h3>

            {/* Phone */}
            <div className="group">
              <a
                href="tel:+491781757330"
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00467b]"
              >
                <div className="w-14 h-14 bg-[#00467b] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Telefon</h4>
                  <p className="text-[#00467b] font-semibold text-xl">
                    +49 178 1757330
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Mo-Fr: 8:00 - 18:00 Uhr</p>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="group">
              <a
                href="mailto:team@ondiffoline.de"
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#6c0c1c]"
              >
                <div className="w-14 h-14 bg-[#6c0c1c] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">E-Mail</h4>
                  <p className="text-[#6c0c1c] font-semibold text-xl break-all">
                    team@ondiffoline.de
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Antwort innerhalb von 24h</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-2 border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Standort</h4>
                <p className="text-gray-700 font-medium">Regional und Umgebung</p>
                <p className="text-sm text-gray-600 mt-2">Deutschlandweit im Einsatz</p>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Kostenlose Erstberatung</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Wir beraten Sie unverbindlich und erstellen Ihnen ein individuelles Angebot passend zu Ihren Bedürfnissen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-[#6c0c1c] p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Rückruf anfragen</h3>
                <p className="text-white/90">
                  Wir melden uns schnellstmöglich bei Ihnen
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors text-gray-900"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors resize-none text-gray-900"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00467b] text-white font-bold text-lg rounded-xl hover:bg-[#005a9c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Jetzt Rückruf anfragen
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
