const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://shop.vsk.ru/ajax/auth/postSms/',
			form:{
				phone:`${number}`
			}}, 
			function(err,httpResponse,body){
				/* ... */ 
		})
	}
}
