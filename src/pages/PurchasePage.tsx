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
    <div className="min-h-screen bg-[#e7ddcc] py-12 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#243247] hover:underline"
        >
          <X size={20} />
          العودة
        </button>

        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#243247] mb-12 text-center">
            أكمل طلبك
          </h1>
          <OrderForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
