// credit:  https://github.com/tonypujals/express-demo/blob/master/lesson-03-B/app.js
// credit https://github.com/tonypujals/express-demo/tree/master/lesson-03-A
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-03-C/app.js
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-04/app.js


var express = require('express'),
	morgan = require ('morgan'),
	app = express(),
	port = process.env.PORT || 3000;

// Add logging
app.use(morgan('dev'));

// Simple route handler example
app.get('/',function(req,res,next) {
var data = '<h1>Homepage</h1>';
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(data);
});


// Ensure log only once listen is successful
var server = app.listen(port, function() {

console.log('server started on port %s', port);
});
