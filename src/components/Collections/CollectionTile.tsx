import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Collection } from '../../types/product';

interface CollectionTileProps {
  collection: Collection;
  onActionClick?: () => void;
}

export default function CollectionTile({
  collection,
  onActionClick,
}: CollectionTileProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasSlider = collection.images && collection.images.length > 1;
  const images = collection.images || [collection.image];
  const isFeatured = collection.featured;

  useEffect(() => {
    if (!hasSlider) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hasSlider, images.length]);

  const statusConfig = {
    available: {
      label: 'متاح',
      bgColor: 'bg-green-500',
      buttonLabel: 'اكتشف',
    },
    'coming-soon': {
      label: 'قريباً',
      bgColor: 'bg-yellow-500',
      buttonLabel: 'أُعلمني',
    },
    'sold-out': {
      label: 'نفذ',
      bgColor: 'bg-gray-500',
      buttonLabel: 'غير متاح',
    },
  };

  const config = statusConfig[collection.status];
  const isDisabled = collection.status === 'sold-out';

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`group relative h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isFeatured
          ? 'md:scale-105 hover:scale-110'
          : 'transform hover:scale-105'
      }`}
      style={{
        boxShadow: isFeatured
          ? '0 16px 48px rgba(36, 50, 71, 0.2), 0 0 0 2px #e7ddcc, 0 0 24px rgba(231, 221, 204, 0.3)'
          : '0 8px 24px rgba(0, 0, 0, 0.06)',
      }}
      onClick={onActionClick}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${collection.name} ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            index === currentImageIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          } ${isDisabled ? 'grayscale' : ''}`}
        />
      ))}

      {hasSlider && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#243247] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#243247] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-6' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div
        className={`absolute inset-0 ${
          isDisabled
            ? 'bg-black/40'
            : 'bg-gradient-to-b from-transparent via-transparent to-black/60'
        } transition-all duration-300`}
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex items-center gap-3 mb-4 justify-end">
          <span
            className={`${config.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {config.label}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-2 product-name">{collection.name}</h3>
        <p className="text-sm text-gray-200 mb-6 line-clamp-2 text-center">
          {collection.descriptionAr}
        </p>

        {collection.status === 'available' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onActionClick?.();
            }}
            className="self-start px-6 py-2 font-semibold rounded-lg transition-all duration-300 bg-[#e7ddcc] text-[#243247] hover:bg-white transform hover:scale-105 hover:shadow-lg"
          >
            {config.buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}
