//USED IN CREATING SERVERS
const http=require('http')

//ADD REQ AND RES MIDDLEWARE
const server=http.createServer((req,res)=>{
    //REQURST(EVENT) FIRES WHEN YOU OPEN UP LOCALHOST
    //console.log(req)
    if(req.url==='/'){
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>welcome to homepage</h1>");  
        res.end();
    }
    if(req.url==='/user'){
        res.write("<h1>welcome /user</h1>")
        res.end();
    }
});

//PORT THAT SHOULD RUN
server.listen(3000, ()=>{
    console.log("Server is running at: 3000")
});