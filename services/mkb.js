const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://my.mkb-am.ru/api/auth/password/reset',
				form: {
					login:`${number}`
				}
		}, 
		function(err, res, json) {
				/**/
		})
	}
}
