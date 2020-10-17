const request = require("request");

module.exports.run = function(number){
request.post({
	url: `https://id.ykt.ru/api/v3/register/sendCode?phone=${number}`, json: true}, 
	function(err, res, json){
		/**/
	});
}
