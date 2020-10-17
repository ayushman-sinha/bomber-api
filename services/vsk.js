const request = require("request");

module.exports.run = function(number){
request.post({
	url:'https://shop.vsk.ru/ajax/auth/postSms/',
	form:{
		phone:`${number}`
	}}, 
	function(err,httpResponse,body){
		/* ... */ 
	})
}
