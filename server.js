const http = require('http');

const server = http.createServer((requ, res) => {
 res.end('Bienvenidos al curso de seminario de sistemas 2022')


})

server.listen(3000);
console.log('server');