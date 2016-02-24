// credit https://github.com/tonypujals/express-demo/tree/master/lesson-03-A

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.use(function(req,res) {
var data = '<h1>hello world</h1>';
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
})

app.listen(port);

console.log('server started on port %s', port);
