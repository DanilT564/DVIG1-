import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Показываем индикатор загрузки или блокируем кнопку отправки
      // (здесь можно добавить состояние isLoading и использовать его для кнопки)
      
      // Отправляем данные на вебхук Make
      const response = await fetch('https://hook.us2.make.com/if80951xw0ln3qjshexm8ooyvupcq2gd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Успешная отправка
        alert('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
        
        // Сброс формы
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          agreement: false
        });
      } else {
        throw new Error('Ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Иван Иванов"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="1umudov@mail.ru"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+7 968 117-77-73"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-1">Тема обращения</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Выберите тему</option>
            <option value="order">Вопрос по заказу</option>
            <option value="product">Подбор двигателя</option>
            <option value="delivery">Доставка</option>
            <option value="other">Другое</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">Сообщение</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Текст вашего сообщения..."
            required
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="agreement" 
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mr-2" 
            required
          />
          <label htmlFor="agreement" className="text-gray-700">
            Я согласен с <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a>
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  );
} 