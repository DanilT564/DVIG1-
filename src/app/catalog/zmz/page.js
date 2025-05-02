import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../../components/ProductCard';

// Список двигателей ЗМЗ
const zmzEngines = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-405',
    shortDescription: 'Бензиновый двигатель для автомобилей ГАЗ',
    price: 185000,
    imageUrl: '/zmz-405.jpg'
  },
  {
    id: 2,
    name: 'Двигатель ЗМЗ-409',
    shortDescription: 'Инжекторный двигатель для УАЗ Патриот',
    price: 195000,
    imageUrl: '/zmz-409.jpg'
  },
  {
    id: 5,
    name: 'Двигатель ЗМЗ-51432',
    shortDescription: 'Дизельный двигатель для УАЗ',
    price: 230000,
    imageUrl: '/zmz-51432.jpg'
  },
  {
    id: 7,
    name: 'Двигатель ЗМЗ-40524',
    shortDescription: 'Бензиновый двигатель для ГАЗ, УАЗ',
    price: 205000,
    imageUrl: '/engine-zmz-40524.jpg'
  }
];

export default function ZMZCatalog() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Двигатели ЗМЗ</h1>
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
                  <Link href="/catalog" className="text-gray-600 hover:text-primary">
                    Каталог
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-800">Двигатели ЗМЗ</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Фильтры */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Фильтры</h2>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Тип двигателя</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Бензиновый</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Дизельный</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Инжекторный</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Карбюраторный</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Цена</h3>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="от" 
                    className="w-1/2 p-2 border rounded"
                  />
                  <input 
                    type="text" 
                    placeholder="до" 
                    className="w-1/2 p-2 border rounded"
                  />
                </div>
              </div>
              
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors">
                Применить
              </button>
            </div>
          </div>
          
          {/* Список товаров */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Показано {zmzEngines.length} товаров</p>
              <select className="p-2 border rounded">
                <option>По популярности</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>По наименованию</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {zmzEngines.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 