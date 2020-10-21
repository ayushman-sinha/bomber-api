const request = require("request");

module.exports.run = function(number){
	if(number.toString().startsWith('7')){
		request.post({
			url:'https://rutaxi.ru/ajax_keycode.html',
			form:{
				l:`${number.toString().slice(1)}`
			}},
			function(err,httpResponse,body){
				/**/
			})
		request.post({
			url:'https://rutaxi.ru/ajax_auth.html',
			form:{
				l:`${number.toString().slice(1)}`,
				p: "",
				callme: 1,
				rem: 1
			}}, 
			function(err,httpResponse,body){
				/**/
		})
	}
}
