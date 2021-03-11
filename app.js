const http = require('http');

const moduleConfig = require('./libs');

http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello World!</h1>');
}).listen(moduleConfig.port)
