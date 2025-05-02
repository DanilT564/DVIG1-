const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Подготовка Next.js приложения к запуску
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Парсинг URL из запроса
      const parsedUrl = parse(req.url, true);
      
      // Пусть Next.js обработает запрос
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Ошибка при обработке запроса:', err);
      res.statusCode = 500;
      res.end('Внутренняя ошибка сервера');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Сервер запущен на http://${hostname}:${port}`);
  });
}); 