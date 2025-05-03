"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaRegImage } from 'react-icons/fa';

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Обработчик наведения мыши для эффекта зума
  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    
    // Расчет относительной позиции курсора внутри контейнера (0-1)
    const x = Math.min(Math.max((e.clientX - left) / width, 0), 1);
    const y = Math.min(Math.max((e.clientY - top) / height, 0), 1);
    
    setZoomPos({ x, y });
  };

  // Обработчик клика на основное изображение
  const handleMainImageClick = () => {
    if (isZoomed) {
      setIsZoomed(false);
    } else {
      setLightboxOpen(true);
    }
  };

  // Обработчики навигации для лайтбокса
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Обработчик клавиш для лайтбокса
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setLightboxOpen(false);
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Блокировка прокрутки при открытом лайтбоксе
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  return (
    <div className="select-none">
      {/* Основное изображение */}
      <div 
        className="relative h-[400px] md:h-[600px] w-full mb-4 rounded-lg overflow-hidden bg-white shadow-md group"
        onClick={handleMainImageClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsZoomed(false);
        }}
        onMouseDown={() => setIsZoomed(true)}
        onMouseUp={() => setIsZoomed(false)}
      >
        <div 
          className={`relative h-full w-full transition-transform duration-200 ease-out ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          style={
            isZoomed 
              ? { 
                  transformOrigin: `${zoomPos.x * 100}% ${zoomPos.y * 100}%` 
                }
              : {}
          }
        >
          <Image 
            src={images[activeIndex]} 
            alt="Product image" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Указатель для увеличения изображения */}
        {isHovering && !isZoomed && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <FaSearchPlus className="text-primary text-xl" />
            </div>
          </div>
        )}

        {/* Навигация по изображениям */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow-md">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        )}

        {isZoomed && (
          <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md animate-pulse">
            Удерживайте для увеличения
          </div>
        )}
      </div>
      
      {/* Миниатюры */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 ${
              activeIndex === index 
                ? 'ring-2 ring-primary scale-105 shadow-lg' 
                : 'ring-1 ring-gray-200 hover:ring-primary/50 hover:scale-[1.03]'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image 
              src={img} 
              alt={`Thumbnail ${index + 1}`} 
              fill
              sizes="(max-width: 768px) 25vw, 10vw"
              className="object-cover hover:opacity-90 transition-opacity"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      {/* Лайтбокс / Полноэкранный просмотр */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
          {/* Кнопка закрытия */}
          <button 
            className="absolute top-4 right-4 text-white z-10 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          
          {/* Кнопка назад */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <FaChevronLeft size={24} />
          </button>
          
          {/* Главное изображение */}
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 animate-fadeIn">
            <Image 
              src={images[activeIndex]} 
              alt={`Full size image ${activeIndex + 1}`} 
              fill
              sizes="100vw"
              className="object-contain"
            />
            
            {/* Индикатор номера изображения */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center">
              <FaRegImage className="mr-2" />
              {activeIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Кнопка вперед */}
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <FaChevronRight size={24} />
          </button>
          
          {/* Миниатюры внизу */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto">
            {images.map((img, index) => (
              <div 
                key={index}
                className={`relative w-16 h-16 rounded overflow-hidden cursor-pointer transition-all ${
                  activeIndex === index ? 'border-2 border-white' : 'opacity-60 hover:opacity-100'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
              >
                <Image 
                  src={img} 
                  alt={`Thumbnail ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 16px, 64px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 