'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allConsent));
    setIsVisible(false);
    
    // Enable analytics and marketing cookies
    enableAnalytics();
    enableMarketing();
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Enable selected cookies
    if (preferences.analytics) enableAnalytics();
    if (preferences.marketing) enableMarketing();
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const enableAnalytics = () => {
    // Google Analytics or other analytics
    console.log('Analytics cookies enabled');
    // Add your analytics code here
  };

  const enableMarketing = () => {
    // Marketing/tracking cookies
    console.log('Marketing cookies enabled');
    // Add your marketing code here
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {!showPreferences ? (
              // Main Banner
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[rgb(100,13,27)] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Cookie-Einstellungen</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
                    Einige Cookies sind notwendig für die Funktionalität der Website, während andere uns helfen, 
                    diese Website und die Nutzererfahrung zu verbessern. Sie können Ihre Auswahl jederzeit ändern.
                  </p>
                  <div className="mt-3">
                    <a 
                      href="/datenschutz" 
                      className="text-[rgb(100,13,27)] hover:underline font-medium"
                    >
                      Mehr erfahren in unserer Datenschutzerklärung
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Ablehnen
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-3 border-2 border-[rgb(100,13,27)] text-[rgb(100,13,27)] font-semibold rounded-lg hover:bg-[rgb(100,13,27)] hover:text-white transition-colors duration-200"
                  >
                    Einstellungen
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-[rgb(100,13,27)] text-white font-semibold rounded-lg hover:bg-[rgb(100,13,27)]/90 transition-colors duration-200"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            ) : (
              // Preferences Panel
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">Notwendige Cookies</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Immer aktiv
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">Analyse-Cookies</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Optional
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                        indem sie Informationen anonym sammeln und melden.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                          preferences.analytics ? 'bg-[rgb(100,13,27)]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">Marketing-Cookies</h4>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Optional
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Diese Cookies werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                          preferences.marketing ? 'bg-[rgb(100,13,27)]' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={rejectAll}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={acceptSelected}
                    className="px-6 py-3 bg-[rgb(100,13,27)] text-white font-semibold rounded-lg hover:bg-[rgb(100,13,27)]/90 transition-colors duration-200"
                  >
                    Auswahl speichern
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
