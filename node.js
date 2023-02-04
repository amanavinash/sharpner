 const http = require('http');
const server = http.createServer((req, res) => {

res.setHeader('Content-Type', 'text/plain');
res.write('avinash');

 res.end();
 });

 server.listen(4000);




