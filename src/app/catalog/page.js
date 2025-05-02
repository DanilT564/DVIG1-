import CatalogClient from '../../components/CatalogClient';

// Отключаем статическую генерацию для решения проблемы с аутентификацией
export const dynamic = 'force-dynamic';

// Список всех товаров (в реальном приложении это было бы в базе данных или API)
const productsData = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-405 Евро 3 Восстановленный',
    price: 150000,
    imgSrc: '/engines/zmz-405.jpg',
    shortDescription: 'Качественная реставрация с новыми запчастями. Двигатель ничем не уступает новому, но стоит дешевле.',
    link: '/product/1'
  },
  {
    id: 2,
    name: 'Двигатель УМЗ-4216 Евро 3 Восстановленный',
    price: 160000,
    imgSrc: '/engines/umz-4216.jpg',
    shortDescription: 'Восстановленный инжекторный двигатель для ГАЗели с заменой всех расходников и деталей.',
    link: '/product/2'
  },
  {
    id: 3,
    name: 'Двигатель ЗМЗ-409 Евро 3 Восстановленный',
    price: 170000,
    imgSrc: '/engines/zmz-409.jpg',
    shortDescription: 'Инжекторный восстановленный двигатель для УАЗ Патриот, Хантер, Буханка.',
    link: '/product/3'
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-421 Восстановленный',
    price: 155000,
    imgSrc: '/engines/umz-421.jpg',
    shortDescription: 'Карбюраторный восстановленный двигатель для коммерческого транспорта.',
    link: '/product/4'
  },
  {
    id: 5,
    name: 'Двигатель ЗМЗ-405 Евро 4 Восстановленный',
    price: 180000,
    imgSrc: '/engines/zmz-405-euro4.jpg',
    shortDescription: 'Инжекторный восстановленный двигатель экологического класса Евро 4.',
    link: '/product/5'
  },
  {
    id: 6,
    name: 'Двигатель УМЗ-4213 Восстановленный',
    price: 145000,
    imgSrc: '/engines/umz-4213.jpg',
    shortDescription: 'Карбюраторный восстановленный двигатель для малотоннажных грузовиков.',
    link: '/product/6'
  },
];

export default function Catalog() {  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Каталог двигателей</h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-600 hover:text-primary">
                  Главная
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">Каталог</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Передаем данные продуктов в клиентский компонент */}
        <CatalogClient products={productsData} />
      </div>
    </div>
  );
} 