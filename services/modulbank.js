const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://my.modulbank.ru/api/v2/auth/phone', json: true,
				body: {
					phone:`${number.toString().slice(1)}`
				}
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
