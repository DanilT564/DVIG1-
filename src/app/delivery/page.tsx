'use client';

import Link from 'next/link';
import { FiTruck, FiPackage, FiCreditCard, FiShield, FiHelpCircle, FiPhone, FiMail } from 'react-icons/fi';

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
                Мы осуществляем доставку двигателей ЗМЗ и УМЗ, а также запчастей по всей территории России. Наша компания работает с проверенными транспортными компаниями, что гарантирует своевременную и безопасную доставку вашего заказа.
              </p>

              <h3>Способы доставки</h3>
              <p>
                В зависимости от региона и предпочтений клиента, мы предлагаем следующие варианты доставки:
              </p>
              <ul>
                <li>
                  <strong>Самовывоз из офиса в Москве</strong> — бесплатно, в рабочие дни с 9:00 до 18:00
                </li>
                <li>
                  <strong>Курьерская доставка по Москве и Московской области</strong> — от 500 руб., в зависимости от адреса и веса заказа
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

              <h3>Сроки доставки</h3>
              <p>
                Сроки доставки зависят от выбранного способа доставки и региона:
              </p>
              <ul>
                <li>Москва и область — 1-3 рабочих дня</li>
                <li>Центральный федеральный округ — 3-5 рабочих дней</li>
                <li>Другие регионы России — 5-14 рабочих дней</li>
              </ul>
              <p>
                После оформления заказа менеджер свяжется с вами для уточнения деталей доставки и сообщит точные сроки.
              </p>

              <h3>Стоимость доставки</h3>
              <p>
                Стоимость доставки рассчитывается индивидуально в зависимости от:
              </p>
              <ul>
                <li>Веса и габаритов заказа</li>
                <li>Выбранного способа доставки</li>
                <li>Региона доставки</li>
              </ul>
              <p>
                При заказе на сумму от 100 000 рублей доставка до терминала транспортной компании в городе получателя осуществляется за наш счет!
              </p>

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
                  <FiPackage className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Упаковка</h4>
                    <p className="text-gray-600 text-sm">
                      Все двигатели и запчасти тщательно упаковываются для безопасной транспортировки.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiShield className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Страховка</h4>
                    <p className="text-gray-600 text-sm">
                      По желанию клиента груз может быть застрахован на полную стоимость.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <FiTruck className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Отслеживание</h4>
                    <p className="text-gray-600 text-sm">
                      После отправки вы получите трек-номер для отслеживания заказа.
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
                  <a href="mailto:info@motors.ru" className="text-white hover:underline flex items-center">
                    <FiMail className="mr-2" />
                    info@motors.ru
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
          <h2 className="text-2xl font-bold mb-4">Готовы сделать заказ?</h2>
          <p className="text-lg mb-6">
            Выберите нужный двигатель в нашем каталоге или свяжитесь с нами для консультации
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