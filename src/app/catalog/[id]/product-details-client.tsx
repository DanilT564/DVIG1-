'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMinus, FiPlus, FiCheck, FiHeart } from 'react-icons/fi';

// Product interface to define the expected props
export interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  oldPrice: number | null;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specs: {
    power: string;
    torque: string;
    volume: string;
    cylinders: string;
    fuel: string;
    weight: string;
    crankshaft: string;
    valves: string;
    cooling: string;
    injector: string;
  };
  applications: string[];
  advantages: string[];
}

// Product Details Client Component
export default function ProductDetailsClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  // Format price with spaces as thousand separators
  const formatPrice = (price: number) => {
    return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`;
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Add to cart
  const addToCart = () => {
    // Here you would typically dispatch to a cart context or state manager
    console.log('Added to cart:', {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-blue-600">
          Главная
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/catalog" className="text-gray-500 hover:text-blue-600">
          Каталог
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-600">{product.reviews} отзывов</div>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="text-3xl font-bold text-gray-900 mr-4">
                {formatPrice(product.price)}
              </div>
              {product.oldPrice && (
                <div className="text-xl text-gray-500 line-through">
                  {formatPrice(product.oldPrice)}
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {product.inStock ? (
                  <>
                    <FiCheck className="mr-1" />
                    В наличии
                  </>
                ) : (
                  'Нет в наличии'
                )}
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="text-sm font-medium text-gray-700 mb-2">Количество:</div>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100 disabled:opacity-50"
              >
                <FiMinus />
              </button>
              <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={addToCart}
              disabled={!product.inStock}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {addedToCart ? (
                <>
                  <FiCheck className="mr-2" /> Добавлено
                </>
              ) : (
                <>
                  <FiShoppingCart className="mr-2" /> В корзину
                </>
              )}
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FiHeart />
            </button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('description')}
              className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`mr-8 py-4 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Характеристики
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Применяемость
            </button>
          </nav>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-700 mb-6 whitespace-pre-wrap">{product.fullDescription}</p>
              
              <h3 className="text-lg font-semibold mb-4">Преимущества:</h3>
              <ul className="space-y-2">
                {product.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-green-500" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex border-b border-gray-100 pb-2">
                  <div className="w-1/2 text-gray-600 capitalize">
                    {key === 'power' && 'Мощность'}
                    {key === 'torque' && 'Крутящий момент'}
                    {key === 'volume' && 'Объем'}
                    {key === 'cylinders' && 'Цилиндры'}
                    {key === 'fuel' && 'Топливо'}
                    {key === 'weight' && 'Вес'}
                    {key === 'crankshaft' && 'Коленвал'}
                    {key === 'valves' && 'Клапаны'}
                    {key === 'cooling' && 'Охлаждение'}
                    {key === 'injector' && 'Система впрыска'}
                  </div>
                  <div className="w-1/2 font-medium">{value}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Применяется в моделях:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="mt-1 mr-2 text-blue-500" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 