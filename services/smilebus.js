const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('375')){
		var formatted_number = number.toString().slice(3).replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, '+375($1)$2-$3-$4')
		request.post({
			url:'https://618.by/api/v2/auth/login',
				form:{
					phone: `${number}`,
					password: "nikak52N12",
					uid: "",
					name: "",
					surname: ""
				}
				},
			function(err,httpResponse,body){
			/**/
		})
	}
}
