const request = require("request");

module.exports.run = function(number){
request.post({
	url: `https://cloud.mail.ru/api/v2/notify/applink`, json: true,
	body:{
		phone: `+${number}`,
		api: 2,
		"email": `email`,
		"x-email": `email`
	}}, 
		function(err, res, json){
			/**/
		})
}
