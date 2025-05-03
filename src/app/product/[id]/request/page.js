"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import ContactForm from '../../../../components/ContactForm';
import { getProductById } from '../../../../data/products';

export default function ProductRequestPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  
  // Находим продукт по id
  const product = getProductById(productId);
  
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
                <Link href={`/product/${product.id}`} className="text-gray-600 hover:text-primary">
                  {product.name}
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-800">Заявка</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Информация о товаре</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.shortDescription}</p>
            </div>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Артикул:</span>
                <span className="font-medium">ДВ{product.id.toString().padStart(4, '0')}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Цена:</span>
                <span className="font-bold text-primary">{new Intl.NumberFormat('ru-RU').format(product.price)} ₽</span>
              </div>
            </div>
            <Link 
              href={`/product/${product.id}`}
              className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
            >
              Вернуться к товару
            </Link>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 