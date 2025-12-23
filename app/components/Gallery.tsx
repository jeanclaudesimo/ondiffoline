'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  url: string;
  thumbnailUrl: string | null;
  title: string | null;
  caption: string | null;
  altText: string | null;
  width: number | null;
  height: number | null;
  position: number;
}

interface Gallery {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  coverImage: string | null;
  imageCount: number;
  position: number;
  images: GalleryImage[];
}

// Fallback images if API is not available
const fallbackImages = [
  {
    id: 1,
    url: '/OnDiffoline_1.jpg',
    thumbnailUrl: null,
    title: 'Unser Team in Aktion',
    caption: 'Erfahrene Fachkräfte bei der Arbeit',
    altText: 'OnDiffoline - Professionelle Reinigung',
    width: 1920,
    height: 1280,
    position: 1
  },
  {
    id: 2,
    url: '/OnDiffoline_2.jpg',
    thumbnailUrl: null,
    title: 'Hochwertige Ausrüstung',
    caption: 'Professionelle Reinigungsgeräte',
    altText: 'OnDiffoline - Moderne Ausrüstung',
    width: 1920,
    height: 1280,
    position: 2
  },
  {
    id: 3,
    url: '/OnDiffoline_3.jpg',
    thumbnailUrl: null,
    title: 'Perfekte Sauberkeit',
    caption: 'Höchste Qualitätsstandards',
    altText: 'OnDiffoline - Saubere Ergebnisse',
    width: 1920,
    height: 1280,
    position: 3
  },
  {
    id: 4,
    url: '/OnDiffoline_1_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Gemeinsam zum Erfolg',
    caption: 'Teamwork und Präzision',
    altText: 'OnDiffoline - Teamarbeit',
    width: 1920,
    height: 1280,
    position: 4
  },
  {
    id: 5,
    url: '/OnDiffoline_2_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Professioneller Arbeitsplatz',
    caption: 'Saubere und organisierte Arbeitsumgebung',
    altText: 'OnDiffoline - Arbeitsplatz',
    width: 1920,
    height: 1280,
    position: 5
  },
  {
    id: 6,
    url: '/OnDiffoline_3_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Qualität die überzeugt',
    caption: 'Sichtbare Ergebnisse unserer Arbeit',
    altText: 'OnDiffoline - Qualität',
    width: 1920,
    height: 1280,
    position: 6
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        // Use local API route as proxy to avoid CORS issues
        const response = await fetch('/api/gallery');

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery: ${response.status}`);
        }

        const data = await response.json();

        if (data.gallery && data.gallery.images && data.gallery.images.length > 0) {
          setImages(data.gallery.images);
        } else {
          console.log('No images in gallery, using fallback');
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError('Gallery konnte nicht geladen werden');
        // Keep fallback images
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-[300px] rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer"
                onClick={() => openModal(image.url)}
              >
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.url}
                    alt={image.altText || image.title || 'Gallery Image'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={image.url.startsWith('http')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    {image.title && <h3 className="text-lg font-semibold mb-1">{image.title}</h3>}
                    {image.caption && <p className="text-sm opacity-90">{image.caption}</p>}
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
        )}

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
