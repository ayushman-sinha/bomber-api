const express = require('express');
const arguments = require('yargs').argv;
const open = require('open');
const app = express();
const bomber = require("./index.js");

if(arguments.port){
    let port = arguments.port
    app.listen(port, function (){
        console.log(`[INFO] Server started on ${port}`)
        open(`http://localhost:${port}/`);
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
    if(req.query.number && req.query.loops){
        let init = bomber.attack(req.query.number, req.query.loops)
        return res.status(200).json(init);
    }else{
        return res.status(400).json({
            success: false,
            text: `Неверный запрос`
        }); 
    }
});

app.get('/list', async (req, res) => {
    return res.status(200).json(bomber.list());
});