const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://api.iconjob.co/api/auth/verification_code', json: true,
				body: {
					"phone": `${number}`
				}
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
