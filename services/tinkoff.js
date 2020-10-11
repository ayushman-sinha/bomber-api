const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://api.tinkoff.ru/v1/sign_up',
        form: {
            "phone": `+${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
