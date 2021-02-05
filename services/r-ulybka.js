const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://www.r-ulybka.ru/login/form_ajax.php',
				form: {
					json: `{"action":"auth","phone": "${number.toString().replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7($1)$2-$3-$4')}"}`
				}
			}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
