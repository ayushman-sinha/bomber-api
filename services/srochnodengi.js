const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://mapi-order.srochnodengi.ru/api/v1/auth/send-sms/',
				form: {
					phone:`+${number}`
				}
		}, 
		function(err, res, json) {
				/**/
		})
	}
}
