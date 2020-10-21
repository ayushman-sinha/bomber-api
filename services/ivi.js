const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://api.ivi.ru/mobileapi/user/register/phone/v6',
				form: {
					phone:`${number}`, app_version: 870
				}
			}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
