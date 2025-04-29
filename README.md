# Интернет-магазин двигателей ЗМЗ/УМЗ

Интернет-магазин по продаже двигателей ЗМЗ и УМЗ с доставкой по всей России.

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Swiper (для слайдеров)
- React Icons

## Функциональность

- Современный адаптивный дизайн
- Каталог товаров с фильтрацией
- Страница о компании
- Страница контактов с формой обратной связи
- Страница информации о доставке
- Возможность добавления товаров в корзину

## Установка и запуск

### Предварительные требования

- Node.js 18.17.0 или выше
- npm или yarn

### Установка зависимостей

```bash
npm install
# или
yarn install
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

### Сборка для production

```bash
npm run build
# или
yarn build
```

### Запуск production-версии

```bash
npm run start
# или
yarn start
```

## Деплой на Render

1. Создайте аккаунт на [Render](https://render.com/) (если у вас его еще нет)
2. Создайте новый Web Service
3. Подключите свой репозиторий
4. Настройте следующие параметры:
   - **Name**: motors-shop (или любое другое имя)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Auto-Deploy**: Yes

## Структура проекта

```
├── public/
│   └── images/     # Изображения товаров и элементы дизайна
├── src/
│   ├── app/        # Страницы и маршруты приложения
│   ├── components/ # Многоразовые компоненты
│   └── styles/     # Глобальные стили
├── .eslintrc.json  # Конфигурация ESLint
├── next.config.js  # Конфигурация Next.js
├── package.json    # Зависимости и скрипты
├── postcss.config.js # Конфигурация PostCSS
├── tailwind.config.js # Конфигурация Tailwind CSS
└── tsconfig.json   # Конфигурация TypeScript
```

## Контакты

По всем вопросам обращайтесь:
- Email: info@motors.ru
- Телефон: +7 (999) 999-99-99 