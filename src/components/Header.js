import Link from 'next/link';
import { FaHome, FaWhatsapp, FaTelegram, FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">ООО «СПЕКТР»</Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors flex items-center">
              <FaHome className="mr-1" /> Главная
            </Link>
            <Link href="/catalog" className="hover:text-secondary transition-colors">Каталог</Link>
            <Link href="/delivery" className="hover:text-secondary transition-colors">Доставка</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">О компании</Link>
            <Link href="/contacts" className="hover:text-secondary transition-colors">Контакты</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:89001234567" className="flex items-center hover:text-secondary transition-colors text-sm">
              <FaPhone className="mr-2" />
              <span>8 (900) 123-45-67</span>
            </a>
            <a href="https://wa.me/89001234567" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://t.me/spectr" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 