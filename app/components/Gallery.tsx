'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/OnDiffoline_1.jpg',
      alt: 'OnDiffoline - Professionelle Reinigung',
      title: 'Unser Team in Aktion',
      description: 'Erfahrene Fachkräfte bei der Arbeit'
    },
    {
      src: '/OnDiffoline_2.jpg',
      alt: 'OnDiffoline - Moderne Ausrüstung',
      title: 'Hochwertige Ausrüstung',
      description: 'Professionelle Reinigungsgeräte'
    },
    {
      src: '/OnDiffoline_3.jpg',
      alt: 'OnDiffoline - Saubere Ergebnisse',
      title: 'Perfekte Sauberkeit',
      description: 'Höchste Qualitätsstandards'
    },
    {
      src: '/OnDiffoline_1_freigestellt.jpg',
      alt: 'OnDiffoline - Teamarbeit',
      title: 'Gemeinsam zum Erfolg',
      description: 'Teamwork und Präzision'
    },
    {
      src: '/OnDiffoline_2_freigestellt.jpg',
      alt: 'OnDiffoline - Arbeitsplatz',
      title: 'Professioneller Arbeitsplatz',
      description: 'Saubere und organisierte Arbeitsumgebung'
    },
    {
      src: '/OnDiffoline_3_freigestellt.jpg',
      alt: 'OnDiffoline - Qualität',
      title: 'Qualität die überzeugt',
      description: 'Sichtbare Ergebnisse unserer Arbeit'
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Arbeit im Bild
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie professionell und gründlich wir arbeiten. 
            Jedes Bild zeigt unsere Leidenschaft für Sauberkeit und Qualität.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#00467b] text-white font-semibold rounded-full hover:bg-[#005a9c] transition-all shadow-lg"
          >
            Kostenlose Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
