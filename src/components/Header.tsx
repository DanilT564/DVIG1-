'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Двигатели ЗМЗ/УМЗ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-dark hover:text-primary transition-colors">
              Главная
            </Link>
            <Link href="/catalog" className="text-dark hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link href="/delivery" className="text-dark hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link href="/about" className="text-dark hover:text-primary transition-colors">
              О компании
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Contact & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79999999999" className="flex items-center text-dark hover:text-primary">
              <FiPhone className="mr-2" />
              <span>+7 (999) 999-99-99</span>
            </a>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6 text-primary" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6 text-primary" />
            ) : (
              <FiMenu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                href="/catalog" 
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                href="/delivery" 
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Доставка
              </Link>
              <Link 
                href="/about" 
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                href="/contact" 
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
            <div className="mt-4 flex flex-col space-y-4">
              <a 
                href="tel:+79999999999" 
                className="flex items-center text-dark hover:text-primary"
              >
                <FiPhone className="mr-2" />
                <span>+7 (999) 999-99-99</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 