'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiShoppingCart, FiArrowLeft, FiCheck, FiTruck, FiShield, FiClock } from 'react-icons/fi';

// Данные о продуктах
const products = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-409',
    description: 'Бензиновый двигатель для УАЗ Патриот, Хантер, Буханка',
    fullDescription: `
      Двигатель ЗМЗ-409 - это бензиновый инжекторный двигатель, который устанавливается на автомобили УАЗ Патриот, Хантер и Буханка. 
      
      Мотор имеет рабочий объем 2,7 литра и развивает мощность 128 л.с. при 4600 об/мин. Крутящий момент составляет 209,7 Н⋅м при 3900 об/мин. 
      
      Двигатель оснащен электронной системой управления, которая обеспечивает оптимальную работу в различных условиях эксплуатации.
    `,
    price: 215000,
    oldPrice: 230000,
    image: '/images/zmz-409.jpg',
    category: 'zmz',
    rating: 4.7,
    reviews: 24,
    inStock: true,
    specs: {
      power: '128 л.с.',
      volume: '2.7 л',
      cylinders: '4',
      fuel: 'бензин',
      weight: '190 кг',
      crankshaft: 'Стальной',
      valves: '16',
      cooling: 'Жидкостное',
      injector: 'Да',
    },
    applications: ['УАЗ Патриот', 'УАЗ Хантер', 'УАЗ Буханка'],
    advantages: [
      'Высокая надежность',
      'Хорошая тяга на низких оборотах',
      'Простота обслуживания',
      'Доступность запчастей',
    ],
  },
  {
    id: 2,
    name: 'Двигатель УМЗ-421',
    description: 'Бензиновый двигатель для ГАЗель, Соболь',
    fullDescription: `
      Двигатель УМЗ-421 - это бензиновый карбюраторный двигатель, который устанавливается на автомобили ГАЗель и Соболь.
      
      Мотор имеет рабочий объем 2,89 литра и развивает мощность 89 л.с. при 4000 об/мин. Крутящий момент составляет 182 Н⋅м при 2500 об/мин.
      
      Двигатель отличается неприхотливостью к качеству топлива и простотой конструкции, что обеспечивает легкость обслуживания и ремонта.
    `,
    price: 195000,
    oldPrice: null,
    image: '/images/umz-421.jpg',
    category: 'umz',
    rating: 4.3,
    reviews: 18,
    inStock: true,
    specs: {
      power: '89 л.с.',
      volume: '2.89 л',
      cylinders: '4',
      fuel: 'бензин',
      weight: '172 кг',
      crankshaft: 'Чугунный',
      valves: '8',
      cooling: 'Жидкостное',
      injector: 'Нет',
    },
    applications: ['ГАЗель', 'Соболь'],
    advantages: [
      'Неприхотливость к качеству топлива',
      'Простота конструкции',
      'Низкая стоимость обслуживания',
      'Высокий ресурс',
    ],
  },
  {
    id: 3,
    name: 'Двигатель ЗМЗ-405 Евро 3',
    description: 'Качественная реставрация с новыми запчастями',
    fullDescription: `
      Двигатель ЗМЗ-405 Евро 3 - это инжекторный двигатель после качественной реставрации с использованием новых запчастей.

      Блок цилиндров восстановлен до заводских характеристик. Все комплектующие заменены на новые: поршни, кольца, цепь ГРМ, прокладки и другие детали.

      Двигатель ничем не уступает новому, но стоит дешевле.

      Работы по восстановлению включают:
      
      1. Блок цилиндров:
         - Оригинальный б/у блок, прошедший опрессовку на герметичность
         - Расточку под ремонтный размер
         - Продувку масляных каналов
      
      2. ГБЦ (головка блока цилиндров):
         - Ремонт с заменой новых прокладок (ГБЦ, клапанной крышки, поддона)
         - Замена сальников (передний, задний)
         - Притирка клапанов для герметичности
         - Восстановление резьбовых соединений
      
      3. Поршневая группа:
         - Установка новых ремонтных поршней и колец
         - Контроль зазоров между поршнями и цилиндрами
      
      4. Система ГРМ:
         - Установка новой цепи ГРМ и комплекта "Идеальная фаза" Евро-3 Киров
         - Проверка меток ГРМ для синхронизации коленвала и распредвала
      
      5. Вспомогательные системы:
         - Замена нового масляного насоса (при износе)
         - Установка новых шпилек выпускного коллектора
    `,
    price: 185000,
    oldPrice: 205000,
    image: '/images/zmz-405.jpg',
    category: 'zmz',
    rating: 4.8,
    reviews: 32,
    inStock: true,
    specs: {
      power: '140-150 л.с.',
      volume: '2.3 л',
      cylinders: '4',
      fuel: 'бензин',
      weight: '175 кг',
      crankshaft: 'Стальной',
      valves: '16',
      cooling: 'Жидкостное',
      injector: 'Да (Евро 3)',
    },
    applications: ['ГАЗ-3110 "Волга"', 'Коммерческий транспорт', 'Внедорожники'],
    advantages: [
      'Восстановлен до заводских характеристик',
      'Новые ключевые комплектующие',
      'Не уступает новому двигателю',
      'Доступная цена',
      'Комплект "Идеальная фаза" Евро-3'
    ],
  },
];

// Экспортируем функцию для генерации статических путей
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetails() {
  const params = useParams();
  const productId = parseInt(params.id as string, 10);
  
  // Находим продукт по ID из параметров URL
  const product = products.find(p => p.id === productId) || products[0];
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description'); // description, specifications, reviews
  const [addedToCart, setAddedToCart] = useState(false);

  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  // Увеличение количества
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Уменьшение количества
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Добавление в корзину
  const addToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
    // В реальном приложении здесь был бы код для добавления товара в корзину
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/catalog" className="text-primary hover:underline">
              Каталог
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/catalog/${product.category}`} className="text-primary hover:underline">
              {product.category === 'zmz' ? 'Двигатели ЗМЗ' : 'Двигатели УМЗ'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
        </div>

        {/* Back to catalog */}
        <Link
          href="/catalog"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <FiArrowLeft className="mr-1" /> Вернуться в каталог
        </Link>

        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-square mb-4 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-400 font-medium text-lg">{product.name}</div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="cursor-pointer border-2 border-primary rounded">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Фото 1</span>
                </div>
              </div>
              <div className="cursor-pointer border border-gray-200 rounded hover:border-primary">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Вид сбоку</span>
                </div>
              </div>
              <div className="cursor-pointer border border-gray-200 rounded hover:border-primary">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Вид сзади</span>
                </div>
              </div>
              <div className="cursor-pointer border border-gray-200 rounded hover:border-primary">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Детали</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-2">
                <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary text-white">
                  {product.category === 'zmz' ? 'ЗМЗ' : 'УМЗ'}
                </span>
                {product.inStock ? (
                  <span className="text-sm font-medium text-green-600 ml-3 inline-flex items-center">
                    <FiCheck className="mr-1" /> В наличии
                  </span>
                ) : (
                  <span className="text-sm font-medium text-red-600 ml-3">
                    Нет в наличии
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-dark mb-2">{product.name}</h1>
              
              <div className="mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : i < product.rating
                          ? 'text-yellow-300'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} отзывов)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(product.price)} ₽
                  </div>
                  {product.oldPrice && (
                    <div className="text-lg text-gray-500 line-through">
                      {formatPrice(product.oldPrice)} ₽
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <FiTruck className="text-primary mr-2" />
                    <span className="text-sm">Доставка по всей России</span>
                  </div>
                  <div className="flex items-center">
                    <FiShield className="text-primary mr-2" />
                    <span className="text-sm">Гарантия 12 месяцев</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheck className="text-primary mr-2" />
                    <span className="text-sm">100% оригинал</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="text-primary mr-2" />
                    <span className="text-sm">Отправка в течение 2-3 дней</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={decreaseQuantity}
                      className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={addToCart}
                    className={`flex-grow btn btn-primary py-3 px-6 flex items-center justify-center transition-colors ${
                      addedToCart
                        ? 'bg-green-600 hover:bg-green-700'
                        : ''
                    }`}
                    disabled={!product.inStock}
                  >
                    <FiShoppingCart className="mr-2" />
                    {addedToCart ? 'Добавлено в корзину!' : 'Добавить в корзину'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-10">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              <button
                onClick={() => setActiveTab('description')}
                className={`inline-flex items-center py-4 px-6 border-b-2 font-medium ${
                  activeTab === 'description'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`inline-flex items-center py-4 px-6 border-b-2 font-medium ${
                  activeTab === 'specifications'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Характеристики
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`inline-flex items-center py-4 px-6 border-b-2 font-medium ${
                  activeTab === 'applications'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Применяемость
              </button>
            </nav>
          </div>
          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none">
                <h2>Описание {product.name}</h2>
                {product.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <h3>Преимущества:</h3>
                <ul>
                  {product.advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Технические характеристики</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <tr key={key} className="border-b border-gray-200 last:border-b-0">
                            <td className="py-2 pr-4 font-medium text-gray-700">
                              {
                                {
                                  power: 'Мощность',
                                  volume: 'Объем',
                                  cylinders: 'Количество цилиндров',
                                  fuel: 'Тип топлива',
                                  weight: 'Вес',
                                  crankshaft: 'Коленвал',
                                  valves: 'Количество клапанов',
                                  cooling: 'Система охлаждения',
                                  injector: 'Инжектор',
                                }[key]
                              }
                            </td>
                            <td className="py-2 pl-4 text-gray-900">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'applications' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Применяемость</h2>
                <p className="mb-4">
                  Двигатель {product.name} устанавливается на следующие модели автомобилей:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.id !== product.id).map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Изображение недоступно</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs text-white bg-primary px-2 py-1 rounded-full">
                      {relatedProduct.category === 'zmz' ? 'ЗМЗ' : 'УМЗ'}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(relatedProduct.price)} ₽
                    </span>
                    <Link 
                      href={`/catalog/${relatedProduct.id}`}
                      className="btn btn-secondary"
                    >
                      Подробнее
                    </Link>
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