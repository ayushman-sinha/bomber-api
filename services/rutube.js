const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://pass.rutube.ru/api/accounts/phone/send-password/',
			form:{
				phone:`+${number}`
			}}, 
			function(err,httpResponse,body){
				/* ... */ 
		})
	}
}
