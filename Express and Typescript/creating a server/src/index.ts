import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();
/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;
/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

// express js makes it easy
// following is the code achieving same result with only nodeJs

// const http = require('http');
// const dotenv = require('dotenv');

// dotenv.config();

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('hello');
//     res.end('Node.js Server');
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

// server.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
