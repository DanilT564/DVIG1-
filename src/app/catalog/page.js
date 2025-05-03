"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import { useState, useEffect } from 'react';

// Примеры товаров для каталога
const products = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-405 Евро 3',
    shortDescription: 'Бензиновый двигатель для автомобилей ГАЗ',
    price: 150000,
    imageUrl: '/zmz-405.jpg',
    images: [
      '/images/engines/zmz/zmz-405-1.jpg',
      '/images/engines/zmz/zmz-405-2.jpg',
      '/images/engines/zmz/zmz-405-3.jpg',
      '/images/engines/zmz/zmz-405-4.jpg'
    ],
    manufacturer: 'ЗМЗ',
    type: 'Бензиновый',
    condition: 'Новые'
  },
  {
    id: 2,
    name: 'Двигатель ЗМЗ-409',
    shortDescription: 'Инжекторный двигатель для УАЗ Патриот',
    price: 195000,
    imageUrl: '/zmz-409.jpg',
    manufacturer: 'ЗМЗ',
    type: 'Инжекторный',
    condition: 'Новые'
  },
  {
    id: 3,
    name: 'Двигатель УМЗ-421',
    shortDescription: 'Карбюраторный двигатель для УАЗ',
    price: 160000,
    imageUrl: '/umz-421.jpg',
    manufacturer: 'УМЗ',
    type: 'Карбюраторный',
    condition: 'Новые'
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-4213',
    shortDescription: 'Инжекторный двигатель для УАЗ',
    price: 175000,
    imageUrl: '/umz-4213.jpg',
    manufacturer: 'УМЗ',
    type: 'Инжекторный',
    condition: 'Контрактные'
  },
  {
    id: 5,
    name: 'Двигатель ЗМЗ-51432',
    shortDescription: 'Дизельный двигатель для УАЗ',
    price: 230000,
    imageUrl: '/zmz-51432.jpg',
    manufacturer: 'ЗМЗ',
    type: 'Дизельный',
    condition: 'Новые'
  },
  {
    id: 6,
    name: 'Двигатель УМЗ-4216',
    shortDescription: 'Бензиновый двигатель для ГАЗель Бизнес',
    price: 198000,
    imageUrl: '/engine-umz-4216.jpg',
    manufacturer: 'УМЗ',
    type: 'Бензиновый',
    condition: 'Восстановленные'
  },
  {
    id: 7,
    name: 'Двигатель ЗМЗ-40524',
    shortDescription: 'Бензиновый двигатель для ГАЗ, УАЗ',
    price: 205000,
    imageUrl: '/engine-zmz-40524.jpg',
    manufacturer: 'ЗМЗ',
    type: 'Бензиновый',
    condition: 'Контрактные'
  },
  {
    id: 8,
    name: 'Двигатель УМЗ-4178',
    shortDescription: 'Карбюраторный двигатель для УАЗ',
    price: 155000,
    imageUrl: '/umz-4178.jpg',
    manufacturer: 'УМЗ',
    type: 'Карбюраторный',
    condition: 'Восстановленные'
  }
];

export default function Catalog() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    manufacturer: {
      'ЗМЗ': false,
      'УМЗ': false
    },
    type: {
      'Бензиновый': false,
      'Дизельный': false,
      'Инжекторный': false,
      'Карбюраторный': false
    },
    condition: {
      'Новые': false,
      'Контрактные': false,
      'Восстановленные': false
    },
    price: {
      min: '',
      max: ''
    }
  });

  // Apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Handle checkbox change
  const handleCheckboxChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: {
        ...prevFilters[filterType],
        [value]: !prevFilters[filterType][value]
      }
    }));
  };

  // Handle price inputs
  const handlePriceChange = (type, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [type]: value
      }
    }));
  };

  // Apply all filters
  const applyFilters = () => {
    let result = [...products];

    // Filter by manufacturer
    const selectedManufacturers = Object.entries(filters.manufacturer)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedManufacturers.length > 0) {
      result = result.filter(product => selectedManufacturers.includes(product.manufacturer));
    }

    // Filter by engine type
    const selectedTypes = Object.entries(filters.type)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedTypes.length > 0) {
      result = result.filter(product => selectedTypes.includes(product.type));
    }

    // Filter by condition
    const selectedConditions = Object.entries(filters.condition)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedConditions.length > 0) {
      result = result.filter(product => selectedConditions.includes(product.condition));
    }

    // Filter by price
    if (filters.price.min) {
      result = result.filter(product => product.price >= parseInt(filters.price.min));
    }
    
    if (filters.price.max) {
      result = result.filter(product => product.price <= parseInt(filters.price.max));
    }

    setFilteredProducts(result);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Каталог двигателей</h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-800">Каталог</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Фильтры */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Фильтры</h2>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Производитель</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.manufacturer['ЗМЗ']}
                      onChange={() => handleCheckboxChange('manufacturer', 'ЗМЗ')}
                    />
                    <span>ЗМЗ</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.manufacturer['УМЗ']}
                      onChange={() => handleCheckboxChange('manufacturer', 'УМЗ')}
                    />
                    <span>УМЗ</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Тип двигателя</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.type['Бензиновый']}
                      onChange={() => handleCheckboxChange('type', 'Бензиновый')}
                    />
                    <span>Бензиновый</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.type['Дизельный']}
                      onChange={() => handleCheckboxChange('type', 'Дизельный')}
                    />
                    <span>Дизельный</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.type['Инжекторный']}
                      onChange={() => handleCheckboxChange('type', 'Инжекторный')}
                    />
                    <span>Инжекторный</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.type['Карбюраторный']}
                      onChange={() => handleCheckboxChange('type', 'Карбюраторный')}
                    />
                    <span>Карбюраторный</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Состояние</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.condition['Новые']}
                      onChange={() => handleCheckboxChange('condition', 'Новые')}
                    />
                    <span>Новые</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.condition['Контрактные']}
                      onChange={() => handleCheckboxChange('condition', 'Контрактные')}
                    />
                    <span>Контрактные</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.condition['Восстановленные']}
                      onChange={() => handleCheckboxChange('condition', 'Восстановленные')}
                    />
                    <span>Восстановленные</span>
                  </label>
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
                onClick={applyFilters}
              >
                Применить
              </button>
            </div>
          </div>
          
          {/* Список товаров */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Показано {filteredProducts.length} товаров</p>
              <select className="p-2 border rounded">
                <option>По популярности</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>По наименованию</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 