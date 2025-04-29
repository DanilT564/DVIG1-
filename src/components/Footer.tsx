'use client';

import Link from 'next/link';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Двигатели ЗМЗ/УМЗ</h3>
            <p className="text-sm mb-4">
              Продажа двигателей ЗМЗ и УМЗ с доставкой по всей России. Гарантия качества, низкие цены.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-secondary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-white hover:text-secondary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-white hover:text-secondary transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-secondary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-secondary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/zmz" className="text-white hover:text-secondary transition-colors">
                  Двигатели ЗМЗ
                </Link>
              </li>
              <li>
                <Link href="/catalog/umz" className="text-white hover:text-secondary transition-colors">
                  Двигатели УМЗ
                </Link>
              </li>
              <li>
                <Link href="/catalog/parts" className="text-white hover:text-secondary transition-colors">
                  Запчасти
                </Link>
              </li>
              <li>
                <Link href="/catalog/accessories" className="text-white hover:text-secondary transition-colors">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2" />
                <span>г. Москва, ул. Автомобильная, 123</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" />
                <a href="tel:+79999999999" className="hover:text-secondary transition-colors">
                  +7 (999) 999-99-99
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" />
                <a href="mailto:info@motors.ru" className="hover:text-secondary transition-colors">
                  info@motors.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Двигатели ЗМЗ/УМЗ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 