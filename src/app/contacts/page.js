import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Контакты</h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-800">Контакты</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Телефон</h3>
                    <p className="text-gray-600 mb-1">Отдел продаж:</p>
                    <a href="tel:+79001234567" className="text-primary text-lg font-medium hover:text-primary/80">
                      +7 (900) 123-45-67
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
                    <a href="tel:+79007654321" className="text-primary text-lg font-medium hover:text-primary/80">
                      +7 (900) 765-43-21
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Электронная почта</h3>
                    <p className="text-gray-600 mb-1">Общие вопросы:</p>
                    <a href="mailto:info@dvigshop.ru" className="text-primary text-lg font-medium hover:text-primary/80">
                      info@dvigshop.ru
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Отдел продаж:</p>
                    <a href="mailto:sales@dvigshop.ru" className="text-primary text-lg font-medium hover:text-primary/80">
                      sales@dvigshop.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Адрес</h3>
                    <p className="text-gray-600 mb-1">Офис и склад:</p>
                    <p className="text-lg">г. Москва, ул. Примерная, д. 123, офис 456</p>
                    <p className="text-gray-600 mt-2">
                      Режим работы: Пн-Пт с 9:00 до 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a href="https://t.me/dvigshop" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaTelegram size={24} className="text-primary" />
                  </a>
                  <a href="https://vk.com/dvigshop" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaVk size={24} className="text-primary" />
                  </a>
                  <a href="https://wa.me/79001234567" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaWhatsapp size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Электронная почта</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@mail.ru"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1">Тема обращения</label>
                  <select
                    id="subject"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Выберите тему</option>
                    <option value="order">Вопрос по заказу</option>
                    <option value="product">Подбор двигателя</option>
                    <option value="delivery">Доставка</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Текст вашего сообщения..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="agreement" className="mr-2" />
                  <label htmlFor="agreement" className="text-gray-700">
                    Я согласен с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Карта загружается...</p>
              {/* В реальном проекте здесь будет карта Яндекс или Google Maps */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 