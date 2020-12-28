const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url: `https://www.gloria-jeans.ru/phone-verification/send-code/registration`, json: true,
			body:{
				phoneNumber:`+${number}`
			}}, 
			function(err, res, json){
				/**/
		});
	}
}