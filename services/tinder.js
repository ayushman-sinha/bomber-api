const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://api.gotinder.com/v2/auth/sms/send?auth_type=sms&locale=ru',
        form: {
            phone_number:`${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
