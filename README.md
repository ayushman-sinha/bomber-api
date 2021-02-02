<h1 align="center">
  <a href="https://www.npmjs.com/package/bomber-api"><img src="https://img.shields.io/npm/dt/bomber-api" alt="NPM downloads"></a>
  <br>
  <a href="https://github.com/shketov/bomber-api"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/collision-symbol_1f4a5.png"></a>
  <br>
  bomber-api
  <br>
</h1>

<h4 align="center">Удобное API для создания собственного SMS бомбера</h4>
<h5 align="center">Теперь и WEB версия</h5>


## Установка

**В качестве библиотеки**

`npm install bomber-api`

`const bomber = require("bomber-api");`

**В качестве WEB версии бомбера**

  * Скачайте [последнюю](https://github.com/shketov/bomber-api/releases/) версию
  * Распакуйте архив
  * Установите зависимости - `npm install`
## Как использовать?
> Начиная с версии `1.6.0` появляется возможность "гибридного" использования библиотеки - использование API либо WEB версии бомбера

**Использование API**

Иницилизация атаки - `bomber.attack(number, loop);`
  * number - номер телефона
  * loop - число повторов цикла

Например: `bomber.attack(79999999999, 5);`

Остановить атаку - `bomber.stop(number);`
  * number - номер телефона
  
Например: `bomber.stop(79999999999);`

Активные атаки - `bomber.list()`
  * Не принимает параментров, возвращает список активных атак в JSON массиве

  **WEB версия**
  * node web.js
  > Изначально запускается на `3000` порту, используйте флаг `--port` чтобы запустить на желаемом порту. Например: `node web.js --port=3001`
  
## TODO:
  * Больше сервисов
  * ~~Остановка атаки~~
  * Поддержка Proxy
  * Лог отправки сообщений
  * ~~Поддержка нескольких атак одновременно~~
  * ~~Отправка SMS по доступным странам~~
  * ~~WEB версия~~
    * Остановка атаки
    * Список активных атак

