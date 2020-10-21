const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:`https://register.sipnet.ru/cgi-bin/exchange.dll/RegisterHelper?oper=9&callmode=1&phone=${number.toString().slice(1)}`,
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
