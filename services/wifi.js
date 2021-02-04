const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://cabinet.wi-fi.ru/api/auth/by-sms',
				form: {
                    msisdn:`${number}`,
                    "g-recaptcha-response": ""
				}
		}, 
		function(err, res, json) {
				/**/
		})
	}
}
