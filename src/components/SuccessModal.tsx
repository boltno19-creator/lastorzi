import { Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" dir="rtl">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#243247] mb-2">
          تم استلام طلبك
        </h3>
        <p className="text-gray-600 mb-6">
          سنتواصل معك خلال ٢٤ ساعة
        </p>
        <button
          onClick={onClose}
          className="bg-[#243247] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
        >
          شكراً
        </button>
      </div>
    </div>
  );
}
