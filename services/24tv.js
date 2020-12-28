const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url: `https://24htv.platform24.tv/v2/otps`, json: true,
			body:{
				phone:`${number}`
			}}, 
			function(err, res, json){
				/**/
		});
	}
}