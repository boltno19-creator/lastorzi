import { useState } from 'react';
import OrderForm from '../components/OrderForm';
import SuccessModal from '../components/SuccessModal';
import { OrderFormData } from '../types/form';
import { X } from 'lucide-react';

interface PurchasePageProps {
  onBack: () => void;
}

export default function PurchasePage({ onBack }: PurchasePageProps) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = async (data: OrderFormData) => {
    const now = Date.now();
    if (now - lastSubmitTime < 1000) {
      return;
    }
    setLastSubmitTime(now);
    setIsSubmitting(true);

    try {
      const totalQuantity = data.straightQuantity + data.curvedQuantity + data.curvedGoldQuantity;
      const totalPrice = totalQuantity * 360;

      const formDataToSend = {
        name: data.name,
        phone: data.phone,
        governorate: data.governorate,
        area: data.area,
        address: data.address,
        straightQty: data.straightQuantity,
        curvedQty: data.curvedQuantity,
        curvedGoldQty: data.curvedGoldQuantity,
        totalPrice: totalPrice,
        timestamp: new Date().toISOString(),
      };

      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8uj_Mc166lFj9mVHIrVHUHm00SYGbjNT-7_0xzPGnEF12IYU0CiD5QZOA3771r6mW/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0ea] via-[#e7ddcc] to-[#f5f0ea] py-12 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#243247] hover:text-[#243247]/70 transition-all duration-300 bg-white/50 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm hover:shadow-md"
        >
          <X size={18} />
          <span className="font-light">العودة</span>
        </button>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-2xl border border-white/50">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#243247] mb-4 leading-tight">
              أكمل طلبك
            </h1>
            <p className="text-lg text-gray-600 font-light">
              نحن على بعد خطوة واحدة من إيصال قطعتك إليك
            </p>
            <div className="w-24 h-1 bg-[#243247] mx-auto mt-6"></div>
          </div>

          <OrderForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          <p>جميع المعلومات محمية بأعلى معايير الأمان</p>
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
