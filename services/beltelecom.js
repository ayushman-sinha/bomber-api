const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://myapi.beltelecom.by/api/v1/auth/check-phone?lang=ru',
        form: {
            phone:`${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
