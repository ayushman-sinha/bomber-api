const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://eda.yandex/api/v1/user/request_authentication_code',
        form: {
            phone_number:`${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
