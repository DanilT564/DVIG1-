import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ООО «СПЕКТР»</h3>
            <p className="mb-4">Собственная сборка двигателей ЗМЗ/УМЗ для организаций с автопарком ГАЗ/УАЗ</p>
            <div className="flex space-x-4">
              <a href="https://t.me/spectr" className="hover:text-secondary transition-colors">
                <FaTelegram size={24} />
              </a>
              <a href="https://vk.com/spectr" className="hover:text-secondary transition-colors">
                <FaVk size={24} />
              </a>
              <a href="https://wa.me/79001234567" className="hover:text-secondary transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">О компании</Link></li>
              <li><Link href="/delivery" className="hover:text-secondary transition-colors">Доставка и оплата</Link></li>
              <li><Link href="/warranty" className="hover:text-secondary transition-colors">Гарантия</Link></li>
              <li><Link href="/contacts" className="hover:text-secondary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" /> <a href="tel:+79001234567" className="hover:text-secondary transition-colors">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> <a href="mailto:info@spectr.ru" className="hover:text-secondary transition-colors">info@spectr.ru</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> <span>Московская область, г. Подольск, Проезд авиаторов 12с2</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-5 text-center">
          <p>&copy; {new Date().getFullYear()} ООО «СПЕКТР». ОГРН: 1217400012840 ИНН/КПП: 7456047921/745601001</p>
        </div>
      </div>
    </footer>
  );
} 