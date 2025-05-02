#!/bin/bash

# Удаляем старые файлы блокировки и кеш
rm -f yarn.lock
rm -f yarn-error.log
rm -f .yarnclean

# Очищаем кеш npm
npm cache clean --force

# Устанавливаем зависимости с помощью npm
npm install --legacy-peer-deps

echo "Установка завершена! Теперь можно запустить 'npm run dev' для разработки или 'npm run build' для сборки." 