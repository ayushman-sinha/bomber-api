const request = require("request");
const tools = require("../index.js")

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://restapi.profee.com/api/v1/wallets',
				form: {
					email: tools.mailGen(),
					password:`kamBet1k!!`,
					phone: `${number}`,
					source: {
                        platform: "SITE",
                        scenario:"REGISTRATION",
                        referer:"www"
                    }
                }
				}, 
			function(err, res, json) {
				/**/
			})
	}
}
