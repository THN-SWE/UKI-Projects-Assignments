// let's say you have changed the url for a specific page of your website. I'll work all fine
// problem is the links in the internet with old urls to that page won't work anymore
// this is where the redirecting comes into play. it redirect you to new url if you try access through the old one.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");

  res.setHeader("Content-type", "text/html");

  let path = "./docs/";

  // say out about page get's renamed as about-us

  switch (req.url) {
    case "/":
      path += "sample.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 301;                         // status code for redirect
      res.setHeader("Location", "./about-us");      // it will redirect to the ./about-us 
      break;
    default:
      path += "404.html";
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
