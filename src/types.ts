// Определение типов для проекта
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  price: number;
  imageUrl: string;
  specifications?: Record<string, string>;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
}

export interface FilterOption {
  id: string;
  name: string;
  value: string;
  checked: boolean;
} 