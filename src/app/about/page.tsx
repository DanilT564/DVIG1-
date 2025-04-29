'use client';

import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';

export default function About() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">О компании</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">О компании</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Надежные двигатели для вашей техники</h2>
              <p>
                Компания <strong>Двигатели ЗМЗ/УМЗ</strong> специализируется на поставке качественных двигателей и запчастей от ведущих отечественных производителей: Заволжского моторного завода (ЗМЗ) и Ульяновского моторного завода (УМЗ).
              </p>
              <p>
                Мы являемся официальным дилером заводов-производителей, что гарантирует нашим клиентам 100% оригинальность продукции, полное соответствие заявленным техническим характеристикам и официальную гарантию.
              </p>
              <h3>Наша история</h3>
              <p>
                Компания начала свою деятельность в 2010 году как небольшой магазин автозапчастей. Со временем мы сосредоточились на двигателях ЗМЗ и УМЗ, став экспертами в этой области.
              </p>
              <p>
                За годы работы мы обслужили тысячи клиентов по всей России, от частных лиц до крупных автосервисов и автопарков. Мы гордимся тем, что многие клиенты возвращаются к нам снова и рекомендуют нас своим знакомым.
              </p>
              <h3>Наша миссия</h3>
              <p>
                Обеспечивать клиентов качественными, надежными двигателями и запчастями по доступным ценам, сопровождая каждую покупку профессиональной консультацией и отличным сервисом.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md self-start">
            <h3 className="text-xl font-bold mb-4">Наши преимущества</h3>
            <ul className="space-y-3">
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Прямые поставки с заводов-производителей</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>100% оригинальные двигатели и запчасти</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Официальная гарантия от производителя</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Доставка по всей России</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Консультации технических специалистов</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Более 1000 позиций в наличии</span>
              </li>
              <li className="flex">
                <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Возможность проверки двигателя перед отправкой</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((person) => (
              <div key={person} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-500">Фото сотрудника</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">Иван Иванов</h3>
                  <p className="text-gray-500 mb-3">Технический специалист</p>
                  <p className="text-sm text-gray-600">
                    Опыт работы с двигателями ЗМЗ и УМЗ более 10 лет. Эксперт по подбору и настройке.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="h-20 flex items-center justify-center">
                  <span className="text-gray-500">Логотип партнера</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Готовы сделать заказ?</h2>
          <p className="text-lg mb-6">
            Свяжитесь с нами удобным для вас способом, и мы поможем подобрать двигатель или запчасти для вашей техники
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/catalog" 
              className="btn bg-white text-primary hover:bg-gray-100 px-6 py-3"
            >
              Перейти в каталог
            </Link>
            <Link 
              href="/contact" 
              className="btn border-2 border-white hover:bg-white hover:text-primary px-6 py-3"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 