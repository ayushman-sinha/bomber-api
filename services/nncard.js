const request = require("request");
const tools = require("bomber-api")

module.exports.run = function(number){
request.post({
    url:'https://nn-card.ru/api/1.0/register',
        form: {
            phone:`${number}`,
            password: tools.passGen()
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
