import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineReload, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

export default function ProductCard({ img, price, offerPrice, title }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md group">
      <div className="p-4">

        <div className="relative bg-white rounded-lg p-8 mb-4">
          {/* Product image */}
          <div className="flex justify-center items-center h-64">
            <Image src={img} alt="Magic Mouse" width={300} height={300} className="max-w-full max-h-full object-contain" />
          </div>

          {/* Action buttons on the right */}
          <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white hover:bg-gray-50 shadow-sm border border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200">
              <AiOutlineHeart className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 bg-white hover:bg-gray-50 shadow-sm border border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200">
              <AiOutlineShoppingCart className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 bg-white hover:bg-gray-50 shadow-sm border border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200">
              <AiOutlineSearch className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 bg-white hover:bg-gray-50 shadow-sm border border-gray-200 rounded-md flex items-center justify-center transition-colors duration-200">
              <AiOutlineReload className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Product details */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>

          {/* Star rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <AiOutlineStar key={i} className="w-4 h-4 text-primary" />
            ))}
            <span className="text-sm text-gray-500 ml-1">(0)</span>
          </div>

          {/* Price section */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">$ <span>{offerPrice}</span></span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$<span>{price}</span></span>
              <span className="text-sm text-orange-500 font-medium">1% Off</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
