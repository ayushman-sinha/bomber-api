const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.get({
			url: `https://www.oyorooms.com/api/pwa/generateotp?locale=en`,
			json: true,
			body:{
				"phone": Number(number.toString().slice(1)),
				"country_code": "+7",
				"nod": 4
			}}, 
			function(err, res, json){
				/**/
		});
	}
}