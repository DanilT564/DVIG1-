import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

// Примеры популярных товаров
const popularProducts = [
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
    id: 3,
    name: 'Двигатель УМЗ-421',
    shortDescription: 'Карбюраторный двигатель для УАЗ',
    price: 160000,
    imageUrl: '/umz-421.jpg'
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-4213',
    shortDescription: 'Инжекторный двигатель для УАЗ',
    price: 175000,
    imageUrl: '/umz-4213.jpg'
  }
];

export default function Home() {
  return (
    <div>
      {/* Баннер */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Двигатели ЗМЗ и УМЗ с доставкой по России
              </h1>
              <p className="text-xl mb-6">
                Надежные двигатели для вашего автомобиля с гарантией от производителя
              </p>
              <Link href="/catalog" 
                className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                Перейти в каталог
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full">
                <Image 
                  src="/engine-zmz-40524.jpg" 
                  alt="Двигатель ЗМЗ" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Категории двигателей</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/catalog/zmz" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/category-zmz.jpg" 
                    alt="Двигатели ЗМЗ" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">Двигатели ЗМЗ</h3>
                  <p className="text-gray-600 mt-2">Бензиновые двигатели для автомобилей ГАЗ, УАЗ и других марок</p>
                </div>
              </div>
            </Link>
            
            <Link href="/catalog/umz" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/category-umz.jpg" 
                    alt="Двигатели УМЗ" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">Двигатели УМЗ</h3>
                  <p className="text-gray-600 mt-2">Надежные двигатели для коммерческого транспорта и внедорожников</p>
                </div>
              </div>
            </Link>
            
            <Link href="/catalog/parts" className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/category-parts.jpg" 
                    alt="Запчасти для двигателей" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium text-primary group-hover:text-secondary transition-colors">Запчасти</h3>
                  <p className="text-gray-600 mt-2">Оригинальные запчасти и комплектующие для двигателей ЗМЗ и УМЗ</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Популярные товары */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Популярные двигатели</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/catalog" 
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Смотреть все двигатели
            </Link>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">Гарантия качества</h3>
              <p>На все двигатели мы предоставляем гарантию от производителя. Только оригинальная продукция.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">Быстрая доставка</h3>
              <p>Доставляем двигатели по всей России. Транспортными компаниями или собственной логистикой.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">Техническая поддержка</h3>
              <p>Наши специалисты помогут с выбором и ответят на все вопросы по эксплуатации двигателей.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 