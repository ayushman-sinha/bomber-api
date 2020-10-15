const request = require("request");

module.exports.run = function(number){
request.post({
    url:'https://api.iconjob.co/api/auth/verification_code',
        form: {
            "phone": `${number}`
        }
}, 
    function(err, res, json) {
        /**/
    }
)
}
