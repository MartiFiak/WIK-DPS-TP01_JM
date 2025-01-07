import http from 'http';

const PORT = process.env.PING_LISTEN_PORT || 3000;

const requestHandler = (req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    } else {
        res.writeHead(404);
        res.end('');
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
});