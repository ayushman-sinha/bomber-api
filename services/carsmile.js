const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url: `https://api.carsmile.com`, json: true,
			body:{
				operationName:`enterPhone`,
				variables:{phone: `${number}`},
				query: "mutation enterPhone($phone: String!) {\n  enterPhone(phone: $phone)\n}\n"
			}}, 
		function(err, res, json){
				/**/
		});
	}
}
