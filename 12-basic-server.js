const http = require('http');

const server = http.createServer((req,res)=>{// first parameter is used for incoming request and the second represents the response (what we are sending back
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
    res.end('Here is our short history');
}

res.end(`<h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/about"> back home</a>`)
})

server.listen(5000)