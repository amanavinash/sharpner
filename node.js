const http = require('http');
const server = http.createServer((req, res) => {
const url=req.url;
if(url==='/home'){

  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="summit">send</button></form><body>');
  res.write('</html>');
return res.end();
}


res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1> Welcome to my Node Js project</h><body>');
res.write('</html>');

 res.end();
 });

 server.listen(4000);




