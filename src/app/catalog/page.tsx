import { Metadata } from 'next';
import Link from 'next/link';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

// Sample product data - same as in product detail page
const products = [
  {
    id: 1,
    name: "Двигатель ЗМЗ-40524",
    description: "Бензиновый двигатель для автомобилей ГАЗель и Соболь с улучшенными эксплуатационными характеристиками.",
    price: 195000,
    oldPrice: 215000,
    image: "/images/engine-zmz-40524.jpg",
    category: "Бензиновые двигатели",
    inStock: true,
  },
  {
    id: 2,
    name: "Двигатель УМЗ-4216",
    description: "Надежный бензиновый двигатель для коммерческого транспорта с увеличенным ресурсом.",
    price: 185000,
    oldPrice: null,
    image: "/images/engine-umz-4216.jpg",
    category: "Бензиновые двигатели",
    inStock: true,
  },
  {
    id: 3,
    name: "Двигатель ЗМЗ-409",
    description: "Мощный двигатель для автомобилей УАЗ с высоким крутящим моментом и улучшенной динамикой.",
    price: 210000,
    oldPrice: 230000,
    image: "/images/zmz-409.jpg",
    category: "Бензиновые двигатели",
    inStock: true,
  },
  {
    id: 4,
    name: "Двигатель УМЗ-421",
    description: "Экономичный двигатель для коммерческого транспорта с повышенной надежностью.",
    price: 175000,
    oldPrice: null,
    image: "/images/umz-421.jpg",
    category: "Бензиновые двигатели",
    inStock: false,
  },
  {
    id: 5,
    name: "Двигатель ЗМЗ-405",
    description: "Современный инжекторный двигатель для легких коммерческих автомобилей.",
    price: 190000,
    oldPrice: 205000,
    image: "/images/zmz-405.jpg",
    category: "Бензиновые двигатели",
    inStock: true,
  }
];

// Categories for filtering
const categories = [
  "Все категории",
  "Бензиновые двигатели",
  "Дизельные двигатели",
  "Запчасти и комплектующие"
];

export const metadata: Metadata = {
  title: 'Каталог двигателей ЗМЗ/УМЗ | ООО "СПЕКТР"',
  description: 'Полный каталог восстановленных двигателей ЗМЗ и УМЗ для автомобилей ГАЗ и УАЗ. Доставка по всей России, гарантия 12 месяцев.',
};

export default function CatalogPage() {
  // In a real application, filtering would be implemented using React state
  // and likely API calls for data

  // Format price with spaces as thousand separators
  const formatPrice = (price: number) => {
    return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-blue-600">
          Главная
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900">Каталог</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Каталог двигателей</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Фильтры</h2>
              <FiFilter />
            </div>

            {/* Category filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Категория</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${index}`}
                      name="category"
                      defaultChecked={index === 0}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Цена</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="min-price" className="sr-only">Мин. цена</label>
                  <input
                    type="number"
                    id="min-price"
                    placeholder="От"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="max-price" className="sr-only">Макс. цена</label>
                  <input
                    type="number"
                    id="max-price"
                    placeholder="До"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Availability filter */}
            <div>
              <h3 className="font-medium mb-2">Наличие</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                  В наличии
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Показано {products.length} товаров</p>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Сортировать по:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Популярности</option>
                  <option>Цене: по возрастанию</option>
                  <option>Цене: по убыванию</option>
                  <option>Названию</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiChevronDown />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                href={`/catalog/${product.id}`}
                key={product.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.oldPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Скидка {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </div>
                      {product.oldPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatPrice(product.oldPrice)}
                        </div>
                      )}
                    </div>
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.inStock ? 'В наличии' : 'Под заказ'}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 