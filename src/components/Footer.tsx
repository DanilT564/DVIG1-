'use client';

import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и информация о компании */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo-white.svg" 
                alt="ООО СПЕКТР" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">ООО "СПЕКТР"</span>
            </div>
            <p className="mb-4 text-gray-400">
              Собственная сборка двигателей ЗМЗ/УМЗ для организаций с автопарком ГАЗ/УАЗ
            </p>
            <div className="space-y-2 text-gray-400">
              <p>ОГРН: 1175074005742</p>
              <p>ИНН/КПП: 5036172132/503601001</p>
              <p>Мы работаем с 2017 года</p>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Главная
              </Link>
              <Link href="/catalog" className="text-gray-400 hover:text-white transition-colors">
                Каталог
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                О компании
              </Link>
              <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                Доставка
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-blue-400" />
                <p>Московская область, г. Подольск, Проезд авиаторов 12с2</p>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-blue-400" />
                <a href="tel:+74951234567" className="hover:text-blue-400">+7 (495) 123-45-67</a>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-blue-400" />
                <a href="mailto:info@spectr-motors.ru" className="hover:text-blue-400">
                  info@spectr-motors.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ООО "СПЕКТР" - Все права защищены</p>
        </div>
      </div>
    </footer>
  );
} 