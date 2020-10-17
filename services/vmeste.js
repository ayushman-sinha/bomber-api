const request = require("request");

module.exports.run = function(number){
request.post({
	url: `https://private.vmeste.ru/authapi/api/phone/checkuserphone`, json: true,
	body:{
		phone:`${number}`
	}}, 
	function(err, res, json){
		/**/
	});
}
