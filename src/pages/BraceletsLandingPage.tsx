import DecorativeIcon from '../components/DecorativeIcons';

interface BraceletsLandingPageProps {
  onOrderNow: () => void;
}

export default function BraceletsLandingPage({ onOrderNow }: BraceletsLandingPageProps) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(36, 50, 71, 0.7) 0%, rgba(36, 50, 71, 0.5) 100%), url('/orzi-aura.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e7ddcc]" />

        <DecorativeIcon icon="crown" position={{ top: '15%', left: '10%' }} delay={0} />
        <DecorativeIcon icon="diamond" position={{ top: '25%', right: '12%' }} delay={1.5} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            ORZI مجموعة الأساور
          </h1>
          <p className="text-xl md:text-3xl text-white mb-12 font-light">
            .قطع خالدة تُروى قصة التراث والأناقة
          </p>
          <button
            onClick={onOrderNow}
            className="px-12 py-5 bg-[#e7ddcc] text-[#243247] font-bold text-lg rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            اقتنِ قطعتك الآن واترك أثرك
          </button>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative">
        <DecorativeIcon icon="sparkles" position={{ top: '10%', right: '8%' }} delay={2} />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#243247] mb-6">
              .من أصالة الماضي إلى حاضرك
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              كل إسورة من مجموعة ORZI تحمل روح التراث المصري، مصنوعة يدوياً من النحاس الأصيل ومطلية بالنيكل المقاوم للصدأ والتغير. قطع لا تتأثر بالزمن، بل تزداد قيمتها مع كل يوم
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-[#243247] mb-6">AURA - أورا</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                تصميم مستقيم، حضور هادئ. إسورة أورا تجسد البساطة الأنيقة. خط نظيف ومستقيم يعكس الثقة والهدوء في آن واحد
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  نحاس أصيل مطلي بالنيكل
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  مقاوم للصدأ والتغير
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  قابل للتعديل لجميع المقاسات
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/orzi-aura1.jpg"
                alt="AURA Bracelet"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/orzi-harmonia.jpg"
                alt="HARMONIA Bracelet"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#243247] mb-6">HARMONIA - هارمونيا</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                انحناءة تتبع حركتك، وتُكمل أسلوبك. تصميم منحني يتدفق مع حركتك الطبيعية، مما يوفر راحة استثنائية وجمالية راقية
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  تصميم انسيابي يتبع المعصم
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  راحة فائقة طوال اليوم
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  قطعة مميزة للشخصية المتفردة
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-[#243247] mb-6">SOPHIA - صوفيا</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                تصميم أنثوي راقٍ. قطعة تُورّث، لا تُستبدل. إسورة صوفيا بلمسة ذهبية دافئة، تجمع بين الأناقة الأنثوية والفخامة العريقة
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  طلاء ذهبي راقي
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  تصميم أنثوي متميز
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#243247] rounded-full"></span>
                  قطعة إرث عائلية
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/orzi-sophia1.jpg"
                alt="SOPHIA Bracelet"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#e7ddcc] relative">
        <DecorativeIcon icon="star" position={{ bottom: '15%', left: '10%' }} delay={3} />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-[#243247] mb-6">
              .لماذا ORZI؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#243247] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-[#e7ddcc]">١</span>
              </div>
              <h3 className="text-2xl font-bold text-[#243247] mb-4">جودة خالدة</h3>
              <p className="text-gray-700 leading-relaxed">
                نستخدم أجود أنواع النحاس مع طلاء نيكل وذهب عالي الجودة، مقاوم للصدأ والتغير، لقطع تدوم معك طويلاً
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#243247] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-[#e7ddcc]">٢</span>
              </div>
              <h3 className="text-2xl font-bold text-[#243247] mb-4">تصميم متفرد</h3>
              <p className="text-gray-700 leading-relaxed">
                كل قطعة مستوحاة من التراث المصري العريق، مع لمسة عصرية تناسب أسلوبك وتعكس شخصيتك
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#243247] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-[#e7ddcc]">٣</span>
              </div>
              <h3 className="text-2xl font-bold text-[#243247] mb-4">راحة مطلقة</h3>
              <p className="text-gray-700 leading-relaxed">
                تصميم قابل للتعديل يناسب جميع أحجام المعاصم، مع خامات مريحة للارتداء اليومي دون أي إزعاج
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/orzi-packging.jpeg"
                alt="ORZI Packaging"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-6">
                .تجربة كاملة
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                من اللحظة التي تفتح فيها العلبة، تبدأ تجربة ORZI. كل إسورة تأتي في تغليف راقي يليق بقيمتها، جاهزة للإهداء أو للاحتفاظ بها كذكرى ثمينة
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#243247] relative overflow-hidden">
        <DecorativeIcon icon="crown" position={{ top: '20%', right: '10%' }} delay={1} />
        <DecorativeIcon icon="diamond" position={{ bottom: '20%', left: '10%' }} delay={2.5} />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            .احصل على قطعتك اليوم
          </h2>
          <p className="text-xl text-[#e7ddcc] mb-12 leading-relaxed">
            كل إسورة بـ ٣٦٠ جنيه فقط. استثمار في الأناقة الخالدة
          </p>
          <button
            onClick={onOrderNow}
            className="px-16 py-6 bg-[#e7ddcc] text-[#243247] font-bold text-xl rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            اطلب الآن واترك انطباعاً لا يُنسى
          </button>
          <p className="text-sm text-[#e7ddcc] mt-8">
            توصيل سريع لجميع أنحاء مصر
          </p>
        </div>
      </section>
    </div>
  );
}
