process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log("start");

var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

//app.listen((process.env. || 5000));
console.log("process.env.PORT: "+process.env.PORT);
app.listen(process.env.PORT || 5000, function(){
   var host = app.address().address;
   var port = app.address().port;
   console.log('Listening on http://%s:%s', host, port);
});

module.exports = app;
console.log("skoushlendra");
console.log(process.env.NODE_ENV + ' server running at http://mean-mvc.heroku.com:' + config.port);