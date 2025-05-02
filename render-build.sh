#!/bin/bash

# Установка зависимостей (включая dev-зависимости)
npm install --legacy-peer-deps --production=false

# Сборка проекта
npm run build 