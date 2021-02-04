const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:`https://ok.ru/dk?cmd=AnonymRegistrationEnterPhone&st.cmd=anonymRegistrationEnterPhone&st.r.phone=+${number}`,
		}, 
			function(err, res, json) {
				/**/
		});
	}
}
