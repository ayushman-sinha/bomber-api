const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://almazholding.ru/local/user1/sendcode.php',
				form: {
					PHONE: `${number}`
				}
			}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
