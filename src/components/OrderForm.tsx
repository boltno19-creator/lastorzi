import { useState } from 'react';
import { OrderFormData, governorates } from '../types/form';
import styles from './OrderForm.module.css';

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  isSubmitting: boolean;
}

export default function OrderForm({ onSubmit, isSubmitting }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    governorate: '',
    area: '',
    address: '',
    straightQuantity: 0,
    curvedQuantity: 0,
    curvedGoldQuantity: 0,
  });

  const [errors, setErrors] = useState<Partial<OrderFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'governorate' ? { area: '' } : {}),
    }));
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.governorate) newErrors.governorate = 'المحافظة مطلوبة';
    if (!formData.area) newErrors.area = 'المنطقة مطلوبة';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';

    const straightQtyInput = document.getElementById('straightQty') as HTMLInputElement;
    const curvedQtyInput = document.getElementById('curvedQty') as HTMLInputElement;
    const curvedGoldQtyInput = document.getElementById('curvedGoldQty') as HTMLInputElement;
    const straightQty = straightQtyInput ? parseInt(straightQtyInput.value) || 0 : 0;
    const curvedQty = curvedQtyInput ? parseInt(curvedQtyInput.value) || 0 : 0;
    const curvedGoldQty = curvedGoldQtyInput ? parseInt(curvedGoldQtyInput.value) || 0 : 0;

    if (straightQty === 0 && curvedQty === 0 && curvedGoldQty === 0) {
      newErrors.address = 'اختر كمية من منتج واحد على الأقل';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const straightQtyInput = document.getElementById('straightQty') as HTMLInputElement;
      const curvedQtyInput = document.getElementById('curvedQty') as HTMLInputElement;
      const curvedGoldQtyInput = document.getElementById('curvedGoldQty') as HTMLInputElement;

      const straightQty = straightQtyInput ? parseInt(straightQtyInput.value) || 0 : 0;
      const curvedQty = curvedQtyInput ? parseInt(curvedQtyInput.value) || 0 : 0;
      const curvedGoldQty = curvedGoldQtyInput ? parseInt(curvedGoldQtyInput.value) || 0 : 0;

      const finalFormData: OrderFormData = {
        ...formData,
        straightQuantity: straightQty,
        curvedQuantity: curvedQty,
        curvedGoldQuantity: curvedGoldQty,
      };

      onSubmit(finalFormData);
    }
  };

  const areas = formData.governorate
    ? governorates[formData.governorate as keyof typeof governorates]
    : [];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          الاسم <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          placeholder="أدخل اسمك الكامل"
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          رقم الهاتف <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
          placeholder="01xxxxxxxxx"
        />
        {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          المحافظة <span className="text-red-500">*</span>
        </label>
        <select
          name="governorate"
          value={formData.governorate}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">اختر المحافظة</option>
          {Object.keys(governorates).map((gov) => (
            <option key={gov} value={gov}>
              {gov}
            </option>
          ))}
        </select>
        {errors.governorate && (
          <p className={styles.errorMessage}>{errors.governorate}</p>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          المنطقة <span className="text-red-500">*</span>
        </label>
        <select
          name="area"
          value={formData.area}
          onChange={handleChange}
          disabled={!formData.governorate}
          className={styles.select}
          style={!formData.governorate ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          <option value="">اختر المنطقة</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        {errors.area && <p className={styles.errorMessage}>{errors.area}</p>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          العنوان بالتفصيل <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className={styles.textarea}
          placeholder="الشارع، رقم المبنى، الدور، معالم قريبة..."
        />
        {errors.address && <p className={styles.errorMessage}>{errors.address}</p>}
      </div>

      <div className={styles.quantitySection}>
        <label className={styles.quantityLabel}>
          الكمية المطلوبة من كل منتج <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={styles.productCard}>
            <img
              src="/straight.jpg"
              alt="إسورة مستقيمة"
              className={styles.productImage}
            />
            <p className={styles.productName}>Aura</p>
            <div className="flex items-center justify-center gap-2">
              <label htmlFor="straightQty" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                الكمية:
              </label>
              <input
                id="straightQty"
                name="straightQty"
                type="number"
                min="0"
                max="10"
                defaultValue="0"
                className={styles.quantityInput}
              />
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src="/curved.jpg"
              alt="إسورة منحنية"
              className={styles.productImage}
            />
            <p className={styles.productName}>Harmonia</p>
            <div className="flex items-center justify-center gap-2">
              <label htmlFor="curvedQty" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                الكمية:
              </label>
              <input
                id="curvedQty"
                name="curvedQty"
                type="number"
                min="0"
                max="10"
                defaultValue="0"
                className={styles.quantityInput}
              />
            </div>
          </div>

          <div className={styles.productCard}>
            <img
              src="/curvedgold.jpg"
              alt="إسورة منحنية ذهبي"
              className={styles.productImage}
            />
            <p className={styles.productName}>Sophia</p>
            <p className={styles.productLabel}>حصري للنساء</p>
            <div className="flex items-center justify-center gap-2">
              <label htmlFor="curvedGoldQty" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                الكمية:
              </label>
              <input
                id="curvedGoldQty"
                name="curvedGoldQty"
                type="number"
                min="0"
                max="10"
                defaultValue="0"
                className={styles.quantityInput}
              />
            </div>
          </div>
        </div>
        {errors.address && errors.address.includes('منتج') && (
          <p className={styles.errorMessage}>{errors.address}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
      </button>
    </form>
  );
}
