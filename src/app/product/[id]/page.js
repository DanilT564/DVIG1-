import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart, FaTruck, FaShieldAlt, FaRegCreditCard } from 'react-icons/fa';

// Список всех товаров (в реальном приложении это было бы в базе данных или API)
const productsData = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-405',
    shortDescription: 'Бензиновый двигатель для автомобилей ГАЗ',
    fullDescription: 'Бензиновый двигатель ЗМЗ-405 предназначен для установки на автомобили ГАЗ. Отличается высокой надежностью, экономичностью и длительным сроком службы. Объем 2.5 литра, мощность 152 л.с.',
    price: 185000,
    imageUrl: '/zmz-405.jpg',
    specifications: {
      manufacturer: 'Заволжский моторный завод (ЗМЗ)',
      type: 'Бензиновый, инжекторный',
      volume: '2.5 л',
      power: '152 л.с.',
      torque: '210 Нм',
      cylinders: '4, рядное расположение',
      fuelSystem: 'Распределенный впрыск',
      weight: '165 кг',
      warranty: '12 месяцев'
    }
  },
  {
    id: 2,
    name: 'Двигатель ЗМЗ-409',
    shortDescription: 'Инжекторный двигатель для УАЗ Патриот',
    fullDescription: 'Инжекторный двигатель ЗМЗ-409 разработан для автомобилей УАЗ Патриот. Обеспечивает высокую проходимость и тяговые характеристики при движении по бездорожью. Объем 2.7 литра, мощность 143 л.с.',
    price: 195000,
    imageUrl: '/zmz-409.jpg',
    specifications: {
      manufacturer: 'Заволжский моторный завод (ЗМЗ)',
      type: 'Бензиновый, инжекторный',
      volume: '2.7 л',
      power: '143 л.с.',
      torque: '235 Нм',
      cylinders: '4, рядное расположение',
      fuelSystem: 'Распределенный впрыск',
      weight: '190 кг',
      warranty: '12 месяцев'
    }
  },
  {
    id: 3,
    name: 'Двигатель УМЗ-421',
    shortDescription: 'Карбюраторный двигатель для УАЗ',
    fullDescription: 'Карбюраторный двигатель УМЗ-421 для автомобилей УАЗ. Простой в обслуживании и ремонте, надежный двигатель для внедорожников. Объем 2.9 литра, мощность 98 л.с.',
    price: 160000,
    imageUrl: '/umz-421.jpg',
    specifications: {
      manufacturer: 'Ульяновский моторный завод (УМЗ)',
      type: 'Бензиновый, карбюраторный',
      volume: '2.9 л',
      power: '98 л.с.',
      torque: '190 Нм',
      cylinders: '4, рядное расположение',
      fuelSystem: 'Карбюратор',
      weight: '188 кг',
      warranty: '12 месяцев'
    }
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-4213',
    shortDescription: 'Инжекторный двигатель для УАЗ',
    fullDescription: 'Инжекторный двигатель УМЗ-4213 для автомобилей УАЗ. Оптимальное сочетание цены и качества. Надежная конструкция и хорошие тяговые характеристики. Объем 2.9 литра, мощность 107 л.с.',
    price: 175000,
    imageUrl: '/umz-4213.jpg',
    specifications: {
      manufacturer: 'Ульяновский моторный завод (УМЗ)',
      type: 'Бензиновый, инжекторный',
      volume: '2.9 л',
      power: '107 л.с.',
      torque: '195 Нм',
      cylinders: '4, рядное расположение',
      fuelSystem: 'Распределенный впрыск',
      weight: '190 кг',
      warranty: '12 месяцев'
    }
  },
  {
    id: 5,
    name: 'Двигатель ЗМЗ-51432',
    shortDescription: 'Дизельный двигатель для УАЗ',
    fullDescription: 'Дизельный двигатель ЗМЗ-51432 для автомобилей УАЗ. Экономичный и тяговитый двигатель с турбонаддувом. Отличается низким расходом топлива и высоким крутящим моментом. Объем 2.2 литра, мощность 114 л.с.',
    price: 230000,
    imageUrl: '/zmz-51432.jpg',
    specifications: {
      manufacturer: 'Заволжский моторный завод (ЗМЗ)',
      type: 'Дизельный, турбированный',
      volume: '2.2 л',
      power: '114 л.с.',
      torque: '270 Нм',
      cylinders: '4, рядное расположение',
      fuelSystem: 'Common Rail',
      weight: '200 кг',
      warranty: '12 месяцев'
    }
  }
];

// Функция для получения данных продукта по ID
function getProductById(id) {
  return productsData.find(product => product.id === parseInt(id)) || null;
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
        <p className="mb-8">Запрашиваемый товар не существует или был удален.</p>
        <Link href="/catalog" className="bg-primary text-white px-6 py-3 rounded-md">
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Главная
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/catalog" className="text-gray-600 hover:text-primary">
                  Каталог
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-800">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
        
        {/* Основная информация о товаре */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-80 w-full">
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.shortDescription}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Артикул:</span>
                <span className="font-medium">ДВ{product.id.toString().padStart(4, '0')}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Наличие:</span>
                <span className="text-green-600 font-medium">В наличии</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Гарантия:</span>
                <span className="font-medium">{product.specifications.warranty}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-primary mb-2">{product.price.toLocaleString()} ₽</div>
              <div className="text-sm text-gray-500">Цена указана с учетом НДС</div>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md flex items-center hover:bg-primary/90 transition-colors">
                <FaShoppingCart className="mr-2" />
                В корзину
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
                Купить в 1 клик
              </button>
            </div>
          </div>
        </div>
        
        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaTruck className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Доставка</h3>
              <p className="text-sm text-gray-600">По всей России</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaShieldAlt className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Гарантия</h3>
              <p className="text-sm text-gray-600">12 месяцев</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <FaRegCreditCard className="text-primary text-2xl mr-3" />
            <div>
              <h3 className="font-medium">Оплата</h3>
              <p className="text-sm text-gray-600">Наличные и безнал</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <svg className="text-primary w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.5a6.5 6.5 0 0 0-5.478 10.025l.334-.667-.334.667A.4.4 0 0 0 5 13.5h10a.4.4 0 0 0 .478-.475A6.5 6.5 0 0 0 10 3.5zm0-1a7.5 7.5 0 0 1 7.475 8.076A1.4 1.4 0 0 1 15 12.5H5a1.4 1.4 0 0 1-1.474-1.425A7.5 7.5 0 0 1 10 2.5z"/>
              <path d="M15 14.5a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1z"/>
            </svg>
            <div>
              <h3 className="font-medium">Консультация</h3>
              <p className="text-sm text-gray-600">Подбор и установка</p>
            </div>
          </div>
        </div>
        
        {/* Табы (Описание и характеристики) */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="border-b">
            <div className="flex">
              <button className="px-6 py-3 font-medium text-primary border-b-2 border-primary">
                Описание
              </button>
              <button className="px-6 py-3 font-medium text-gray-500 hover:text-gray-700">
                Характеристики
              </button>
              <button className="px-6 py-3 font-medium text-gray-500 hover:text-gray-700">
                Доставка и оплата
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Описание {product.name}</h2>
            <p className="mb-4">{product.fullDescription}</p>
            <p>
              Двигатель поставляется в сборе, готовый к установке. Комплектация включает все необходимые навесные агрегаты 
              и систему управления. Перед продажей каждый двигатель проходит стендовые испытания, 
              что гарантирует его высокое качество и надежность.
            </p>
          </div>
        </div>
        
        {/* Технические характеристики */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Технические характеристики</h2>
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-4 font-medium">{
                      {
                        manufacturer: 'Производитель',
                        type: 'Тип двигателя',
                        volume: 'Объем',
                        power: 'Мощность',
                        torque: 'Крутящий момент',
                        cylinders: 'Цилиндры',
                        fuelSystem: 'Система питания',
                        weight: 'Вес',
                        warranty: 'Гарантия'
                      }[key]
                    }</td>
                    <td className="py-2 px-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Похожие товары */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <Link href={`/product/${product.id}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl">{product.price.toLocaleString()} ₽</span>
                      
                      <button className="bg-secondary text-white p-2 rounded-full hover:bg-primary transition-colors">
                        <FaShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 