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
  * Введите `npm start` или `node web`
   > Изначально запускается на `3000` порту, используйте флаг `--port` чтобы запустить на желаемом порту. Например: `node web.js --port=3001`

**Node.js API**

| Метод | Описание |
|---|---|
| attack(number,loop) | Иницилизация атаки. Принимает два параментра, number - номер телефона; loop - количество повторов |
| stop(number) | Остановка атаки. number - номер телефона |
| list() | Не принимает параментров, возвращает список активных атак в JSON формате |

  **Пример использования**

  ```js
  const bomber = require("bomber-api");

  const init = bomber.attack(79865946624, 5);
  
  console.log(init) // { "success": true, "text": "Атака на номер +79865946624 успешно запущена" }
  ```

  ## TODO
  
   * Лог отправки сообщений
   * Список активных атак в WEB версии
   * ~~Остановка атак в WEB версии~~
