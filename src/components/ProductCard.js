import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import formatPrice from '../utils/formatPrice';

export default function ProductCard({ product }) {
  // Проверяем, есть ли у товара видео и не является ли это ЗМЗ-405 евро 2 (id: 2), а также исключаем id 7 и 8
  const hasVideo = product.videoUrl !== undefined && product.id !== 2 && product.id !== 7 && product.id !== 8;
  
  // Для ЗМЗ-405 евро 2 (id: 2) всегда используем фото zmz-405-22.jpg
  const imageUrl = product.id === 2 
    ? '/zmz-405-22.jpg' 
    : (product.images && product.images.length > 0 ? product.images[0] : product.imageUrl);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 w-full">
          {hasVideo ? (
            <div className="w-full h-full relative">
              <video 
                src={product.videoUrl}
                className="w-full h-full object-contain"
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary bg-opacity-80 rounded-full p-3 text-white">
                  <FaPlay />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-contain"
            />
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-primary">{formatPrice(product.price)}</span>
          
          <Link href={`/product/${product.id}`} className="bg-secondary text-white px-3 py-2 rounded-md hover:bg-primary transition-colors flex items-center">
            Подробнее <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
} 