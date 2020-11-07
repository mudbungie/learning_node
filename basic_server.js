var http = require("http");
var url = require("url");
var dt = require('./dummy_module');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    //response.write(dt.now())
    console.log(request.url)
    var q = url.parse(request.url, true)
    console.log(q)
    //response.write(JSON.stringify(q))
    response.end('\n');
}).listen(8081);

console.log('Server running on localhost:8080');