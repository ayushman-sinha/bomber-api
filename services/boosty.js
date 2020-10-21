const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://api.boosty.to/oauth/phone/authorize',
			form:{
				client_id: `+${number}`
			}}, 
		function(err,httpResponse,body){
				/**/
		});
	}
}
