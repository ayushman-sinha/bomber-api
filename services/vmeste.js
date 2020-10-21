const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url: `https://private.vmeste.ru/authapi/api/phone/checkuserphone`, json: true,
			body:{
				phone:`${number}`
			}}, 
			function(err, res, json){
				/**/
		});
	}
}