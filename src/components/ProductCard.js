import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">{product.price.toLocaleString()} ₽</span>
          
          <button className="bg-secondary text-white p-2 rounded-full hover:bg-primary transition-colors">
            <FaShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 