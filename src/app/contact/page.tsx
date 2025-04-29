'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Имитация отправки формы
    try {
      // В реальном приложении здесь будет запрос к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Контакты</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Контакты</span>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-primary text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p>Московская область, г. Подольск, Проезд авиаторов 12с2</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p><a href="tel:+79999999999" className="hover:underline">+7 (999) 999-99-99</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiMail className="text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p><a href="mailto:info@spectr-motors.ru" className="hover:underline">info@spectr-motors.ru</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiClock className="text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 15:00</p>
                    <p>Вс: Выходной</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Реквизиты</h3>
                    <p>ООО "СПЕКТР"</p>
                    <p>ОГРН: 1217400012840</p>
                    <p>ИНН/КПП: 7456047921/745601001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark mb-6">Связаться с нами</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-4">
                  <h3 className="font-medium text-lg">Спасибо за обращение!</h3>
                  <p>Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-green-700 border border-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Отправить еще сообщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Тема обращения *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите тему</option>
                      <option value="order">Заказ двигателя</option>
                      <option value="parts">Запчасти</option>
                      <option value="delivery">Доставка</option>
                      <option value="service">Сервис</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary py-3 px-6 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                    {!isSubmitting && <FiSend className="ml-2" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="rounded-lg shadow-md overflow-hidden h-80 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">Здесь будет карта</p>
        </div>
      </div>
    </div>
  );
} 