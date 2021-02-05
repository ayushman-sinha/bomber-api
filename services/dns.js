const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://www.dns-shop.ru/auth/auth/fast-authorization/',
			form:{
				"FastAuthorizationLoginLoadForm[login]": number,
                "FastAuthorizationLoginLoadForm[token]": ""
			}},
		function(err,httpResponse,body){
			/* камбет гей */
		});
	}
}
