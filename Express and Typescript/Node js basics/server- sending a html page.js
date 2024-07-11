const fs = require('fs');
const http = require("http");

// creating the server
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  fs.readFile('./docs/sample.html', (err, data) =>{
    if (err){
        console.log(err);
        res.end()
    }
    res.write(data);
    res.end();
  })
});

// listen for the requests for server on port 3000
server.listen(3000, "localHost", () => {
  console.log("listening for request at port 3000");
});
