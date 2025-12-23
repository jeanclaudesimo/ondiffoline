'use client';

import { useState, useEffect, useRef } from 'react';
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

interface ImagePair {
  before: GalleryImage;
  after: GalleryImage;
}

// Fallback images if API is not available
const fallbackImages: GalleryImage[] = [
  {
    id: 1,
    url: '/OnDiffoline_1.jpg',
    thumbnailUrl: null,
    title: 'Vorher',
    caption: 'Vor der Reinigung',
    altText: 'Vorher',
    width: 1920,
    height: 1280,
    position: 1
  },
  {
    id: 2,
    url: '/OnDiffoline_1_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Nachher',
    caption: 'Nach der Reinigung',
    altText: 'Nachher',
    width: 1920,
    height: 1280,
    position: 2
  },
  {
    id: 3,
    url: '/OnDiffoline_2.jpg',
    thumbnailUrl: null,
    title: 'Vorher',
    caption: 'Vor der Reinigung',
    altText: 'Vorher',
    width: 1920,
    height: 1280,
    position: 3
  },
  {
    id: 4,
    url: '/OnDiffoline_2_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Nachher',
    caption: 'Nach der Reinigung',
    altText: 'Nachher',
    width: 1920,
    height: 1280,
    position: 4
  },
  {
    id: 5,
    url: '/OnDiffoline_3.jpg',
    thumbnailUrl: null,
    title: 'Vorher',
    caption: 'Vor der Reinigung',
    altText: 'Vorher',
    width: 1920,
    height: 1280,
    position: 5
  },
  {
    id: 6,
    url: '/OnDiffoline_3_freigestellt.jpg',
    thumbnailUrl: null,
    title: 'Nachher',
    caption: 'Nach der Reinigung',
    altText: 'Nachher',
    width: 1920,
    height: 1280,
    position: 6
  }
];

// Before/After Slider Component
function BeforeAfterSlider({ pair, index }: { pair: ImagePair; index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-ew-resize select-none bg-gray-900"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={pair.after.url}
            alt={pair.after.altText || 'Nachher'}
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={pair.after.url.startsWith('http')}
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={pair.before.url}
            alt={pair.before.altText || 'Vorher'}
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={pair.before.url.startsWith('http')}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
          Vorher
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg">
          Nachher
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ← Ziehen zum Vergleichen →
        </div>
      </div>

      {/* Caption */}
      {(pair.before.caption || pair.after.caption) && (
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {pair.before.caption || pair.after.caption}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>(fallbackImages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery');

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery: ${response.status}`);
        }

        const data = await response.json();

        if (data.gallery && data.gallery.images && data.gallery.images.length > 0) {
          // Sort by position
          const sortedImages = [...data.gallery.images].sort((a, b) => a.position - b.position);
          setImages(sortedImages);
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Create pairs from images (1+2, 3+4, 5+6, etc.)
  const imagePairs: ImagePair[] = [];
  for (let i = 0; i < images.length - 1; i += 2) {
    imagePairs.push({
      before: images[i],
      after: images[i + 1]
    });
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00467b]/10 text-[#00467b] text-sm font-semibold rounded-full mb-4">
            Unsere Ergebnisse
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vorher & Nachher
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit.
            Ziehen Sie den Regler, um den Unterschied zu sehen.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {imagePairs.map((pair, index) => (
              <BeforeAfterSlider key={pair.before.id} pair={pair} index={index} />
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#00467b]">500+</div>
            <div className="text-gray-600 text-sm mt-1">Zufriedene Kunden</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#00467b]">15+</div>
            <div className="text-gray-600 text-sm mt-1">Jahre Erfahrung</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#00467b]">100%</div>
            <div className="text-gray-600 text-sm mt-1">Ökologisch</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-[#00467b]">24/7</div>
            <div className="text-gray-600 text-sm mt-1">Erreichbar</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#00467b] text-white font-semibold rounded-full hover:bg-[#005a9c] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Jetzt kostenloses Angebot anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
