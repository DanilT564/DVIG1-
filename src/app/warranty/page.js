import Link from 'next/link';

export default function Warranty() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Гарантия</h1>
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
                  <span className="text-gray-800">Гарантия</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Гарантийные обязательства</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Условия гарантии</h3>
                <p className="mb-3">
                  ООО «СПЕКТР» предоставляет гарантию 12 месяцев на все восстановленные двигатели ЗМЗ и УМЗ.
                  Гарантия распространяется на все внутренние механические детали двигателя при условии
                  соблюдения правил эксплуатации транспортного средства.
                </p>
                <p>
                  Гарантийный срок начинается с момента установки двигателя на транспортное средство и
                  подтверждается соответствующей отметкой в гарантийном талоне.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Гарантийное обслуживание включает</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Бесплатный ремонт или замену неисправных деталей</li>
                  <li>Техническую поддержку и консультации</li>
                  <li>Диагностику и выявление причин неисправностей</li>
                  <li>При невозможности ремонта - замену двигателя</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Условия прекращения гарантии</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Нарушение правил эксплуатации и технического обслуживания</li>
                  <li>Механические повреждения в результате аварии</li>
                  <li>Самостоятельный ремонт или модификация двигателя</li>
                  <li>Использование неоригинальных или некачественных запчастей</li>
                  <li>Несоблюдение рекомендаций по обкатке нового двигателя</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Как получить гарантийное обслуживание</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Свяжитесь с нами по телефону +7 968 117-77-73</li>
                  <li>Опишите возникшую проблему</li>
                  <li>Предоставьте гарантийный талон и документы на приобретение двигателя</li>
                  <li>Доставьте автомобиль или двигатель в наш сервисный центр для диагностики</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
            <p className="mb-6">
              Если у вас возникли вопросы по гарантийному обслуживанию, свяжитесь с нашими специалистами 
              для получения подробной консультации.
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