const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://api.cian.ru/sms/v2/send-validation-code/',
        form: {
            phone:`+${number}`,
            type:`authenticateCode`
		}
}, 
    function(err, res, json) {
        /**/
    }
)
}
