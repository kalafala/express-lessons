// credit:  https://github.com/tonypujals/express-demo/blob/master/lesson-03-B/app.js
// credit https://github.com/tonypujals/express-demo/tree/master/lesson-03-A

var express = require('express'),
	morgan = require ('morgan'),
	app = express(),
	port = process.env.PORT || 3000;

// Add logging
app.use(morgan('dev'));

app.use(function(req,res,next) {
if (req.url == '/test') {
var data = '<h1>test world</h1>';
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
}
next();
}
)

app.use(function(req,res,next) {
if (req.url == '/hello') {
var data = '<h1>hello world</h1>';
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
}
next();
}
);

app.listen(port);

console.log('server started on port %s', port);
