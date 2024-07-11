**

## Introduction to Node JS & Node JS Modules 

<u>***node JS basics***</u>

**1. What is NodeJS ? What is it used for ?**
-  Node is a Javascript runtime that allows us to run JavaScript outside the browser therfore Javascript can be used to develope backend applications. 

**2. Explain the difference between Node js and traditional web server environments like Apache or Ngnix ?**
-   Apache/Nginx  are traditional web servers that use a multi-threaded, process-based architecture.  Node.js uses an event-driven, non-blocking I/O model. 

**3. What is V8 engine, how does node Js utilise it ?**
-    V8 is a open-source JavaSscript runtime in Google chrome browser. Node uses the same engine as it's runtime with some tweaks for running in backend.


**4. Describe the event-driven architecture of Node.js?**
-    The event-driven nature of Node.js allows it to handle I/O operations asynchronously and non-blocking. When an event occurs, such as an incoming HTTP request or a file I/O operation, Node.js triggers the associated event handler (listener) to process the event, while the main event loop continues to handle other events. 
- This event-driven, non-blocking I/O model is what gives Node.js its ability to handle a large number of concurrent connections efficiently. By not blocking on I/O operations, Node.js can continue processing other requests, making it well-suited for real-time, data-intensive applications like chat apps, online games, and IoT systems.


**5. What are some common uses of Node Js?**
-    Building APIs and Micro services
-  Due to its ability to handle many multiple requests asynchronously node js is best suited for single page applications.
-  CLI applications: npm provides many tools for building CLI applications

**6. How does Node.js handle asynchronous operations?**
 - node JS makes use of callbacks and promises to handle asynchronous operations. 
 
 **7.What is the purpose of the package.json file in a Node.js project?**
 ### Dependency Management

It lists all runtime and development dependencies, allowing easy installation and management.

### Version Control

It includes metadata like the project name, version, description, author, and license.

### Script Execution

It defines custom scripts for automating common tasks like testing, starting the server, building, and deploying.

### Entry Point

It specifies the main module that will be returned when the project is imported.The `package.json` file streamlines project management, collaboration, and building robust Node.js applications.

Share . Rewrite . Relate
 **8. Explain the role of the Node Package Manager (NPM).?**
 - NPM commonly known as node package manager is considered a package manager for third party modules for node. 

 **9.What is the node_modules folder and why is it important?**
 - The `node_modules` folder is a directory in a Node.js project that contains all installed dependencies. It serves several important purposes:

1.  **Dependency Management**: Installed packages are downloaded and extracted into `node_modules`, allowing Node.js to locate and load required modules.
2.  **Avoiding Version Conflicts**: Dependencies are kept isolated in their own `node_modules` folders, preventing version conflicts between projects.
3.  **Deployment**: The `node_modules` folder is typically excluded from deployment packages, with dependencies specified in `package.json` instead.
4.  **Collaboration**: Excluding `node_modules` from version control reduces repository size and simplifies collaboration, as developers can install dependencies using `npm install`.

 **10. How can you check the version of Node.js and NPM installed on your system ?**
 - for that we can use a command in the terminal.
 `npm -v` OR `npm -version`
 `node -v` OR `node -version`
 
  **11. How does Node.js handle concurrency and what are the benefits of this
approach?**
 - Concurrency in Node.js refers to the ability to handle multiple tasks or requests simultaneously. Node.js achieves concurrency through its event-driven, non-blocking I/O model:

-   **Event-Driven**: Node.js uses an event-driven architecture, where events notify the application when an I/O operation completes, allowing other operations to continue without blocking.
-   **Non-Blocking I/O**: When an I/O operation is initiated, Node.js registers a callback function and continues to execute other operations while waiting for the I/O operation to complete. This allows Node.js to handle multiple requests concurrently.
-   **Event Loop**: The event loop is the core of Node.js concurrency. It continuously checks the event queue for new events, executes their associated callbacks, and keeps the application running. The event loop never blocks and is always ready to handle new events.
 
   **12. How does Node.js handle file I/O? Provide an example of reading a file
asynchronously?**
 - Node.js handles file I/O operations asynchronously using the built-in `fs` (file system) module.
 eg:
` const fs = require('fs'); fs.readFile('example.txt', 'utf8', (err, data) => { if `(err) { 
 `console.error('Error reading file:', err);
  return; `
 ` } `
`console.log('File contents:', data); `
`});`
`console.log('This will be logged before the file contents');`

  **13. What are streams in Node.js and how are they useful?**
 -  Streams are a way handle large data in node js which is hard to handle at once instead streams process it chunk by chunk. It gives memory efficiency and time efficiency to the program.

## Node.js Modules

   **1. What are modules in Node.js and why are they important ***
 - Modules in node js are code blocks which contains related functions and methods in it. They provide developers with reusability , scalability, code redability and maintainability.
 - Node has 3 types of modules. Core modules are modules that built in to node already, Local modules are created by the developer himself to refactor code and third party modules are modules which were created by others. 

**2. How do you create a module in Node.js? Provide a simple example**

- Before importing a module into our code we have to export the thing we're supposed to import. There are 2 types of exports 
		1. Names export
		2. Default export
Lets create person.js file
		
		const name = "Jesse";  
		const age = 40;  
		export {name, age};
	Here we have used Names export. now we can import it like this:
	
		import { name, age } from "./person.js";
	

		    const message = () => {  
		const name = "Jesse";  
		const age = 40;  
		return name + ' is ' + age + 'years old.';  
		};  
		  
		export  default message;
	This is Default export and a file can have only one. 
	

	    import message from "./message.js";
	This is how you can create and use modules in JS
    

**3. Explain the difference between require and import statements in Node.js.**

- require() is a part of commonJS module system meanwhile import is introduced via ES6.
- require() loads files synchronously but import loads modules mostly statically at compile-time, though dynamic imports can be asynchronous.
- since require import whole module it is less memory efficient whereas in when using import we can import selective objects.
- require() access exported components via module.exports , import access them via export statement. 

**4.What is the module.exports object and how is it used?**
- module.exports object is a special object in Node.js that allows you to expose functionality from a module to other modules that require it.
- `module.exports.add = function(a, b) { return a + b; }; `

**5. Describe how you can use the exports shorthand to export module contents..**
- Exports object is a shorthand methods to export modules to other modules in node JS.
- Instead of assigning the entire export to module.exports, you can attach individual values to the `exports object:

			- `exports.add = function(a, b) 
		{ 
					return a +b; 
		};
		 exports.subtract = function(a, b) 
		 {
					  return a - b;
		   };`

**6.What is the CommonJS module system?**
-  CommonJS module system is a set of standards used to implement modules in JavaScript, primarily for server-side development in Node.js.

**7.How can you import a module installed via NPM in your Node.js application?**

- we can simple use require () to import the package installed from npm.

	    npm install moment
	    const moment = require('moment');
-  **Package.json**: The `package.json` file is automatically updated to include the installed module.
-   **Module Path**: The `require()` function looks for the module in the `node_modules` directory by default. Therefore no need for mentioning the exact path.


**8.Explain how the path module works in Node.js. Provide an example of using it.**

    const path =  require('path');
	// Get the directory name  
	const dirName = path.dirname(resolvedPath); 
	console.log(dirName);  // Output: "/absolute/path/to/folder1/folder2"

**9. How do you handle circular dependencies in Node.js modules?**
	//////////////////////////// Ignored /////////////////////////////////////
**10. What is a built-in module in Node.js? Name a few and explain their purposes.**

- Built in modules in are part of Node JS core which come along with it when you install node. No additional installation required to use them. 
- Some useful built-in modules are 	
	1. fs (file system) - provides an API for interacting with the file system
	2. http - `http` module provides an HTTP server and client functionality, allowing you to create and manage HTTP servers and make HTTP requests.
	3. path - The `path` module provides utilities for working with file and directory paths in a platform-independent way.
	4. os - `os` module provides information about the operating system
	
**11.What is the difference between relative and absolute module paths in Node.js?**
-   Relative paths are paths that are relative to the current module's location.
-   Absolute paths are fully qualified paths that start from the file system root. eg: in Linux paths starts with home/ and in Windows C:\

**12. What is a module wrapper function in Node.js?**

-   In Node.js, each module is wrapped in a function wrapper by the Node.js runtime. They serve few important features.
 1.  **Scope Isolation**: The wrapper function creates a private scope for the module, preventing variables and functions from polluting the global namespace and interfering with other modules.
 2.   **Module Exports**: The wrapper function provides the `module.exports` object, which allows the module to expose its public API to other modules that `require()` it.
 3. **Additional Variables**: The wrapper function provides some additional variables that can be used within the module, such as `__filename` and `__dirname`, which provide information about the current module's file path and directory.

**13.Describe the buffer module and its use in Node.js.**
- The `buffer` module in Node.js provides a way to handle binary data. It is used to represent and manipulate raw memory data in a way that is more similar to how it is stored in computer memory.

## Starting an HTTP Server in Node.js

**1. How do you create a simple HTTP server in Node.js? Provide a code example.**

    const http = require('http');
     // Create an HTTP server 
    const server = http.createServer((req, res) => { 
    // Handle incoming requests 
    console.log(`Received request: ${req.method} ${req.url}`); 
    // Set the response status code and 
    headers res.statusCode = 200; 	
    res.setHeader('Content-Type', 'text/plain');
     // Send the response 
     res.end('Hello, World!\n'); }); 
     // Start the server and listen on a specific port 
     const port = 3000; 
     server.listen(port, () => { console.log(`Server running at http://localhost:${port}/`);
      });
**2. Explain the purpose of the http module in Node.js.**
- The `http` module in Node.js is a core module that provides an HTTP server and client functionality. It is one of the most important and widely used modules in Node.js applications. The main purpose of the `http` module is to allow you to create and manage HTTP servers and clients within your Node.js application.

**3. What method do you use to start the HTTP server and make it listen on a specific
port?**
	
To create the server 
	
    const server = http.createServer((req, res){}
 
 To listen to the server
 

    server.listen(port, ()=>{});

**4. How can you send a response to the client in an HTTP server created with Node.js?**

Inside the server I can specify these to send the response to the client. setting the status code if success, setting header , response content and the end of response.

     res.statusCode =  200;
     res.setHeader('Content-Type',  'text/plain'); 			      res.write('Hello, '); 
     res.write('World!\n'); 
     res.end();
     
**5. Explain the request and response objects in the context of an HTTP server.**

- In terms of HTTP module in Node Js the request and response objects are the main two entities we deal with when handling an incoming request and response we send back. 
1. The `request` object represents the incoming HTTP request. It contains  
- HTTP method
- URL 
- Header
- Cookies
- Body
- Connection information
2.  The `response` object represents the HTTP response that your server will send back to the client. It contains
- Status code
- Response headers
- Response content
- End of response.

**6. How do you handle different HTTP methods (GET, POST, etc.) in a Node.js HTTP server?**
/////////////////////////////
**7. What is middleware in the context of a Node.js HTTP server?**
/////////////////////////
**8 .How can you serve static files using an HTTP server in Node.js?**
- To do so you can make use of fs module in NodeJs 

		const  fs  =  require('fs');

		const  http  =  require("http");

		  

		// creating the server

		const  server  =  http.createServer((req, res) => {

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

**9 .Explain how to handle errors in an HTTP server created with Node.js.**

///////////////////////

**10 .How can you implement routing in a Node.js HTTP server without using external libraries?**
//////////////////////////