const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://my.modulbank.ru/api/v2/auth/phone', json: true,
        form: {
            phone:`${number.toString().slice(1)}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
