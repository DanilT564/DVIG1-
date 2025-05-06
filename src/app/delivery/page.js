import Link from 'next/link';
import { FaTruck, FaMoneyBill, FaCreditCard, FaBoxOpen, FaMapMarkerAlt, FaTruckMoving } from 'react-icons/fa';

export default function Delivery() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Доставка и оплата</h1>
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
                  <span className="text-gray-800">Доставка и оплата</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Блок информации о доставке */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaTruck className="text-primary mr-3" size={24} /> Способы доставки
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Транспортные компании</h3>
                <p className="mb-4">Доставка осуществляется следующими транспортными компаниями:</p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4 w-16 h-16 flex items-center justify-center">
                      <FaTruckMoving size={32} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Деловые линии</p>
                      <p className="text-gray-600">Доставка по всей России</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4 w-16 h-16 flex items-center justify-center">
                      <FaTruckMoving size={32} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">СДЭК</p>
                      <p className="text-gray-600">Быстрая доставка по городам России</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center">
                    <div className="bg-gray-100 rounded-lg p-3 mr-4 w-16 h-16 flex items-center justify-center">
                      <FaTruckMoving size={32} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">ПЭК</p>
                      <p className="text-gray-600">Доставка крупногабаритных грузов</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Самовывоз</h3>
                <p className="mb-4">Вы можете самостоятельно забрать двигатель с нашего склада в Москве:</p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <div className="flex items-start mb-3">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-2" size={18} />
                    <p>г. Москва, ул. Примерная, д. 123, склад 456</p>
                  </div>
                  <p className="text-gray-600">Режим работы: Пн-Вс с 10:00 до 21:00 по Мск</p>
                  <p className="text-gray-600">Самовывоз осуществляется только по предварительной договоренности!</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Важная информация:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>При получении необходимо иметь паспорт</li>
                    <li>Для юридических лиц - доверенность и печать</li>
                    <li>Проверка комплектности товара производится на месте</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Блок информации об оплате */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCreditCard className="text-primary mr-3" size={24} /> Способы оплаты
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <FaCreditCard className="text-primary mr-3" size={20} />
                  <h3 className="text-lg font-semibold">Банковской картой</h3>
                </div>
                <p className="text-gray-600 mb-2">Оплата картами Visa, MasterCard, МИР</p>
                <p className="text-gray-600">Безопасный платеж через защищенное соединение</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <FaMoneyBill className="text-primary mr-3" size={20} />
                  <h3 className="text-lg font-semibold">Наличными</h3>
                </div>
                <p className="text-gray-600 mb-2">При получении у курьера или в пункте выдачи</p>
                <p className="text-gray-600">Для самовывоза со склада – оплата на месте</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-center mb-4">
                  <FaBoxOpen className="text-primary mr-3" size={20} />
                  <h3 className="text-lg font-semibold">Безналичный расчет</h3>
                </div>
                <p className="text-gray-600 mb-2">Для юридических лиц</p>
                <p className="text-gray-600">Выставление счета по реквизитам компании</p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок с дополнительной информацией */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Условия доставки</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Сроки доставки</h3>
                <p className="text-gray-700">
                  Сроки доставки зависят от выбранного способа доставки и региона. 
                  В среднем доставка осуществляется в течение 3-7 рабочих дней.
                  Точные сроки доставки будут сообщены менеджером после оформления заказа.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Стоимость доставки</h3>
                <p className="text-gray-700 mb-3">
                  Стоимость доставки рассчитывается индивидуально в зависимости от:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                  <li>Веса и габаритов двигателя</li>
                  <li>Выбранного способа доставки</li>
                  <li>Региона доставки</li>
                </ul>
                <p className="text-gray-700">
                  При заказе на сумму от 200 000 рублей доставка до терминала транспортной компании в вашем городе - бесплатно!
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Примечание</h3>
                <p className="text-gray-700">
                  Отгрузка товара осуществляется после подтверждения оплаты. 
                  Перед отгрузкой наши специалисты тщательно проверяют комплектность и состояние двигателя, 
                  а также производят надежную упаковку для безопасной транспортировки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 