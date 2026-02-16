import DecorativeIcon from '../DecorativeIcons';

export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-[#e7ddcc] relative overflow-hidden">
      <DecorativeIcon icon="crown" position={{ top: '12%', left: '7%' }} delay={0} />
      <DecorativeIcon icon="sparkles" position={{ top: '18%', right: '9%' }} delay={2} />
      <DecorativeIcon icon="star" position={{ bottom: '20%', left: '10%' }} delay={4} />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #243247 25%, transparent 25%, transparent 75%, #243247 75%, #243247), linear-gradient(45deg, #243247 25%, transparent 25%, transparent 75%, #243247 75%, #243247)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-8" style={{ lineHeight: '1.8' }}>
          وُلِدت من التِراث<br/>
          صُنِعت للهوية<br/>
          تُلبس بثقة
        </h2>

        <div className="space-y-6 text-lg text-gray-700 font-light max-w-2xl mx-auto">
          <p>
            وُلدت من أصالة الماضي وعراقة الزمن الجميل، لتعيد تقديم الأناقة التي لا تخضع لزمن ولا تتأثر بتقلبات الموضة
          </p>

          <p>
            نستلهم من حقبة كان فيها الحضور هادئًا… لكنه لا يُنسى، والتفاصيل بسيطة… لكنها تترك أثرًا دائماً
          </p>

          <p>
            هدفنا أن نمنحك ذلك الإحساس النادر — أن تكون محل تقدير وانبهار دون سعي، ودون ضجيج
            <br/>
            ORZI أن تعكس حضورًا واثقًا، راقيًا، وخالدًا… بأسلوب لا يشبه إلّا
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-300">
          <p className="text-sm text-gray-600 font-semibold">
            ".خالد. راقٍ. أصيل"
          </p>
          <p className="text-gray-500 mt-2 product-name">— Orzi 1998</p>
        </div>
      </div>
    </section>
  );
}
