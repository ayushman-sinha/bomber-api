const request = require("request");

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url: `https://gettruckapp.azurewebsites.net/api/User/RequestConfirmationCodePhone?phone=${number.toString().slice(1)}&isCustomer=true`,
			headers:{
					"ZUMO-API-VERSION": "2.0.0"
			}}, 
		function(err, res, json){
			/* кто прочитал тот сдохнет */	
		});
	}
}