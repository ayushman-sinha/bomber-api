const request = require("request");

module.exports.run = function(number){
request.get({
    url:'https://findclone.ru/register?phone=+${number}'
}, 
    function(err, res, json) {
        /**/
    }
)
}
