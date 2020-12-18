const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://shop.rivegauche.ru/rg/v1/newRG/customers/current/contacts/send-code',
			form:{
                contact:`${number}`,
                configGroupCode: "default",
                contactMustBeUnique: true,
                contactUserMustExist: false,
                g_recaptcha_response: ""
			}}, 
			function(err,httpResponse,body){
				/* ... */ 
		})
	}
}
