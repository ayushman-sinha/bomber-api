var normalizedPath = require("path").join(__dirname, "services");

var services = {};
require("fs").readdirSync(normalizedPath).forEach(function(file) {
	var name = file.replace('.js', '');
	services[name] =  require("./services/" + file);	 
});


module.exports.start = function(number){
	for(let key in services){
		services[key].run(number)
	}
}