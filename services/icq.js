const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://www.icq.com/smsreg/requestPhoneValidation.php',
				form: {
					msisdn:`${number}`,
					locale:`en`,
					countryCode:`ru`,
					version:`1`,
					k:`ic1rtwz1s1Hj1O0r`,
					r:`46763`}
				}, 
			function(err, res, json) {
				/**/
			})
	}
}
