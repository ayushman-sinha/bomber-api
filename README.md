<h1 align="center">
  <br>
  <a href="https://github.com/shketov/bomber-api"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/collision-symbol_1f4a5.png"></a>
  <br>
  bomber-api
  <br>
</h1>

<h4 align="center">Удобное API для создания собственного SMS бомбера</h4>


## Установка
`npm install bomber-api`

`const bomber = require("bomber-api")`

## Как использовать?

Иницилизация атаки - `attack(number, loop)`
  * number - номер телефона
  * loop - число повторов цикла
Например: `bomber.attack(79999999999, 5)`

## TODO:
  * Больше сервисов
  * Остановка атаки
  * Поддержка Proxy
  * Лог отправки сообщений
  * Отправка SMS по доступным странам


