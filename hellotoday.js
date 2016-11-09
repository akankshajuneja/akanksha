var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 8080);
var http = require('http');
var server = http.createServer( function(request, response) {
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var date = new Date();
response.write(date.getDay());
response.write("The day of the week is " + date.getDay() + ".");
response.writeHead( 200, {
'Content-Length': body.length,
'Content-Type': 'text/plain'
});
response.write(body);
response.end();
});
server.listen(port);