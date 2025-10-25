'use client';

import { useState, useEffect } from 'react';

export default function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
    honeypot: '', // Bot-Schutz: verstecktes Feld
  });
  const [formStartTime, setFormStartTime] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'bot-detected'>('idle');

  // Speichere die Zeit, wenn die Komponente geladen wird
  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bot-Schutz 1: Honeypot - wenn das versteckte Feld ausgefüllt ist, ist es ein Bot
    if (formData.honeypot !== '') {
      console.log('Bot detected: Honeypot field was filled');
      setSubmitStatus('bot-detected');
      return;
    }

    // Bot-Schutz 2: Zeitprüfung - wenn das Formular in weniger als 3 Sekunden ausgefüllt wurde
    const timeDiff = Date.now() - formStartTime;
    if (timeDiff < 3000) {
      console.log('Bot detected: Form submitted too quickly');
      setSubmitStatus('bot-detected');
      return;
    }

    // Hier würde die Bewertung gespeichert werden
    console.log('Bewertung eingereicht:', {
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      comment: formData.comment,
    });

    setSubmitStatus('success');

    // Formular zurücksetzen
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        rating: 5,
        comment: '',
        honeypot: '',
      });
      setSubmitStatus('idle');
      setFormStartTime(Date.now());
    }, 3000);
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-6 h-6 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 fill-current'
            } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
            viewBox="0 0 20 20"
            onClick={() => {
              if (interactive) {
                setFormData({ ...formData, rating: star });
              }
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bewertungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das sagen unsere zufriedenen Kunden über uns
          </p>
        </div>


        {/* Review Form */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
          <div className="bg-[#00467b] text-white p-8">
            <h3 className="text-3xl font-bold mb-2">Ihre Meinung zählt</h3>
            <p className="text-white/90">
              Teilen Sie Ihre Erfahrungen mit uns
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Honeypot field - versteckt für echte Benutzer, sichtbar für Bots */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website">Website (bitte leer lassen)</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail <span className="text-gray-400">(optional, wird nicht veröffentlicht)</span>
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
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Bewertung <span className="text-[#6c0c1c]">*</span>
              </label>
              <div className="flex items-center gap-4">
                {renderStars(formData.rating, true)}
                <span className="text-gray-600 font-medium">
                  {formData.rating} von 5 Sternen
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                Ihre Bewertung <span className="text-[#6c0c1c]">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                required
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00467b] focus:outline-none transition-colors resize-none text-gray-900"
                placeholder="Erzählen Sie uns von Ihren Erfahrungen mit unserem Service..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Vielen Dank für Ihre Bewertung!</h4>
                  <p className="text-sm text-green-700">
                    Ihre Bewertung wurde erfolgreich eingereicht und wird nach Prüfung veröffentlicht.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'bot-detected' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-red-900 mb-1">Verdächtige Aktivität erkannt</h4>
                  <p className="text-sm text-red-700">
                    Bitte füllen Sie das Formular sorgfältig aus und versuchen Sie es erneut.
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'success'}
              className={`w-full px-8 py-4 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                submitStatus === 'success'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#6c0c1c] hover:bg-[#8a1024]'
              }`}
            >
              {submitStatus === 'success' ? 'Bewertung eingereicht' : 'Bewertung abgeben'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Ihre Bewertung wird vor der Veröffentlichung geprüft.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-bold text-blue-900 mb-1">Geschützt vor Spam</h4>
                <p className="text-sm text-blue-700">
                  Dieses Formular ist mit einem intelligenten Bot-Schutz ausgestattet, der echte Bewertungen von automatisierten Einträgen unterscheidet - ohne nervige Captchas.
                </p>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
