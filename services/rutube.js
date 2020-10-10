const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://pass.rutube.ru/api/accounts/phone/send-password/',
        form: {
            phone:`+${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
