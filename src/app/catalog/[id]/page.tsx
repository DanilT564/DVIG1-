import { Metadata } from 'next';
import ProductDetailsClient, { Product } from './product-details-client';
import { notFound } from 'next/navigation';

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Двигатель ЗМЗ-40524",
    description: "Бензиновый двигатель для автомобилей ГАЗель и Соболь с улучшенными эксплуатационными характеристиками.",
    fullDescription: "Двигатель ЗМЗ-40524 - четырехтактный, бензиновый, 4-цилиндровый, рядный, с комплексной микропроцессорной системой управления топливоподачей и зажиганием. Обладает высоким крутящим моментом в широком диапазоне оборотов, экономичным расходом топлива и высоким ресурсом.\n\nВсе двигатели проходят полный цикл восстановления на нашем специализированном производстве с заменой всех необходимых компонентов и последующим обязательным тестированием на диагностическом стенде.",
    price: 195000,
    oldPrice: 215000,
    image: "/images/engine-zmz-40524.jpg",
    category: "Бензиновые двигатели",
    rating: 4.7,
    reviews: 28,
    inStock: true,
    specs: {
      power: "133.6 л.с. (98.2 кВт) при 4500 об/мин",
      torque: "217 Н·м при 2500 об/мин",
      volume: "2.464 л",
      cylinders: "4, рядное",
      fuel: "бензин АИ-92, АИ-95",
      weight: "172 кг",
      crankshaft: "5-опорный",
      valves: "16",
      cooling: "жидкостное",
      injector: "распределенный впрыск"
    },
    applications: [
      "ГАЗель NEXT (А21R22, А21R32, А23R32, A23R22, A21R23, A21R33)",
      "ГАЗель Бизнес (3302, 2705, 2752, 3221)",
      "Соболь Бизнес (2217, 2752)",
      "ГАЗ-3302 ГАЗель",
      "ГАЗ-2705 ГАЗель",
      "ГАЗ-3221 ГАЗель",
      "ГАЗ-32213 ГАЗель"
    ],
    advantages: [
      "Высокая надежность и длительный ресурс эксплуатации",
      "Экономичный расход топлива (в среднем 10.5 л/100 км)",
      "Сниженный уровень шума и вибрации благодаря гидрокомпенсаторам",
      "Соответствие экологическому стандарту Евро-4",
      "Гарантия 12 месяцев без ограничения пробега"
    ]
  },
  {
    id: 2,
    name: "Двигатель УМЗ-4216",
    description: "Надежный бензиновый двигатель для коммерческого транспорта с увеличенным ресурсом.",
    fullDescription: "Двигатель УМЗ-4216 - бензиновый, 4-цилиндровый, с рядным расположением цилиндров, с впрысковой системой подачи топлива. Благодаря своей неприхотливости и ремонтопригодности широко используется в коммерческих автомобилях семейства ГАЗель.\n\nКаждый двигатель проходит полный цикл восстановления, включающий замену поршневой группы, коленчатого вала, распределительного вала, маслонасоса и других основных узлов на новые. После сборки все двигатели проходят обязательное тестирование на диагностическом стенде.",
    price: 185000,
    oldPrice: null,
    image: "/images/engine-umz-4216.jpg",
    category: "Бензиновые двигатели",
    rating: 4.5,
    reviews: 42,
    inStock: true,
    specs: {
      power: "106.8 л.с. (78.5 кВт) при 4000 об/мин",
      torque: "220.5 Н·м при 2500 об/мин",
      volume: "2.89 л",
      cylinders: "4, рядное",
      fuel: "бензин АИ-92",
      weight: "190 кг",
      crankshaft: "5-опорный",
      valves: "8",
      cooling: "жидкостное",
      injector: "распределенный впрыск"
    },
    applications: [
      "ГАЗель Бизнес (3302, 2705, 2752, 3221)",
      "ГАЗель NEXT цельнометаллический фургон (A31R32, A31R22)",
      "ГАЗель NEXT борт (A21R32, A21R22)",
      "ГАЗ-3302 ГАЗель",
      "ГАЗ-2705 ГАЗель комби",
      "ГАЗ-330232 ГАЗель фермер"
    ],
    advantages: [
      "Повышенная надежность в суровых условиях эксплуатации",
      "Адаптирован для работы на бензине АИ-92",
      "Доступность и низкая стоимость запчастей",
      "Простота обслуживания и ремонта",
      "Гарантия 12 месяцев без ограничения пробега"
    ]
  }
];

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id);
  const product = products.find(product => product.id === id);

  if (!product) {
    return {
      title: 'Товар не найден | ООО "СПЕКТР"',
      description: 'Указанный товар не найден в каталоге'
    };
  }

  return {
    title: `${product.name} | ООО "СПЕКТР"`,
    description: product.description
  };
}

// Product page component
export default function ProductPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const product = products.find(product => product.id === id);

  // Handle product not found
  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}

// Generate static paths for all products
export function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString()
  }));
} 