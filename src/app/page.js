import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

// Выбираем первые 4 продукта из общего списка для показа на главной
const popularProducts = productsData.slice(0, 4);

export default function Home() {
  return (
    <div>
      {/* Баннер */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/GlaB2.jpg" 
            alt="Background" 
            fill
            quality={100}
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Собственная сборка двигателей ЗМЗ/УМЗ
              </h1>
              <p className="text-xl mb-6 text-gray-800">
                Коммерческое предложение по восстановленным двигателям для организаций с автопарком ГАЗ/УАЗ
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

      {/* Информация о компании */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">О компании СПЕКТР</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-primary">Наша специализация</h3>
              <p className="mb-4">
                Мы узконаправленная организация, которая работает в нише «Обслуживания коммерческого 
                транспорта» предлагая ассортимент восстановленных ЗМЗ/УМЗ двигателей.
              </p>
              <p>
                С 2017 года мы успешно занимаемся восстановлением и сборкой двигателей, обретая 
                репутацию надежного партнера в отрасли. В 2024 году 366 клиентов убедились в этом.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-primary">Преимущества сотрудничества</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-secondary font-bold mr-2">►</span>
                  <div>
                    <strong className="font-medium">ГИБКИЕ ВАРИАНТЫ</strong>
                    <p className="text-gray-600">Сдайте старый - получите Скидку.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary font-bold mr-2">►</span>
                  <div>
                    <strong className="font-medium">СОКРАЩЕНИЕ ВРЕМЕНИ</strong>
                    <p className="text-gray-600">Избегайте простоя, двигателя всегда в наличие.</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-secondary font-bold mr-2">►</span>
                  <div>
                    <strong className="font-medium">ПОД КЛЮЧ</strong>
                    <p className="text-gray-600">Через 24 часа автомобиль уже будет в строю.</p>
                  </div>
                </li>
              </ul>
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

      {/* Выгоды для клиентов */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Выгоды для вас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">УДОБСТВО</h3>
              <p>Мы - ваш цех по обслуживанию моторов. Вам не нужно искать запчасти и мастеров.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">ЭКОНОМИЯ ВРЕМЕНИ</h3>
              <p>Сокращаем время простоя автомобиля. Быстрая замена и установка двигателей.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3 text-primary">НАДЕЖНОСТЬ</h3>
              <p>Предоставляем гарантию на двигатели и полное сопровождение после покупки.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 