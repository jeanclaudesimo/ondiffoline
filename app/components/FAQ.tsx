'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Welche Regionen bedienen Sie?',
      answer: 'Wir sind hauptsächlich regional tätig, bieten unsere Dienstleistungen aber deutschlandweit an. Kontaktieren Sie uns gerne für ein individuelles Angebot.',
    },
    {
      question: 'Wie oft sollte eine professionelle Reinigung durchgeführt werden?',
      answer: 'Das hängt von der Nutzung und Art der Räumlichkeiten ab. Büros empfehlen wir 2-3x wöchentlich, Praxen täglich, und Geschäfte je nach Kundenfrequenz. Wir beraten Sie gerne individuell.',
    },
    {
      question: 'Sind Ihre Reinigungsmittel umweltfreundlich?',
      answer: 'Ja, wir verwenden überwiegend umweltfreundliche und biologisch abbaubare Reinigungsmittel. Für spezielle Anforderungen können wir auch komplett ökologische Reinigungsprodukte einsetzen.',
    },
    {
      question: 'Wie kurzfristig können Sie einen Termin anbieten?',
      answer: 'Bei Notfällen und dringenden Anfragen können wir oft innerhalb von 24-48 Stunden einen Termin anbieten. Für reguläre Termine empfehlen wir eine Vorlaufzeit von 3-5 Werktagen.',
    },
    {
      question: 'Benötige ich einen langfristigen Vertrag?',
      answer: 'Nein, wir bieten sowohl Einzelreinigungen als auch regelmäßige Verträge an. Sie können flexibel entscheiden, was am besten zu Ihnen passt.',
    },
    {
      question: 'Was kostet eine professionelle Reinigung?',
      answer: 'Die Kosten variieren je nach Art der Reinigung, Größe der Fläche und Häufigkeit. Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot.',
    },
    {
      question: 'Sind Ihre Mitarbeiter versichert?',
      answer: 'Ja, alle unsere Mitarbeiter sind vollständig versichert. Wir verfügen über eine Betriebshaftpflichtversicherung und alle rechtlich erforderlichen Versicherungen.',
    },
    {
      question: 'Muss ich bei der Reinigung anwesend sein?',
      answer: 'Nein, das ist nicht erforderlich. Viele unserer Kunden geben uns einen Schlüssel oder Code, sodass wir auch außerhalb der Geschäftszeiten reinigen können.',
    },
    {
      question: 'Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?',
      answer: 'Ihre Zufriedenheit ist uns wichtig. Bei Beanstandungen kommen wir kostenlos nochmal vorbei und beheben das Problem. Wir bieten eine 100% Zufriedenheitsgarantie.',
    },
    {
      question: 'Bieten Sie auch Notfall-Reinigungen an?',
      answer: 'Ja, wir bieten 24/7 Notfall-Reinigungen an, zum Beispiel nach Wasserschäden, Veranstaltungen oder anderen dringenden Situationen.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#00467b] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-2 border-gray-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-[#6c0c1c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">
                Ihre Frage war nicht dabei?
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Kontaktieren Sie uns gerne direkt. Wir beantworten all Ihre Fragen persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491781757330"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00467b] text-white font-semibold rounded-lg hover:bg-[#005a9c] transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Jetzt Anrufen
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6c0c1c] text-white font-semibold rounded-lg hover:bg-[#8a1024] transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Nachricht senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
