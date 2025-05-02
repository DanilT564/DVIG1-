'use client';

import { useState } from 'react';

export default function ProductFilters({ onFilterChange }) {
  // Состояние фильтров
  const [filters, setFilters] = useState({
    manufacturers: {
      ЗМЗ: false,
      УМЗ: false
    },
    engineTypes: {
      Бензиновый: false,
      Дизельный: false,
      Инжекторный: false,
      Карбюраторный: false
    },
    condition: {
      Новые: false,
      Контрактные: false,
      Восстановленные: false
    },
    price: {
      min: '',
      max: ''
    }
  });

  // Обработчик изменения фильтра
  const handleFilterChange = (category, key, value) => {
    const newFilters = {
      ...filters,
      [category]: typeof filters[category] === 'object' && !Array.isArray(filters[category]) 
        ? { ...filters[category], [key]: value }
        : { [key]: value }
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Обработчик изменения чекбокса
  const handleCheckboxChange = (category, key) => {
    handleFilterChange(category, key, !filters[category][key]);
  };

  // Обработчик изменения цены
  const handlePriceChange = (type, value) => {
    const numValue = value === '' ? '' : parseInt(value.replace(/\D/g, ''), 10) || '';
    handleFilterChange('price', type, numValue);
  };

  // Обработчик нажатия кнопки применения фильтров
  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Фильтры</h2>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Производитель</h3>
        <div className="space-y-2">
          {Object.keys(filters.manufacturers).map(manufacturer => (
            <label key={manufacturer} className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={filters.manufacturers[manufacturer]}
                onChange={() => handleCheckboxChange('manufacturers', manufacturer)}
              />
              <span>{manufacturer}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Тип двигателя</h3>
        <div className="space-y-2">
          {Object.keys(filters.engineTypes).map(type => (
            <label key={type} className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={filters.engineTypes[type]}
                onChange={() => handleCheckboxChange('engineTypes', type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Состояние</h3>
        <div className="space-y-2">
          {Object.keys(filters.condition).map(condition => (
            <label key={condition} className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={filters.condition[condition]}
                onChange={() => handleCheckboxChange('condition', condition)}
              />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Цена</h3>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="от" 
            className="w-1/2 p-2 border rounded"
            value={filters.price.min}
            onChange={(e) => handlePriceChange('min', e.target.value)}
          />
          <input 
            type="text" 
            placeholder="до" 
            className="w-1/2 p-2 border rounded"
            value={filters.price.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
          />
        </div>
      </div>
      
      <button 
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors"
        onClick={handleApplyFilters}
      >
        Применить
      </button>
    </div>
  );
} 