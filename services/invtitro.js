const request = require("request");
const tools = require("../index.js")

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://lk.invitro.ru/sp/mobileApi/createUserByPassword',
				form: {
					password: tools.charsGen(),
                    application: "lkp",
                    login: `+${number}`
				}
			}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
