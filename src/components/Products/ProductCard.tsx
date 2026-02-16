import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onQuickView?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
}

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
}: ProductCardProps) {
  const statusConfig = {
    available: { label: 'متاح', color: 'bg-green-500' },
    'coming-soon': { label: 'قريباً', color: 'bg-yellow-500' },
    'sold-out': { label: 'نفذ', color: 'bg-gray-500' },
  };

  const status = statusConfig[product.status];
  const isDisabled = product.status !== 'available';

  return (
    <div
      className="group rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
      style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)' }}
    >
      <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4">
          <span className={`${status.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {status.label}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onQuickView?.(product.id)}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 px-4 py-2 bg-[#243247] text-[#e7ddcc] font-semibold rounded-lg hover:bg-[#e7ddcc] hover:text-[#243247]"
          >
            التفاصيل
          </button>
        </div>
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#243247] mb-2 line-clamp-2 product-name text-center">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-center">
          {product.descriptionAr}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#243247]">{product.price} جنيه</span>
          {!isDisabled && (
            <button
              onClick={() => onQuickView?.(product.id)}
              className="px-4 py-2 bg-[#243247] text-[#e7ddcc] font-semibold rounded-lg hover:bg-[#e7ddcc] hover:text-[#243247] transition-all duration-300"
            >
              التفاصيل
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
