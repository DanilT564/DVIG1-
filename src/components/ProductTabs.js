'use client';

import { useState } from 'react';

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  
  return (
    <>
      <div className="border-b">
        <nav className="flex">
          <button 
            onClick={() => setActiveTab('description')}
            className={`px-6 py-3 font-medium focus:outline-none ${
              activeTab === 'description' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Описание
          </button>
          <button 
            onClick={() => setActiveTab('specifications')}
            className={`px-6 py-3 font-medium focus:outline-none ${
              activeTab === 'specifications' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Характеристики
          </button>
          <button 
            onClick={() => setActiveTab('delivery')}
            className={`px-6 py-3 font-medium focus:outline-none ${
              activeTab === 'delivery' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Доставка и оплата
          </button>
        </nav>
      </div>
      
      <div className="p-6">
        {activeTab === 'description' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Описание {product.name}</h2>
            <div className="text-gray-700 whitespace-pre-line">{product.fullDescription}</div>
          </div>
        )}
        
        {activeTab === 'specifications' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Характеристики {product.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b pb-2">
                  <span className="font-medium text-gray-600 w-1/2">
                    {key === 'manufacturer' && 'Производитель'}
                    {key === 'type' && 'Тип двигателя'}
                    {key === 'volume' && 'Объем'}
                    {key === 'power' && 'Мощность'}
                    {key === 'torque' && 'Крутящий момент'}
                    {key === 'cylinders' && 'Цилиндры'}
                    {key === 'fuelSystem' && 'Топливная система'}
                    {key === 'weight' && 'Вес'}
                    {key === 'warranty' && 'Гарантия'}
                  </span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'delivery' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Доставка и оплата</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Способы доставки:</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Транспортные компании (ПЭК, Деловые Линии, СДЭК и другие)</li>
                  <li>Самовывоз со склада в Челябинске</li>
                  <li>Курьерская доставка по Челябинску</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Способы оплаты:</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Наличными при получении</li>
                  <li>Безналичный расчет для юридических лиц</li>
                  <li>Банковской картой</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700">
                  Стоимость и сроки доставки зависят от региона и выбранной транспортной компании. 
                  Для уточнения деталей свяжитесь с нашими менеджерами по телефону.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 