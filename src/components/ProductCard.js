import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import formatPrice from '../utils/formatPrice';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link href={product.link}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imgSrc}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={product.link}>
          <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-primary">{formatPrice(product.price)}</span>
          
          <Link href={product.link} className="bg-secondary text-white px-3 py-2 rounded-md hover:bg-primary transition-colors flex items-center">
            Подробнее <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
} 