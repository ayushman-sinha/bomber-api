const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://my.modulbank.ru/api/v2/auth/phone',
        form: {
            phone:`${number.toString().slice(1)}`
        },
    json: true
}, 
    function(err, res, json) {
        /**/
    }
)
}
