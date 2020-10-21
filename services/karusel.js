const request = require("request");

module.exports.run = function(number){
if(number.toString().startsWith('7')){
	request.post({
		url:'https://app.karusel.ru/api/v1/phone/',
			form: {
				phone:`${number}`
			}
	}, 
		function(err, res, json) {
			/**/
	})
}
}
