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
            <h2 className="text-2xl font-bold mb-4">Собственная сборка двигателей ЗМЗ/УМЗ</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Коммерческое предложение по восстановленным двигателям для организаций с автопарком ГАЗ/УАЗ</h3>
              <p className="mb-1">OOO "СПЕКТР"</p>
              <p className="mb-1">ОГРН: 1217400012840</p>
              <p className="mb-1">ИНН/КПП: 7456047921/745601001</p>
              <p className="mb-4">Фактический адрес: Московская область, г. Подольск, Проезд авиаторов 12с2</p>
            </div>
            <p className="mb-4">
              ООО «Спектр» — это надежный партнер для всех, кто ценит качество, прозрачность и 
              индивидуальный подход в обслуживании своих автомобилей. Мы всегда готовы предложить 
              лучшие решения для наших клиентов!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">О КОМПАНИИ</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">—</span>
                  <p className="text-gray-600">
                    Мы узконаправленная организация, которая работает в нише «Обслуживания коммерческого 
                    транспорта» предлагая ассортимент восстановленных ЗМЗ/УМЗ двигателей.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">—</span>
                  <p className="text-gray-600">
                    С 2017 года мы успешно занимаемся восстановлением и сборкой двигателей, обретая 
                    репутацию надежного партнера в отрасли. В 2024 году 366 клиентов убедились в этом.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Преимущества сотрудничества</h2>
              <ul className="space-y-4 mb-6">
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">ГИБКИЕ ВАРИАНТЫ</strong>
                  <p className="text-gray-600">Сдайте старый - получите восстановленный.</p>
                </li>
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">СОКРАЩЕНИЕ ВРЕМЕНИ</strong>
                  <p className="text-gray-600">Избегайте простоя, двигателя всегда в наличие.</p>
                </li>
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">ПОД КЛЮЧ</strong>
                  <p className="text-gray-600">Через 24 часа автомобиль уже будет в строю.</p>
                </li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Выгоды для вас</h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">УДОБСТВО</strong>
                  <p className="text-gray-600">Мы - ваш цех по обслуживанию моторов</p>
                </li>
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">ЭКОНОМИЯ ВРЕМЕНИ</strong>
                  <p className="text-gray-600">Сокращаем время простоя автомобиля</p>
                </li>
                <li className="flex flex-col">
                  <strong className="font-medium text-primary">НАДЕЖНОСТЬ</strong>
                  <p className="text-gray-600">Предоставляем гарантию на двигатели</p>
                </li>
              </ul>
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