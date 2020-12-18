const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://cnt-tula-itv01.svc.iptv.rt.ru/api/v2/portal/send_sms_code',
				form: {
                    action: "register",
					phone:`${number}`
				}
		}, 
		function(err, res, json) {
				/**/
		})
	}
}
