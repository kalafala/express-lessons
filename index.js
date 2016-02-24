var express = require('express'),
	morgan = require ('morgan'),
	app = express(),
	port = process.env.PORT || 3000;

// Add logging
app.use(morgan('dev'));

app.use(function(req,res) {
var data = '<h1>hello world</h1>';
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data);
})

app.listen(port);

console.log('server started on port %s', port);
