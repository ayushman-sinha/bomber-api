const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://api.cian.ru/sms/v2/send-validation-code/', json:true,
				form: {
					phone:`+${number}`,
					type:`authenticateCode`
				}
		}, 
		function(err, res, json) {
				/**/
			}
		)
	}
}
