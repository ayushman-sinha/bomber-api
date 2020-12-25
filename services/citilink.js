const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:`https://www.citilink.ru/registration/confirm/phone/+${number}/`
		}, 
		function(err, res, json) {
				/**/
		})
	}
}
