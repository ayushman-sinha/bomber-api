const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url: `https://eda.yandex/api/v1/user/request_authentication_code`, json: true,
			body: {
				phone_number:`+${number}`
			}}, 
		function(err, res, json) {
				/**/
		});
	}
}
