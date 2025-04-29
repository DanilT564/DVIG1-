'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiPhone, FiMail } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-md">
      {/* Верхняя панель с контактами */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center hover:text-blue-200">
              <FiPhone className="mr-2" /> +7 (495) 123-45-67
            </a>
            <a href="mailto:info@spectr-motors.ru" className="flex items-center hover:text-blue-200">
              <FiMail className="mr-2" /> info@spectr-motors.ru
            </a>
          </div>
          <div>
            <p className="text-sm">Московская область, г. Подольск, Проезд авиаторов 12с2</p>
          </div>
        </div>
      </div>

      {/* Основная часть шапки */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="ООО СПЕКТР" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <p className="font-bold text-xl">ООО "СПЕКТР"</p>
                <p className="text-xs text-gray-600">Собственная сборка двигателей ЗМЗ/УМЗ</p>
              </div>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Главная
            </Link>
            <Link href="/catalog" className="text-gray-700 hover:text-blue-600 font-medium">
              Каталог
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              О компании
            </Link>
            <Link href="/delivery" className="text-gray-700 hover:text-blue-600 font-medium">
              Доставка
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Контакты
            </Link>
          </nav>

          {/* Иконки справа */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FiSearch className="h-6 w-6" />
            </button>

            <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative">
              <FiShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Кнопка мобильного меню */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Строка поиска */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-10">
          <div className="container mx-auto">
            <form className="flex">
              <input
                type="text"
                placeholder="Поиск по товарам..."
                className="flex-grow border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
              >
                <FiSearch />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            <Link href="/" 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link href="/catalog" 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link href="/about" 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              О компании
            </Link>
            <Link href="/delivery" 
              className="py-3 border-b border-gray-100 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Доставка
            </Link>
            <Link href="/contact" 
              className="py-3 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 