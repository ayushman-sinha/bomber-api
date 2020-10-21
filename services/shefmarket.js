const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://cm2api.chefmarket.ru/api/v1/clients/request-pin',
				form: {
					phone:`${number}`
				},
			json: true
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
