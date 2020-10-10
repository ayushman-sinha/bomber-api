const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://my.modulbank.ru/api/v2/auth/phone',
        form: {
            phone:`${number.slice(1)}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
