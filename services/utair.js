const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://b.utair.ru/api/v1/login/',
				form: {
					"login":`${number}`,
					"confirmation_type": "call_code"
				}
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
