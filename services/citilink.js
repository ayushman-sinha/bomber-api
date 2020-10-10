const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://www.citilink.ru/registration/confirm/phone/+${number}/'
}, 
    function(err, res, json) {
        /**/
    }
)
}
