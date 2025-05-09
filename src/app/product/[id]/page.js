"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaTruck, FaShieldAlt, FaRegCreditCard } from 'react-icons/fa';
import formatPrice from '../../../utils/formatPrice';
import ProductTabs from '../../../components/ProductTabs';
import ImageGallery from '../../../components/ImageGallery';
import { productsData, getProductById } from '../../../data/products';

export default function ProductPage({ params }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
        <p className="mb-8">Запрашиваемый товар не существует или был удален.</p>
        <Link href="/catalog" className="bg-primary text-white px-6 py-3 rounded-md">
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Главная
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/catalog" className="text-gray-600 hover:text-primary">
                  Каталог
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-800">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
        
        {/* Основная информация о товаре */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ImageGallery images={product.images || [product.imageUrl]} videoUrl={product.videoUrl} />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.shortDescription}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Артикул:</span>
                <span className="font-medium">ДВ{product.id.toString().padStart(4, '0')}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Наличие:</span>
                <span className="text-green-600 font-medium">В наличии</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Гарантия:</span>
                <span className="font-medium">{product.specifications?.warranty || "1 месяц"}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-primary mb-2">{formatPrice(product.price)}</div>
              <div className="text-sm text-gray-500">Цена указана без учета НДС</div>
            </div>
            
            <div className="flex space-x-4">
              <Link href={`/product/${product.id}/request`} className="bg-primary text-white px-6 py-3 rounded-md flex items-center hover:bg-primary/90 transition-colors">
                Оставить заявку
              </Link>
              <Link href={`tel:+79681177773`} className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
                Позвонить
              </Link>
            </div>
          </div>
        </div>
        
        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaTruck className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Доставка</h3>
              <p className="text-sm text-gray-600">По всей России</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaShieldAlt className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Гарантия</h3>
              <p className="text-sm text-gray-600">12 месяцев</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaRegCreditCard className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Оплата</h3>
              <p className="text-sm text-gray-600">Наличные и безнал</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <svg className="text-primary w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.5a6.5 6.5 0 0 0-5.478 10.025l.334-.667-.334.667A.4.4 0 0 0 5 13.5h10a.4.4 0 0 0 .478-.475A6.5 6.5 0 0 0 10 3.5zm0-1a7.5 7.5 0 0 1 7.475 8.076A1.4 1.4 0 0 1 15 12.5H5a1.4 1.4 0 0 1-1.474-1.425A7.5 7.5 0 0 1 10 2.5z"/>
              <path d="M15 14.5a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1z"/>
            </svg>
            <div>
              <h3 className="font-medium">Консультация</h3>
              <p className="text-sm text-gray-600">Подбор и установка</p>
            </div>
          </div>
        </div>
        
        {/* Табы (Описание и характеристики) */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <ProductTabs product={product} />
        </div>
        
        {/* Рекомендуемые товары */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Вам может понравиться</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/product/${relatedProduct.id}`}>
                  <div className="relative h-64 w-full">
                    <Image 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link href={`/product/${relatedProduct.id}`} className="block">
                    <h3 className="font-medium hover:text-primary transition-colors">{relatedProduct.name}</h3>
                  </Link>
                  <div className="mt-2 font-bold text-primary">{formatPrice(relatedProduct.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Кнопка возврата в каталог */}
        <div className="text-center">
          <Link href="/catalog" className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    </div>
  );
} 