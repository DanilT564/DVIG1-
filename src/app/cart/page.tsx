'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiTrash2, FiShoppingCart, FiArrowRight, FiPhone } from 'react-icons/fi';

// Тип для элемента корзины
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

export default function Cart() {
  // Состояние корзины
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Двигатель ЗМЗ-409',
      price: 215000,
      quantity: 1,
      image: '/images/zmz-409.jpg',
      category: 'zmz',
    },
    {
      id: 3,
      name: 'Двигатель ЗМЗ-405',
      price: 185000,
      quantity: 1,
      image: '/images/zmz-405.jpg',
      category: 'zmz',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // Расчет итоговой суммы
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCost = 2000; // Фиксированная стоимость доставки
  const total = subtotal - discount + deliveryCost;

  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  // Увеличение количества товара
  const increaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Уменьшение количества товара
  const decreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Удаление товара из корзины
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Применение промокода
  const applyPromoCode = () => {
    if (promoCode === 'MOTORS10') {
      const discountAmount = Math.round(subtotal * 0.1); // 10% скидка
      setDiscount(discountAmount);
      setIsPromoApplied(true);
    } else {
      setDiscount(0);
      setIsPromoApplied(false);
      alert('Неверный промокод');
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Корзина</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Корзина</span>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Товары в корзине</h2>
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex flex-wrap items-center gap-4">
                        <div className="relative h-20 w-20 bg-gray-200 rounded">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Фото</span>
                          </div>
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-lg truncate">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            Категория: {item.category === 'zmz' ? 'ЗМЗ' : 'УМЗ'}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-8 h-8 flex items-center justify-center border rounded-md"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-8 h-8 flex items-center justify-center border rounded-md"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-bold text-lg text-primary min-w-[120px] text-right">
                          {formatPrice(item.price * item.quantity)} ₽
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Удалить товар"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Сумма заказа</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Товары ({cartItems.length}):</span>
                      <span>{formatPrice(subtotal)} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{formatPrice(deliveryCost)} ₽</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка:</span>
                        <span>-{formatPrice(discount)} ₽</span>
                      </div>
                    )}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Итого:</span>
                        <span>{formatPrice(total)} ₽</span>
                      </div>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-1">
                      Промокод
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id="promo-code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={isPromoApplied}
                        placeholder="Введите промокод"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        onClick={applyPromoCode}
                        disabled={isPromoApplied || !promoCode}
                        className={`px-4 py-2 rounded-md ${
                          isPromoApplied
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary/90'
                        }`}
                      >
                        Применить
                      </button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-green-600 text-sm mt-1">
                        Промокод успешно применен! Скидка 10%.
                      </p>
                    )}
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full btn btn-primary py-3 flex items-center justify-center">
                    Оформить заказ
                    <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>

              <div className="bg-light p-4 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">Нужна помощь?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Если у вас возникли вопросы по оформлению заказа, свяжитесь с нами:
                </p>
                <a
                  href="tel:+79999999999"
                  className="text-primary hover:underline flex items-center text-sm"
                >
                  <FiPhone className="mr-2" />
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-gray-400 mb-4">
              <FiShoppingCart size={64} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-6">
              Похоже, вы еще не добавили товары в корзину. Перейдите в каталог, чтобы выбрать двигатели и запчасти.
            </p>
            <Link
              href="/catalog"
              className="btn btn-primary py-3 px-6 inline-flex items-center"
            >
              Перейти в каталог
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 