"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../../components/ProductCard';
import { useState, useEffect } from 'react';

// Список запчастей
const engineParts = [
  {
    id: 101,
    name: 'Комплект поршней ЗМЗ',
    shortDescription: 'Комплект поршней для двигателей ЗМЗ-405, 409',
    price: 12500,
    imageUrl: '/parts-pistons.jpg',
    category: 'Поршневая группа',
    compatibility: 'ЗМЗ'
  },
  {
    id: 102,
    name: 'Головка блока цилиндров ЗМЗ-406',
    shortDescription: 'ГБЦ в сборе для двигателей семейства ЗМЗ-406',
    price: 35000,
    imageUrl: '/parts-cylinder-head.jpg',
    category: 'Головка блока',
    compatibility: 'ЗМЗ'
  },
  {
    id: 103,
    name: 'Комплект прокладок УМЗ-4216',
    shortDescription: 'Полный комплект прокладок для ремонта двигателя УМЗ-4216',
    price: 3800,
    imageUrl: '/parts-gaskets.jpg',
    category: 'Прокладки',
    compatibility: 'УМЗ'
  },
  {
    id: 104,
    name: 'Коленвал ЗМЗ-409',
    shortDescription: 'Коленчатый вал для двигателя ЗМЗ-409',
    price: 18500,
    imageUrl: '/parts-crankshaft.jpg',
    category: 'Коленвал',
    compatibility: 'ЗМЗ'
  }
];

export default function PartsCatalog() {
  const [filteredParts, setFilteredParts] = useState(engineParts);
  const [filters, setFilters] = useState({
    category: {
      'Блок цилиндров': false,
      'Поршневая группа': false,
      'Головка блока': false,
      'Коленвал': false,
      'Прокладки': false
    },
    compatibility: {
      'ЗМЗ': false,
      'УМЗ': false
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
    let result = [...engineParts];

    // Filter by category
    const selectedCategories = Object.entries(filters.category)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedCategories.length > 0) {
      result = result.filter(part => selectedCategories.includes(part.category));
    }

    // Filter by compatibility
    const selectedCompatibility = Object.entries(filters.compatibility)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedCompatibility.length > 0) {
      result = result.filter(part => selectedCompatibility.includes(part.compatibility));
    }

    // Filter by price
    if (filters.price.min) {
      result = result.filter(part => part.price >= parseInt(filters.price.min));
    }
    
    if (filters.price.max) {
      result = result.filter(part => part.price <= parseInt(filters.price.max));
    }

    setFilteredParts(result);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Запчасти для двигателей</h1>
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
                  <Link href="/catalog" className="text-gray-600 hover:text-primary">
                    Каталог
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-800">Запчасти</span>
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
                <h3 className="font-medium mb-2">Категория</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.category['Блок цилиндров']}
                      onChange={() => handleCheckboxChange('category', 'Блок цилиндров')}
                    />
                    <span>Блок цилиндров</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.category['Поршневая группа']}
                      onChange={() => handleCheckboxChange('category', 'Поршневая группа')}
                    />
                    <span>Поршневая группа</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.category['Головка блока']}
                      onChange={() => handleCheckboxChange('category', 'Головка блока')}
                    />
                    <span>Головка блока</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.category['Коленвал']}
                      onChange={() => handleCheckboxChange('category', 'Коленвал')}
                    />
                    <span>Коленвал</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.category['Прокладки']}
                      onChange={() => handleCheckboxChange('category', 'Прокладки')}
                    />
                    <span>Прокладки</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Применимость</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.compatibility['ЗМЗ']}
                      onChange={() => handleCheckboxChange('compatibility', 'ЗМЗ')}
                    />
                    <span>ЗМЗ</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      checked={filters.compatibility['УМЗ']}
                      onChange={() => handleCheckboxChange('compatibility', 'УМЗ')}
                    />
                    <span>УМЗ</span>
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
              <p className="text-gray-600">Показано {filteredParts.length} товаров</p>
              <select className="p-2 border rounded">
                <option>По популярности</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>По наименованию</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 