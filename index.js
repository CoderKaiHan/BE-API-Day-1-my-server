const http = require('http');

const myServer = http.createServer((req,res)=>{
    res.write('<h1 style="color:blue">Guess if this works!</h1>');
    res.end();
});

myServer.listen(3000,(req,res)=>{
    console.log('This does work.')
});