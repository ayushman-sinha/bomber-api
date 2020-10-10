const icq = require("./icq.js")
const tinder = require("./tinder.js")
const beltelecom = require("./beltelecom.js")

module.exports.start = function(number){
    icq.run(number)
    tinder.run(number)
    beltelecom.run(number)
}
