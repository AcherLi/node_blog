const http = require('http');
const serverHandle = require('../app.js');

const port = 8080;
const server = http.createServer(serverHandle);
server.listen(port);
