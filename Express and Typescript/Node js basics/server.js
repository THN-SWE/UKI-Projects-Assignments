const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  res.setHeader("Content-type", "text/html");

  let path = "./docs/";

  switch (req.url) {
    case "/":
      path += "sample.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
 
});

server.listen(3000, "localHost", () => {
  console.log("listening for request at port 3000");
});
