'use client';

import Link from 'next/link';
import { FiAward, FiClock, FiTool, FiCheck, FiTruck, FiUsers } from 'react-icons/fi';

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
              <h2>Собственная сборка двигателей ЗМЗ/УМЗ</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl text-primary mb-4">ООО "СПЕКТР"</h3>
                <p className="mb-1"><strong>ОГРН:</strong> 1217400012840</p>
                <p className="mb-1"><strong>ИНН/КПП:</strong> 7456047921/745601001</p>
                <p className="mb-4"><strong>Фактический адрес:</strong> Московская область, г. Подольск, Проезд авиаторов 12с2</p>
              </div>
              
              <h3>О КОМПАНИИ</h3>
              <p>
                Мы узконаправленная организация, которая работает в нише «Обслуживания коммерческого 
                транспорта», предлагая ассортимент восстановленных ЗМЗ/УМЗ двигателей.
              </p>
              <p>
                С 2017 года мы успешно занимаемся восстановлением и сборкой двигателей, обретая 
                репутацию надежного партнера в отрасли. В 2024 году 366 клиентов убедились в этом.
              </p>
              
              <p className="font-bold text-lg">
                ООО «Спектр» — это надежный партнер для всех, кто ценит качество, прозрачность и 
                индивидуальный подход в обслуживании своих автомобилей. Мы всегда готовы предложить 
                лучшие решения для наших клиентов!
              </p>
              
              <h3>Наш опыт и профессионализм</h3>
              <p>
                За более чем 7 лет работы мы накопили огромный опыт в восстановлении и сборке двигателей ЗМЗ и УМЗ для коммерческого транспорта марок ГАЗ и УАЗ. Наша команда состоит из высококвалифицированных специалистов, которые регулярно проходят обучение и повышают свою квалификацию.
              </p>
              <p>
                Мы используем только качественные комплектующие и современное оборудование, что позволяет нам гарантировать надежность и долговечность наших двигателей.
              </p>
              
              <h3>Коммерческое предложение</h3>
              <p>
                Мы предлагаем комплексное решение для организаций с автопарком ГАЗ/УАЗ по поставке восстановленных двигателей ЗМЗ/УМЗ. Наше предложение особенно выгодно для компаний, которые ценят время и надежность своего автопарка.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4">Преимущества сотрудничества</h3>
              <div className="space-y-4">
                <div className="flex">
                  <FiAward className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">ГИБКИЕ ВАРИАНТЫ</h4>
                    <p className="text-gray-600 text-sm">
                      Сдайте старый - получите восстановленный.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiClock className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">СОКРАЩЕНИЕ ВРЕМЕНИ</h4>
                    <p className="text-gray-600 text-sm">
                      Избегайте простоя, двигатели всегда в наличии.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiTool className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">ПОД КЛЮЧ</h4>
                    <p className="text-gray-600 text-sm">
                      Через 24 часа автомобиль уже будет в строю.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Выгоды для вас</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheck className="text-white text-xl mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>УДОБСТВО</strong> - Мы - ваш цех по обслуживанию моторов
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-white text-xl mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>ЭКОНОМИЯ ВРЕМЕНИ</strong> - Сокращаем время простоя автомобиля
                  </span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-white text-xl mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>НАДЕЖНОСТЬ</strong> - Предоставляем гарантию на двигатели
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Статистика */}
        <div className="bg-light py-10 px-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-gray-700">Лет опыта</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">366</div>
              <div className="text-gray-700">Клиентов в 2024 году</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-700">Положительных отзывов</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">24ч</div>
              <div className="text-gray-700">Срок замены двигателя</div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-white p-8 rounded-lg text-center shadow-md">
          <h2 className="text-2xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-lg mb-6">
            Свяжитесь с нами для получения индивидуального коммерческого предложения
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="btn btn-primary px-6 py-3"
            >
              Связаться с нами
            </Link>
            <Link 
              href="/catalog" 
              className="btn btn-secondary px-6 py-3"
            >
              Каталог двигателей
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 