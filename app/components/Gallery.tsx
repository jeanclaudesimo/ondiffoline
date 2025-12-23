'use client';

import { useState, useEffect, useCallback } from 'react';
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

// Fallback images if API is not available
const fallbackImages: GalleryImage[] = [
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
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery');

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery: ${response.status}`);
        }

        const data = await response.json();

        if (data.gallery && data.gallery.images && data.gallery.images.length > 0) {
          setImages(data.gallery.images);
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, images.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, images.length, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Auto-play
  useEffect(() => {
    if (isFullscreen) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isFullscreen]);

  const currentImage = images[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Arbeit im Bild
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie professionell und gründlich wir arbeiten.
            Jedes Bild zeigt unsere Leidenschaft für Sauberkeit und Qualität.
          </p>
        </div>

        {loading ? (
          <div className="aspect-[16/9] max-w-5xl mx-auto rounded-2xl bg-gray-200 animate-pulse" />
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* Main Image Container */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group">
              {/* Current Image */}
              <div className="absolute inset-0">
                <Image
                  src={currentImage.url}
                  alt={currentImage.altText || currentImage.title || 'Gallery Image'}
                  fill
                  className={`object-cover transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                  quality={90}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  unoptimized={currentImage.url.startsWith('http')}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                {currentImage.title && (
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                    {currentImage.title}
                  </h3>
                )}
                {currentImage.caption && (
                  <p className="text-lg text-white/90 drop-shadow-md">
                    {currentImage.caption}
                  </p>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
                aria-label="Vorheriges Bild"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
                aria-label="Nächstes Bild"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                aria-label="Vollbild"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>

              {/* Progress Indicator */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-3 ring-[#00467b] ring-offset-2 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    quality={60}
                    sizes="128px"
                    unoptimized={image.url.startsWith('http')}
                  />
                </button>
              ))}
            </div>

            {/* Dots Indicator (Mobile) */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#00467b] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Zu Bild ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#00467b] text-white font-semibold rounded-full hover:bg-[#005a9c] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Kostenlose Beratung anfragen
          </a>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.url}
              alt={currentImage.altText || currentImage.title || 'Gallery Image'}
              fill
              className="object-contain"
              quality={100}
              sizes="100vw"
              unoptimized={currentImage.url.startsWith('http')}
            />
          </div>

          {/* Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
            <p className="text-sm text-white/60 mb-1">{currentIndex + 1} / {images.length}</p>
            {currentImage.title && <h3 className="text-xl font-semibold">{currentImage.title}</h3>}
            {currentImage.caption && <p className="text-white/80 mt-1">{currentImage.caption}</p>}
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
