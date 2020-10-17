const request = require("request");

module.exports.run = function(number){
request.post({
	url:'https://api-prime.anytime.global/api/v2/auth/sendVerificationCode',
	form: {
		phone:`${number}`
	}}, 
	function(err,httpResponse,body){
		/* ... */ 
	})
}
