import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaStore, FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

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
                    <a href="tel:+79681177773" className="text-primary text-lg font-medium hover:text-primary/80">
                      +7 968 117-77-73
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Сотрудничество:</p>
                    <a href="tel:+79642477776" className="text-primary text-lg font-medium hover:text-primary/80">
                      +7 964 247-77-76
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
                    <a href="mailto:1umudov@mail.ru" className="text-primary text-lg font-medium hover:text-primary/80">
                      1umudov@mail.ru
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Отдел продаж:</p>
                    <a href="mailto:1umudov@mail.ru" className="text-primary text-lg font-medium hover:text-primary/80">
                      1umudov@mail.ru
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
                    <p className="text-lg">Московская область, г. Подольск, Проезд авиаторов 12с2</p>
                    <p className="text-gray-600 mt-2">
                      Режим работы: Пн-Вс с 10:00 до 21:00 по Мск
                    </p>
                    <div className="mt-2 flex items-center">
                      <FaFilePdf className="text-primary mr-2" />
                      <a href="/Комерческое предложение.pdf" download className="text-primary font-medium hover:underline">
                        Скачать коммерческое предложение
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a href="https://t.me/+79681177773" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaTelegram size={24} className="text-primary" />
                  </a>
                  <a href="https://www.avito.ru/brands/9ab6e45e1d2a34c082af96e53d2e735f/all/zapchasti_i_aksessuary?sellerId=82f5fd1e3cb07f9c61013d91ee89eb78" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaStore size={24} className="text-primary" />
                  </a>
                  <a href="https://wa.me/+79681177773" className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-3">
                    <FaWhatsapp size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.5004273868538!2d37.533176762424215!3d55.431923712683015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aadff0d4e7283%3A0x3967256c389dadea!2z0J_RgNC-0LXQt9C0INCw0LLQuNCw0YLQvtGA0L7QsiwgMTLRgTIsINCf0L7QtNC-0LvRjNGB0LosINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sIDE0MjExNg!5e0!3m2!1sru!2sru!4v1718193304797!5m2!1sru!2sru" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">
                <strong>ООО "СПЕКТР"</strong><br />
                ОГРН: 1217400012840<br />
                ИНН/КПП: 7456047921/745601001<br />
                Фактический адрес: Московская область, г. Подольск, Проезд авиаторов 12с2<br />
                Телефон: +7 968 117-77-73<br />
                Email: 1umudov@mail.ru
              </p>
              <div className="mt-4 flex items-center">
                <FaFilePdf className="text-primary mr-2" size={20} />
                <a href="/Комерческое предложение.pdf" download className="text-primary font-medium hover:underline">
                  Скачать коммерческое предложение в формате PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 