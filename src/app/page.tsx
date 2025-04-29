'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiTruck, FiShield, FiCheckCircle, FiPhone, FiClock, FiTool, FiCheck, FiChevronRight, FiRotateCcw } from 'react-icons/fi';
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Данные о продуктах
const featuredProducts = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-409',
    description: 'Бензиновый двигатель для УАЗ Патриот, Хантер, Буханка',
    price: 215000,
    image: '/images/zmz-409.jpg',
    category: 'zmz',
  },
  {
    id: 2,
    name: 'Двигатель УМЗ-421',
    description: 'Бензиновый двигатель для ГАЗель, Соболь',
    price: 195000,
    image: '/images/umz-421.jpg',
    category: 'umz',
  },
  {
    id: 3,
    name: 'Двигатель ЗМЗ-405 Евро 3',
    description: 'Качественная реставрация с новыми запчастями',
    price: 185000,
    image: '/images/zmz-405.jpg',
    category: 'zmz',
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-4216',
    description: 'Бензиновый двигатель Евро-4 для ГАЗель Бизнес',
    price: 210000,
    image: '/images/umz-4216.jpg',
    category: 'umz',
  },
];

// Преимущества
const advantages = [
  {
    icon: <FiTruck size={36} />,
    title: 'Гибкие варианты',
    description: 'Сдайте старый - получите восстановленный',
  },
  {
    icon: <FiClock size={36} />,
    title: 'Сокращение времени',
    description: 'Избегайте простоя, двигатели всегда в наличии',
  },
  {
    icon: <FiTool size={36} />,
    title: 'Под ключ',
    description: 'Через 24 часа автомобиль уже будет в строю',
  },
  {
    icon: <FiCheck size={36} />,
    title: 'Надежность',
    description: 'Предоставляем гарантию на двигатели',
  },
];

// Категории
const categories = [
  {
    id: 'zmz',
    name: 'Двигатели ЗМЗ',
    image: '/images/category-zmz.jpg',
    description: 'Широкий выбор двигателей Заволжского моторного завода',
  },
  {
    id: 'umz',
    name: 'Двигатели УМЗ',
    image: '/images/category-umz.jpg',
    description: 'Моторы Ульяновского моторного завода для различной техники',
  },
  {
    id: 'parts',
    name: 'Запчасти',
    image: '/images/category-parts.jpg',
    description: 'Оригинальные запчасти для двигателей ЗМЗ и УМЗ',
  },
];

export default function HomePage() {
  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Собственная сборка двигателей ЗМЗ/УМЗ
            </h1>
            <p className="text-xl mb-8">
              Коммерческое предложение по восстановленным двигателям для организаций 
              с автопарком ГАЗ/УАЗ
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Перейти в каталог
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наш каталог</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ZMZ Engines */}
            <Link
              href="/catalog?category=Бензиновые двигатели"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/images/category-zmz.jpg"
                  alt="Двигатели ЗМЗ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">Двигатели ЗМЗ</h3>
                    <p className="text-white/80 mb-2">
                      Бензиновые двигатели для автомобилей ГАЗель и УАЗ
                    </p>
                    <span className="inline-flex items-center text-sm text-white">
                      Подробнее <FiChevronRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* UMZ Engines */}
            <Link
              href="/catalog?category=Бензиновые двигатели"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/images/category-umz.jpg"
                  alt="Двигатели УМЗ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">Двигатели УМЗ</h3>
                    <p className="text-white/80 mb-2">
                      Надежные двигатели для коммерческого транспорта
                    </p>
                    <span className="inline-flex items-center text-sm text-white">
                      Подробнее <FiChevronRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Parts */}
            <Link
              href="/catalog?category=Запчасти и комплектующие"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/images/category-parts.jpg"
                  alt="Запчасти и комплектующие"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">Запчасти</h3>
                    <p className="text-white/80 mb-2">
                      Оригинальные запчасти и комплектующие для двигателей
                    </p>
                    <span className="inline-flex items-center text-sm text-white">
                      Подробнее <FiChevronRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Популярные двигатели</h2>
            <Link 
              href="/catalog"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Весь каталог <FiChevronRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Link
              href="/catalog/1"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/engine-zmz-40524.jpg"
                  alt="Двигатель ЗМЗ-40524"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Двигатель ЗМЗ-40524
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Бензиновый двигатель для автомобилей ГАЗель и Соболь с улучшенными эксплуатационными характеристиками.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">195 000 ₽</span>
                  <span className="text-sm text-gray-500 line-through">215 000 ₽</span>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link
              href="/catalog/2"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/engine-umz-4216.jpg"
                  alt="Двигатель УМЗ-4216"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Двигатель УМЗ-4216
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Надежный бензиновый двигатель для коммерческого транспорта с увеличенным ресурсом.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">185 000 ₽</span>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link
              href="/catalog/3"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/images/zmz-409.jpg"
                  alt="Двигатель ЗМЗ-409"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Двигатель ЗМЗ-409
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Мощный двигатель для автомобилей УАЗ с высоким крутящим моментом и улучшенной динамикой.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">210 000 ₽</span>
                  <span className="text-sm text-gray-500 line-through">230 000 ₽</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiRotateCcw className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Гибкие варианты</h3>
              <p className="text-gray-600">
                Предлагаем индивидуальный подход с учетом особенностей вашего автопарка и потребностей бизнеса.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сокращение времени</h3>
              <p className="text-gray-600">
                Минимизируем время простоя техники благодаря быстрой замене двигателя и оперативной доставке.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiTruck className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Под ключ</h3>
              <p className="text-gray-600">
                Осуществляем полный цикл работ: от поставки до установки и гарантийного обслуживания двигателя.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы сократить время простоя вашего автопарка?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня для получения коммерческого предложения
            или закажите обратный звонок.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Связаться с нами
            </Link>
            <Link
              href="/catalog"
              className="bg-transparent border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 