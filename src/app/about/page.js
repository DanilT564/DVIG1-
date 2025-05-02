import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">О компании</h1>
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
                  <span className="text-gray-800">О компании</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Добро пожаловать в DVIG Shop!</h2>
            <p className="mb-4">
              Мы - специализированный интернет-магазин по продаже двигателей ЗМЗ, УМЗ и запчастей к ним с доставкой по всей России.
              Наша компания работает на рынке автозапчастей более 10 лет и за это время мы накопили огромный опыт 
              в подборе и продаже двигателей для различных автомобилей.
            </p>
            <p className="mb-4">
              Мы напрямую сотрудничаем с Заволжским и Ульяновским моторными заводами, 
              что позволяет нам предлагать только оригинальную продукцию высокого качества 
              по конкурентным ценам. Каждый двигатель проходит тщательную проверку перед отправкой клиенту.
            </p>
            <p>
              Наша главная цель - обеспечивать клиентов качественными двигателями и запчастями, 
              предоставляя при этом высокий уровень сервиса, профессиональную консультацию и оперативную доставку.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Наши преимущества</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <strong className="font-medium">Широкий ассортимент</strong>
                    <p className="text-gray-600">В нашем каталоге представлены все модели двигателей ЗМЗ и УМЗ, а также запчасти к ним</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <strong className="font-medium">Гарантия качества</strong>
                    <p className="text-gray-600">Мы предоставляем официальную гарантию на всю продукцию от производителя</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <strong className="font-medium">Профессиональная консультация</strong>
                    <p className="text-gray-600">Наши специалисты помогут подобрать оптимальный вариант под ваши задачи</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                  <div>
                    <strong className="font-medium">Оперативная доставка</strong>
                    <p className="text-gray-600">Доставляем заказы транспортными компаниями во все регионы России</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">5</span>
                  <div>
                    <strong className="font-medium">Техническая поддержка</strong>
                    <p className="text-gray-600">Оказываем консультации по установке и эксплуатации приобретенных двигателей</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Наша миссия</h2>
              <p className="mb-4">
                Наша миссия - сделать приобретение качественного двигателя доступным и удобным для каждого клиента. 
                Мы стремимся предоставлять не только товары высокого качества, но и комплексный сервис, включающий:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                <li>Профессиональный подбор двигателя под конкретный автомобиль</li>
                <li>Предпродажную проверку и тестирование каждого двигателя</li>
                <li>Оперативную доставку в любой регион России</li>
                <li>Техническую поддержку после покупки</li>
                <li>Гарантийное обслуживание</li>
              </ul>
              <p>
                Мы работаем для того, чтобы вы могли быстро вернуть свой автомобиль на дорогу с надежным, проверенным двигателем.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Наша команда</h2>
            <p className="mb-6">
              В DVIG Shop работают профессионалы с многолетним опытом в автомобильной сфере. 
              Наши специалисты регулярно проходят обучение и повышают свою квалификацию, 
              чтобы предоставлять вам самую актуальную и точную информацию о двигателях.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">АС</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg">Александр Смирнов</h3>
                <p className="text-gray-600">Генеральный директор</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">ИК</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg">Иван Кузнецов</h3>
                <p className="text-gray-600">Технический специалист</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">ЕВ</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg">Елена Васильева</h3>
                <p className="text-gray-600">Менеджер по продажам</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-5xl text-gray-400">СП</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg">Сергей Петров</h3>
                <p className="text-gray-600">Логист</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="mb-6">
              Если у вас возникли вопросы о двигателях или вам нужна консультация по подбору, 
              наши специалисты всегда готовы помочь!
            </p>
            <Link href="/contacts" 
              className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Перейти в раздел контактов
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 