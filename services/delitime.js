const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://api.delitime.ru/api/v2/signup',
			form:{
				"SignupForm[username]":`${number}`,
				"SignupForm[device_type]": 3}}, 
			function(err,httpResponse,body){
				/* ... */ 
		})
	}
}