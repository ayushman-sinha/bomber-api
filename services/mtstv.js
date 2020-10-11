const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://prod.tvh.mts.ru/tvh-public-api-gateway/public/rest/general/send-code?msisdn=${number}'
}, 
    function(err, res, json) {
        /**/
    }
)
}
