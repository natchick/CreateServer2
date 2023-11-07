const http = require('node:http')

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '') {
        if (request.method === 'GET') {
            response.end("Hello Galvanize");
        }
    } else if (url[1] === 'authors') {
        response.end("Natasha Chick");
    }
    response.statusCode = 404;
    response.end();
});

const HOST = 'localhost';
const PORT = 3000;

//below we are invoking the listen() method
//arguments: a port, a host, and a callbackfunction
server.listen(3000, "localhost", () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
