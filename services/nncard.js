const request = require("request");
const { charsGen } = require("../index.js")

module.exports.run = function(number){
	if(number.toString()){
		request.post({
			url:'https://nn-card.ru/api/1.0/register',
				form: {
					phone:`${number}`,
					password: charsGen()
				}
		}, 
			function(err, res, json) {
				/**/
		})
	}
}
