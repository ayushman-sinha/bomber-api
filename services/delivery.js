const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://api.delivery-club.ru/api1.2/user/otp',
				form: {
                    phone:`${number}`,
                    newotp: 1
				}
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
