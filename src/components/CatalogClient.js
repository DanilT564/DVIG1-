'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

export default function CatalogClient({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [activeFilters, setActiveFilters] = useState({});
  
  const applyFilters = (filters) => {
    setActiveFilters(filters);
    
    let filtered = [...products];
    
    // Фильтрация по производителю
    const selectedManufacturers = Object.entries(filters.manufacturers || {})
      .filter(([_, selected]) => selected)
      .map(([name]) => name);
      
    if (selectedManufacturers.length > 0) {
      filtered = filtered.filter(product => 
        selectedManufacturers.some(manufacturer => 
          product.name.includes(manufacturer)
        )
      );
    }
    
    // Фильтрация по типу двигателя
    const selectedEngineTypes = Object.entries(filters.engineTypes || {})
      .filter(([_, selected]) => selected)
      .map(([name]) => name);
      
    if (selectedEngineTypes.length > 0) {
      filtered = filtered.filter(product => 
        selectedEngineTypes.some(type => 
          product.shortDescription.includes(type)
        )
      );
    }
    
    // Фильтрация по состоянию
    const selectedConditions = Object.entries(filters.condition || {})
      .filter(([_, selected]) => selected)
      .map(([name]) => name);
      
    if (selectedConditions.length > 0) {
      filtered = filtered.filter(product => 
        selectedConditions.some(condition => {
          if (condition === 'Восстановленные') {
            return product.name.includes('Восстановленный');
          }
          if (condition === 'Новые') {
            return product.name.includes('Новый');
          }
          if (condition === 'Контрактные') {
            return product.name.includes('Контрактный');
          }
          return false;
        })
      );
    }
    
    // Фильтрация по цене
    if (filters.price?.min !== '' && !isNaN(filters.price.min)) {
      filtered = filtered.filter(product => product.price >= filters.price.min);
    }
    
    if (filters.price?.max !== '' && !isNaN(filters.price.max)) {
      filtered = filtered.filter(product => product.price <= filters.price.max);
    }
    
    setFilteredProducts(filtered);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Боковая панель с фильтрами */}
      <div className="lg:col-span-1">
        <ProductFilters onFilterChange={applyFilters} />
      </div>
      
      {/* Список товаров */}
      <div className="lg:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Каталог двигателей</h2>
          <div className="text-gray-600">
            Найдено: {filteredProducts.length} товаров
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium text-gray-700">
              Товары не найдены
            </h3>
            <p className="text-gray-500 mt-2">
              Попробуйте изменить параметры фильтрации
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 