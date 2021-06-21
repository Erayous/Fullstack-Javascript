const random = require('./promise-module');
const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/api/securerandoms') {
        random.makeSecureRandomVariable([8, 16, 24, 32, 40, 48]).then(value => {
            res.setHeader('Content-Type', 'application/json');
            res.write(value);
            return res.end()
        });
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo </h2>
                            <p>Exposes this endpoint <code>/api/securerandoms</code></p>
                            `);
        return res.end();
    }
});
server.listen(3000);

