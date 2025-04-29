'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Данные о продуктах
const products = [
  {
    id: 1,
    name: 'Двигатель ЗМЗ-409',
    description: 'Бензиновый двигатель для УАЗ Патриот, Хантер, Буханка',
    price: 215000,
    image: '/images/zmz-409.jpg',
    category: 'zmz',
    specs: {
      power: '128 л.с.',
      volume: '2.7 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 2,
    name: 'Двигатель УМЗ-421',
    description: 'Бензиновый двигатель для ГАЗель, Соболь',
    price: 195000,
    image: '/images/umz-421.jpg',
    category: 'umz',
    specs: {
      power: '89 л.с.',
      volume: '2.89 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 3,
    name: 'Двигатель ЗМЗ-405 Евро 3',
    description: 'Качественная реставрация с новыми запчастями',
    price: 185000,
    image: '/images/zmz-405.jpg',
    category: 'zmz',
    specs: {
      power: '140-150 л.с.',
      volume: '2.3 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 4,
    name: 'Двигатель УМЗ-4216',
    description: 'Бензиновый двигатель Евро-4 для ГАЗель Бизнес',
    price: 210000,
    image: '/images/umz-4216.jpg',
    category: 'umz',
    specs: {
      power: '106 л.с.',
      volume: '2.9 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 5,
    name: 'Двигатель ЗМЗ-40524',
    description: 'Бензиновый двигатель для ГАЗель, Евро-4',
    price: 195000,
    image: '/images/zmz-40524.jpg',
    category: 'zmz',
    specs: {
      power: '140 л.с.',
      volume: '2.5 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 6,
    name: 'Двигатель УМЗ-4213',
    description: 'Карбюраторный двигатель для УАЗ',
    price: 170000,
    image: '/images/umz-4213.jpg',
    category: 'umz',
    specs: {
      power: '100 л.с.',
      volume: '2.9 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
  {
    id: 7,
    name: 'Двигатель ЗМЗ-51432',
    description: 'Дизельный двигатель для УАЗ Патриот',
    price: 270000,
    image: '/images/zmz-51432.jpg',
    category: 'zmz',
    specs: {
      power: '114 л.с.',
      volume: '2.2 л',
      cylinders: '4',
      fuel: 'дизель',
    },
  },
  {
    id: 8,
    name: 'Двигатель УМЗ-4178',
    description: 'Карбюраторный двигатель для УАЗ',
    price: 160000,
    image: '/images/umz-4178.jpg',
    category: 'umz',
    specs: {
      power: '90 л.с.',
      volume: '2.5 л',
      cylinders: '4',
      fuel: 'бензин',
    },
  },
];

// Фильтры
const filters = {
  categories: [
    { id: 'zmz', name: 'Двигатели ЗМЗ' },
    { id: 'umz', name: 'Двигатели УМЗ' },
  ],
  priceRange: {
    min: 0,
    max: 300000,
  },
  fuelTypes: [
    { id: 'petrol', name: 'Бензиновые' },
    { id: 'diesel', name: 'Дизельные' },
  ],
};

export default function Catalog() {
  // Состояние фильтров
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<{[key: string]: boolean}>({
    categories: true,
    price: true,
    fuel: true,
  });

  // Обработчики фильтров
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const toggleFuelType = (fuelId: string) => {
    if (selectedFuelTypes.includes(fuelId)) {
      setSelectedFuelTypes(selectedFuelTypes.filter(id => id !== fuelId));
    } else {
      setSelectedFuelTypes([...selectedFuelTypes, fuelId]);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(event.target.value);
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
  };

  const toggleFilterSection = (section: string) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section]
    });
  };

  // Фильтрация продуктов
  const filteredProducts = products.filter(product => {
    // Фильтр по категории
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Фильтр по цене
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Фильтр по типу топлива
    if (selectedFuelTypes.length > 0) {
      const productFuelType = product.specs.fuel === 'бензин' ? 'petrol' : 'diesel';
      if (!selectedFuelTypes.includes(productFuelType)) {
        return false;
      }
    }

    return true;
  });

  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Каталог двигателей</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="text-primary hover:underline">
              Главная
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Каталог</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white shadow-sm"
            >
              {showFilters ? (
                <>
                  <FiX className="mr-2" />
                  Скрыть фильтры
                </>
              ) : (
                <>
                  <FiFilter className="mr-2" />
                  Показать фильтры
                </>
              )}
            </button>
          </div>

          {/* Filters Column */}
          <div 
            className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
          >
            <div className="bg-white shadow-md rounded-lg p-5 sticky top-20">
              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleFilterSection('categories')}
                >
                  <h3 className="font-semibold">Категории</h3>
                  {expandedFilters.categories ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {expandedFilters.categories && (
                  <div className="space-y-2">
                    {filters.categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category.id}`}>{category.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleFilterSection('price')}
                >
                  <h3 className="font-semibold">Цена</h3>
                  {expandedFilters.price ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {expandedFilters.price && (
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>{formatPrice(priceRange[0])} ₽</span>
                      <span>{formatPrice(priceRange[1])} ₽</span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="range"
                        min={filters.priceRange.min}
                        max={filters.priceRange.max}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min={filters.priceRange.min}
                        max={filters.priceRange.max}
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="border rounded px-2 py-1 w-full text-sm"
                        min={filters.priceRange.min}
                        max={priceRange[1]}
                      />
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="border rounded px-2 py-1 w-full text-sm"
                        min={priceRange[0]}
                        max={filters.priceRange.max}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleFilterSection('fuel')}
                >
                  <h3 className="font-semibold">Тип топлива</h3>
                  {expandedFilters.fuel ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {expandedFilters.fuel && (
                  <div className="space-y-2">
                    {filters.fuelTypes.map(fuel => (
                      <div key={fuel.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`fuel-${fuel.id}`}
                          checked={selectedFuelTypes.includes(fuel.id)}
                          onChange={() => toggleFuelType(fuel.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`fuel-${fuel.id}`}>{fuel.name}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedFuelTypes([]);
                  setPriceRange([filters.priceRange.min, filters.priceRange.max]);
                }}
                className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
              >
                Сбросить все фильтры
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Count */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <p className="text-gray-700">
                Показано: <span className="font-medium">{filteredProducts.length}</span> из{' '}
                <span className="font-medium">{products.length}</span> товаров
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                  Сортировать:
                </label>
                <select
                  id="sort"
                  className="border border-gray-300 rounded-md py-1 px-2 text-sm"
                  defaultValue="price-asc"
                >
                  <option value="price-asc">По цене (возрастание)</option>
                  <option value="price-desc">По цене (убывание)</option>
                  <option value="name">По наименованию</option>
                </select>
              </div>
            </div>

            {/* Products List */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/catalog/${product.id}`}>
                      <div className="relative h-48">
                        <Image 
                          src={product.image} 
                          alt={product.name}
                          fill
                          style={{objectFit: 'cover'}} 
                          unoptimized={true}
                          className="transition-transform hover:scale-105"
                          onError={(e) => {
                            // Fallback в случае ошибки загрузки изображения
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'absolute inset-0 bg-gray-300 flex items-center justify-center';
                              fallback.innerHTML = '<span class="text-gray-500">Изображение недоступно</span>';
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    </Link>
                    <div className="p-5">
                      <div className="mb-2">
                        <span className="text-xs text-white bg-primary px-2 py-1 rounded-full">
                          {product.category === 'zmz' ? 'ЗМЗ' : 'УМЗ'}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-2 gap-1 mb-3 text-xs text-gray-600">
                        <div>Мощность: {product.specs.power}</div>
                        <div>Объем: {product.specs.volume}</div>
                        <div>Цилиндров: {product.specs.cylinders}</div>
                        <div>Топливо: {product.specs.fuel}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(product.price)} ₽
                        </span>
                        <button className="btn btn-secondary">
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Товары не найдены</h3>
                <p className="text-gray-600 mb-4">
                  По заданным параметрам фильтрации товаров не найдено. Пожалуйста, измените критерии поиска.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedFuelTypes([]);
                    setPriceRange([filters.priceRange.min, filters.priceRange.max]);
                  }}
                  className="btn btn-primary"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 