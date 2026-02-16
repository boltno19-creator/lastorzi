import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images = [
    { id: 1, src: '/straight.jpg', alt: 'إسورة مستقيمة - تصميم حديث' },
    { id: 2, src: '/curved.jpg', alt: 'إسورة منحنية - تصميم فاخر' },
    { id: 3, src: '/curvedgold.jpg', alt: 'إسورة منحنية ذهبي - حصري للنساء' },
    { id: 4, src: '/curved1.jpg', alt: 'إسورة منحنية - عرض علوي' },
    { id: 5, src: '/curvedgold1.jpg', alt: 'إسورة منحنية ذهبي - على المعصم' },
    { id: 6, src: '/straight1.jpg', alt: 'إسورة مستقيمة - عرض جانبي' },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === activeSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#1B3B4D] p-3 rounded-full transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#1B3B4D] p-3 rounded-full transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide
                ? 'bg-[#1B3B4D] w-8'
                : 'bg-[#1B3B4D] w-2 opacity-40 hover:opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        {activeSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProductSlider;
