import DecorativeIcon from '../DecorativeIcons';

interface HeroProps {
  onShopClick?: () => void;
  onStoryClick?: () => void;
}

export default function Hero({ onShopClick, onStoryClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(36, 50, 71, 0.5) 0%, rgba(36, 50, 71, 0.3) 100%), url('/header.jpg')",
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e7ddcc]" />

      <DecorativeIcon icon="crown" position={{ top: '15%', left: '10%' }} delay={0} />
      <DecorativeIcon icon="diamond" position={{ top: '25%', right: '12%' }} delay={1.5} />
      <DecorativeIcon icon="sparkles" position={{ bottom: '30%', left: '8%' }} delay={3} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-9 leading-tight">
          .خالد. راقٍ. أصيل
        </h1>

        <p className="text-lg md:text-2xl text-white mb-12 font-light">
          ...من أصالة ورقيّ الماضي
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onShopClick}
            className="px-8 py-4 bg-[#243247] text-[#e7ddcc] font-semibold rounded-lg hover:bg-[#e7ddcc] hover:text-[#243247] transition-all duration-300 transform hover:scale-105"
          >
            Orzi مجموعة
          </button>
          <button
            onClick={onStoryClick}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#243247] transition-all duration-300 transform hover:scale-105"
          >
            رؤيتنا
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
