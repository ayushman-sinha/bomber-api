const request = require("request");

module.exports.run = function(number){
if(number.toString().startsWith('7')){
	request.post({
		url:'https://api.tinkoff.ru/v1/sign_up', json: true,
			form: {
				"phone": `+${number}`
			}
	}, 
		function(err, res, json) {
			/**/
	})
}
}
