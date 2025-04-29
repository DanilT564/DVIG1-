'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiTruck, FiShield, FiCheckCircle, FiPhone, FiClock, FiTool, FiCheck } from 'react-icons/fi';
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

export default function Home() {
  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="container mx-auto py-16 px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Собственная сборка двигателей ЗМЗ/УМЗ
            </h1>
            <p className="text-xl mb-8">
              Коммерческое предложение по восстановленным двигателям для организаций с автопарком ГАЗ/УАЗ
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/catalog" 
                className="btn btn-secondary px-6 py-3 text-base"
              >
                Перейти в каталог
              </Link>
              <Link 
                href="/contact" 
                className="btn border-2 border-white hover:bg-white hover:text-primary px-6 py-3 text-base"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Категории товаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/catalog/${category.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Изображение недоступно</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-secondary font-medium inline-flex items-center">
                    Перейти
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Популярные товары
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/catalog/${product.id}`}>
                  <div className="relative h-48">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        onError={(e) => {
                          // Fallback в случае ошибки загрузки изображения
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-gray-300 flex items-center justify-center"><span class="text-gray-500">Изображение недоступно</span></div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs text-white bg-primary px-2 py-1 rounded-full">
                      {product.category === 'zmz' ? 'ЗМЗ' : 'УМЗ'}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(product.price)} ₽
                    </span>
                    <button className="btn btn-secondary">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/catalog"
              className="inline-flex items-center btn btn-primary px-6 py-3"
            >
              Смотреть все товары
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы сотрудничать с надежным партнером?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ООО «Спектр» — это надежный партнер для всех, кто ценит качество, прозрачность и индивидуальный подход в обслуживании своих автомобилей.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+79999999999" 
              className="btn bg-white text-primary hover:bg-gray-100 px-6 py-3 text-base"
            >
              Позвонить нам
            </a>
            <Link 
              href="/contact" 
              className="btn border-2 border-white hover:bg-white hover:text-primary px-6 py-3 text-base"
            >
              Отправить заявку
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 