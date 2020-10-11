const icq = require("./icq.js")
const tinder = require("./tinder.js")
const beltelecom = require("./beltelecom.js")
const youla = require("./youla.js")
const yandexeda = require("./yandexeda.js")
const rutube = require("./rutube.js")
const citilink = require("./citilink.js")
const findclone = require("./findclone.js")
const karusel = require("./karusel.js")
const mailcloud = require("./mailcloud.js")
const ok = require("./ok.js")
const boosty = require("./boosty.js")
const nncard = require("./nncard.js")
const modulbank = require("./modulbank.js")
const mtstv = require("./mtstv.js")
const utair = require("./utair.js")
const tinkoff = require("./tinkoff.js")

module.exports.start = function(number){
    if(number.toString()){
        icq.run(number)
        tinder.run(number)
        youla.run(number)
        rutube.run(number) 
        findclone.run(number)
        mailcloud.run(number)
        ok.run(number)
        utair.run(number)
    }
    if(number.toString().startsWith('7')){
        citilink.run(number) 
        boosty.run(number)
        nncard.run(number)
        modulbank.run(number)
        karusel.run(number)
        yandexeda.run(number)
        mtstv.run(number)
    }
    if(number.toString().startsWith('375')){
        beltelecom.run(number)
    }
}
