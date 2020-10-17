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
const shefmarket = require("./shefmarket.js")
const sipnet = require("./sipnet.js")
const worki = require("./worki.js")
const ivi = require("./ivi.js")
const route = require("./route.js")
const atlasbus = require("./atlasbus.js")
const smilebus = require("./smilebus.js")
const cian = require("./cian.js")
const delitime = require("./delitime.js")
const twitch = require("./twitch.js")
const rutaxi = require("./rutaxi.js")
const atprime = require("./atprime.js")
const carsmile = require("./carsmile.js")
const vmeste = require("./vmeste.js")
const vsk = require("./vsk.js")
const ykt = require("./ykt.js")
const etm = require("./etm.js")

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
		worki.run(number)
		boosty.run(number)
		yandexeda.run(number)
		ivi.run(number)
		delitime.run(number)
		twitch.run(number)
    }
    if(number.toString().startsWith('7')){
        citilink.run(number) 
        nncard.run(number)
        modulbank.run(number)
        karusel.run(number)
        mtstv.run(number)
        shefmarket.run(number)
        sipnet.run(number)
		cian.run(number)
		rutaxi.run(number)
		atprime.run(number)
		carsmile.run(number)
		vmeste.run(number)
		vsk.run(number)
		ykt.run(number)
		etm.run(number)
    }
    if(number.toString().startsWith('375')){
        beltelecom.run(number)
		route.run(number)
		atlasbus.run(number)
		smilebus.run(number)
    }
}
