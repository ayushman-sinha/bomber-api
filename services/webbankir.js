const request = require("request");
const tools = require("../index.js")

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url: `https://ng-api.webbankir.com/user/v2/create`,
			json: true,
			body:{
				email: tools.mailGen(),
				firstName: "Иван",
				lastName: "Иванов",
				middleName: "Алексеевич",
				mobilePhone: `${number}`,
				smsCode: ""
			}}, 
			function(err, res, json){
				/**/
		});
	}
}