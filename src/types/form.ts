export interface OrderFormData {
  name: string;
  phone: string;
  governorate: string;
  area: string;
  address: string;
  straightQuantity: number;
  curvedQuantity: number;
  curvedGoldQuantity: number;
}

export const governorates = {
  'القاهرة': [
    'مدينة نصر',
    'المعادي',
    'الزمالك',
    'مصر الجديدة',
    'التجمع الخامس',
    'الشروق',
    'المقطم',
    'حلوان',
    'المعصرة',
    'المنيل'
  ],
  'الجيزة': [
    'الدقي',
    'المهندسين',
    'الهرم',
    'فيصل',
    'العمرانية',
    '6 أكتوبر',
    'الشيخ زايد',
    'الحوامدية',
    'البدرشين',
    'أوسيم',
    'البحيرة',
    'الوراق'
  ]
};
