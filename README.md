<h1 align="center">
  <a href="https://www.npmjs.com/package/bomber-api"><img src="https://img.shields.io/npm/dt/bomber-api" alt="NPM downloads"></a>
  <br>
  <a href="https://github.com/shketov/bomber-api"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/collision-symbol_1f4a5.png"></a>
  <br>
  bomber-api
  <br>
</h1>

<h2 align="center">SMS бомбер в браузере + API</h2>


## Как использовать?

**WEB версия**
> Для использования SMS бомбера требуется установить [NodeJS](https://nodejs.org/en/)
  * Скачайте [последнюю](https://github.com/shketov/bomber-api/releases/) версию
  * Распакуйте архив
  * Установите зависимости - `npm install`
  * Введите `npm start` или `node index`
   > Изначально запускается на `3000` порту, используйте флаг `--port` чтобы запустить на желаемом порту. Например: `node index.js --port=3001`

**Важное сообщение**
> Начиная с версии 2.0.0 мы прекращаем поддержку Node.JS API. Пользователи используют лишь сайт для организации атак а не API, как задумывалось при релизе, но Вы сможете организовывать атаки в своих приложениях, используя HTTP запросы 

| Метод | Описание |
|---|---|
| attack | Иницилизация атаки. Принимает два параментра, number - номер телефона; loop - количество повторов |
| stop | Остановка атаки. number - номер телефона |
| list | Не принимает параментров, возвращает список активных атак в JSON формате |

```js
// Отправка HTTP запроса с помощью request (https://www.npmjs.com/package/request)
const request = require("request");

request.get({url:'http://localhost:3000/attack', 
body: {"number": 79864765066, "loops": 1}},
function(err, res, json){
	/* your code */
});
```

  ## TODO
  
   * Лог отправки сообщений
   * Список активных атак в WEB версии
   * ~~Остановка атак в WEB версии~~
