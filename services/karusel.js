const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://app.karusel.ru/api/v1/phone/',
        form: {
            phone:`${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
