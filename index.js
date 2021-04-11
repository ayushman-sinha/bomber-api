const express = require('express');
const arguments = require('yargs').argv;
const open = require('open');
const service = require("./core.js");
const current_attacks = [];
const list_attacks = [];

const app = express();

if(arguments.port){
    app.listen(arguments.port, function (){
        console.log(`[INFO] Server started on ${arguments.port}`)
        open(`http://localhost:${arguments.port}/`);
    });
}else{
    app.listen(3000, function (){
        console.log(`[INFO] Server started on 3000`)
        open(`http://localhost:3000/`);
    });
}

app.get('/', async (req, res) => {
    app.use(express.static(__dirname + "/html/"));
    res.sendFile(__dirname + "/html/index.html"); 
});

app.get('/attack', async (req, res) => {
    if(!Number(req.query.number) || req.query.number.toString().length < 11){
        return res.json({
            "success": false,
            "text": `Номер телефона не указан либо не является корректным`
        });  
    }
    if(!Number(req.query.loops) || !req.query.loops){
        return res.json({
            "success": false,
            "text": `Параментр loop отсутсвует либо не является корректным`
        }); 
    }else{
        count = 0;
        list_attacks.push({
            number: Number(req.query.number),
            loop: Number(req.query.loops),
            startedAt: Date.now()
        });
        service.start(req.query.number);
        current_attacks[req.query.number] = setInterval(async function(){
            service.start(req.query.number);
                    count++;
                        if(count == req.query.loops - 1){
                            clearInterval(current_attacks[req.query.number]);
                            for(let key in list_attacks){
                                if(list_attacks[key].number == req.query.number){
                                    list_attacks.splice(key, 1);
                                }
                            }
                        }
            }, 30000);
        return res.status(200).json({
            "success": true,
            "text": `Атака на номер +${req.query.number} успешно запущена`
        });
    }
});

app.get('/stop', async (req, res) => {
    if(req.query.number){
        if(current_attacks[req.query.number]){
            clearInterval(current_attacks[req.query.number]);
            for(let key in list_attacks){
                if(list_attacks[key].number == req.query.number){
                    list_attacks.splice(key, 1);
                }
            }
        res.status(200).json({
            success: true,
            text: `Атака на номер +${req.query.number} успешно прекращена`
        });
        }else{
            return res.json({
                success: false,
                text: `Нет активных атак по номеру +${req.query.number}`
            }); 
        }
    }else{
        return res.json({
            success: false,
            text: `Параментр number не указал либо не является корректным`
        }); 
    }
});

app.get('/list', async (req, res) => {
    if(list_attacks.length === 0){
        result = {
            success: false,
            text: `Список активных атак пуст`
        }
        return res.status(200).json(result);
    }else{
        result = {
            success: true,
            result: list_attacks
        }
        return res.status(400).json(result);
    }
});


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

