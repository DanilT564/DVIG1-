"use client";

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../../components/ProductCard';
import { useState, useEffect } from 'react';
import { productsData } from '../../../data/products';

// Фильтруем только двигатели УМЗ (id 8)
const umzEngines = productsData.filter(product => 
  product.id === 8 || 
  (product.specifications && product.specifications.manufacturer && product.specifications.manufacturer.includes('УМЗ'))
);

export default function UMZCatalog() {
  const [filteredEngines, setFilteredEngines] = useState(umzEngines);
  const [filters, setFilters] = useState({
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
    let result = [...umzEngines];

    // Filter by condition
    const selectedConditions = Object.entries(filters.condition)
      .filter(([_, isSelected]) => isSelected)
      .map(([name]) => name);
    
    if (selectedConditions.length > 0) {
      result = result.filter(product => selectedConditions.includes(product.condition || 'Восстановленные'));
    }

    // Filter by price
    if (filters.price.min) {
      result = result.filter(engine => engine.price >= parseInt(filters.price.min));
    }
    
    if (filters.price.max) {
      result = result.filter(engine => engine.price <= parseInt(filters.price.max));
    }

    setFilteredEngines(result);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Двигатели УМЗ</h1>
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
                  <span className="text-gray-800">Двигатели УМЗ</span>
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
              <p className="text-gray-600">Показано {filteredEngines.length} товаров</p>
              <select className="p-2 border rounded">
                <option>По популярности</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>По наименованию</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEngines.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 