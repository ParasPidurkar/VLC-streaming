var https = require('https');
var fs = require('fs');
//const key = fs.readFileSync('./certificates/server.decrypted.key');
//const cert = fs.readFileSync('./certificates/server.crt');
const options = {
    key: fs.readFileSync('./certificates/server.decrypted.key'),
    cert: fs.readFileSync('./certificates/server.crt')
  };
  
const PORT=8888; 

fs.readFile('./test.html', function (err, html) {

    if (err) throw err;    

    https.createServer(options,function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"}); 
        console.log("Server running on port 8888");
        console.log("Enter the link 'http://10.221.40.228:8888' to access the stream");
        response.write(html);  
        response.end();  
    }).listen(PORT);
});