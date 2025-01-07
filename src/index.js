"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var PORT = parseInt(process.env.PING_LISTEN_PORT || '3000', 10);
var requestHandler = function (req, res) {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    }
    else {
        res.writeHead(404);
        res.end('');
    }
};
var server = http_1.default.createServer(requestHandler);
server.listen(PORT, function () {
    console.log("The application is listening on port ".concat(PORT, "!"));
});
