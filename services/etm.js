const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://api-prime.anytime.global/api/v2/auth/sendVerificationCode',
			form: {
				phone:`${number}`
			}}, 
			function(err,httpResponse,body){
				/* ... */ 
		})
	}
}
