'use client';

import Link from 'next/link';
import { FiTruck, FiPackage, FiCreditCard, FiShield, FiHelpCircle, FiPhone, FiMail, FiClock, FiTool } from 'react-icons/fi';

export default function Delivery() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Доставка и оплата</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Доставка</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Информация о доставке</h2>
              <p>
                ООО "СПЕКТР" организует доставку восстановленных двигателей ЗМЗ и УМЗ для организаций с автопарком ГАЗ/УАЗ по всей территории России. Мы работаем с проверенными транспортными компаниями, чтобы гарантировать своевременную и безопасную доставку вашего заказа.
              </p>

              <h3>Способы доставки</h3>
              <p>
                В зависимости от региона и требований клиента, мы предлагаем следующие варианты доставки:
              </p>
              <ul>
                <li>
                  <strong>Самовывоз из нашего центра в Подольске</strong> — бесплатно, в рабочие дни с 9:00 до 18:00
                </li>
                <li>
                  <strong>Доставка по Москве и Московской области</strong> — от 1000 руб., в зависимости от адреса и типа двигателя
                </li>
                <li>
                  <strong>Транспортные компании</strong> — отправка в любой регион России через:
                  <ul>
                    <li>Деловые Линии</li>
                    <li>ПЭК</li>
                    <li>СДЭК</li>
                    <li>Байкал Сервис</li>
                    <li>Другие ТК по запросу</li>
                  </ul>
                </li>
              </ul>

              <h3>Сроки доставки и установки</h3>
              <p>
                Мы стремимся минимизировать время простоя вашего автопарка:
              </p>
              <ul>
                <li>Москва и область — <strong>доставка и установка за 24 часа</strong></li>
                <li>Центральный федеральный округ — 2-3 рабочих дня</li>
                <li>Другие регионы России — 3-7 рабочих дней</li>
              </ul>
              <p>
                После оформления заказа менеджер свяжется с вами для уточнения деталей доставки и сообщит точные сроки.
              </p>

              <h3>Варианты сотрудничества</h3>
              <p>
                Мы предлагаем гибкие условия сотрудничества:
              </p>
              <ul>
                <li><strong>Обмен двигателями</strong> - сдайте старый двигатель и получите восстановленный</li>
                <li><strong>Срочная поставка</strong> - избегайте простоя, двигатели всегда в наличии</li>
                <li><strong>Решение под ключ</strong> - через 24 часа автомобиль уже будет в строю</li>
              </ul>

              <h2>Способы оплаты</h2>
              <p>
                Для вашего удобства мы предлагаем несколько способов оплаты заказа:
              </p>
              <ul>
                <li>
                  <strong>Наличными при получении</strong> — доступно при самовывозе и курьерской доставке по Москве
                </li>
                <li>
                  <strong>Безналичный расчет</strong> — оплата по выставленному счету (для юридических лиц)
                </li>
                <li>
                  <strong>Банковская карта</strong> — оплата на сайте или при получении
                </li>
                <li>
                  <strong>Рассрочка или кредит</strong> — доступно для заказов от 30 000 рублей (требуется оформление в офисе)
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4">Важная информация</h3>
              <div className="space-y-4">
                <div className="flex">
                  <FiTool className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Под ключ</h4>
                    <p className="text-gray-600 text-sm">
                      Через 24 часа автомобиль уже будет в строю.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiClock className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Сокращение времени</h4>
                    <p className="text-gray-600 text-sm">
                      Избегайте простоя, двигатели всегда в наличии.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiTruck className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Гибкие варианты</h4>
                    <p className="text-gray-600 text-sm">
                      Сдайте старый - получите восстановленный.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiHelpCircle className="mr-2" />
                Остались вопросы?
              </h3>
              <p className="mb-4">
                Свяжитесь с нашими менеджерами любым удобным для вас способом:
              </p>
              <div className="space-y-2">
                <div>
                  <a href="tel:+79999999999" className="text-white hover:underline flex items-center">
                    <FiPhone className="mr-2" />
                    +7 (999) 999-99-99
                  </a>
                </div>
                <div>
                  <a href="mailto:info@spectr-motors.ru" className="text-white hover:underline flex items-center">
                    <FiMail className="mr-2" />
                    info@spectr-motors.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-dark text-center mb-10">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Как отследить заказ?',
                answer: 'После отправки мы предоставим вам трек-номер и инструкцию по отслеживанию вашего заказа на сайте выбранной транспортной компании.'
              },
              {
                question: 'Что делать, если товар пришел поврежденным?',
                answer: 'В случае обнаружения повреждений при получении, обязательно зафиксируйте их в присутствии представителя транспортной компании и свяжитесь с нами немедленно.'
              },
              {
                question: 'Можно ли изменить адрес доставки после оформления заказа?',
                answer: 'Да, вы можете изменить адрес доставки, связавшись с нашим менеджером до момента отправки заказа.'
              },
              {
                question: 'Как рассчитывается стоимость доставки?',
                answer: 'Стоимость доставки зависит от веса, габаритов заказа и региона. Точную стоимость доставки вам сообщит менеджер после оформления заказа.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-light p-8 rounded-lg text-center border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Готовы сократить время простоя вашего автопарка?</h2>
          <p className="text-lg mb-6">
            Свяжитесь с нами для получения индивидуального коммерческого предложения
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/catalog" 
              className="btn btn-primary px-6 py-3"
            >
              Перейти в каталог
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-secondary px-6 py-3"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 