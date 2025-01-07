"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = parseInt(process.env.PING_LISTEN_PORT || '3000', 10);
const requestHandler = (req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    }
    else {
        res.writeHead(404);
        res.end('');
    }
};
const server = http_1.default.createServer(requestHandler);
server.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
});
