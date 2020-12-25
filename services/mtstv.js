const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:`https://prod.tvh.mts.ru/tvh-public-api-gateway/public/rest/general/send-code?msisdn=${number}`
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
