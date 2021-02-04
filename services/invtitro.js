const request = require("request");
const { charsGen } = require("../index.js")

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://lk.invitro.ru/sp/mobileApi/createUserByPassword',
				form: {
					password: charsGen(),
                    application: "lkp",
                    login: `+${number}`
				}
			}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
