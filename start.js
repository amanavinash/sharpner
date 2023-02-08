const http = require('http');
const fs= require('fs');
const server = http.createServer((req, res)=>{
const url=req.url;
 const method=req.method;
 const body = [];
if(url==='/'){
  fs.readFile('message.text','utf8', (err, data) => {
    if(err){
      console.log(err);
    }
    console.log(data);
 })
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  req.write(`<body>${data}</body>`)
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="summit">send</button></form><body>');
  res.write('</html>');
return res.end();
} else if(url==='/message'&& method=='POST')
 {
req.on('data',(chunk)=>{
   console.log(chunk);
 body.push(chunk);
 });
 req.on('end',()=>{
 const parsedBody=Buffer.concat(body).toString();
 console.log(parsedBody);
 fs.writeFileSync('message.text',message);
}) ;
 res.statusCode=302;
 res.setHeader('Location','/');
 return res.end();
 }else
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1> Welcome to my Node Js project</h><body>');
res.write('</html>');

 res.end();
 });
// module.exports=requestHandler;
 server.listen(4000);




