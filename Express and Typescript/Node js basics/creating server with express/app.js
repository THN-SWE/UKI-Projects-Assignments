
const express = require('express');

const app = express();

app.listen(4000, ()=>{
     
});

// routes

app.get("/", (req, res)=> {
    
    // express will automatically set the content type and status code for us
    res.sendFile("./views/sample.html", {root:__dirname});
})

app.get("/about", (req, res)=> {
    
    // express will automatically set the content type and status code for us
    res.sendFile("./views/about-us.html", {root:__dirname});
})

// redirects

app.get("/about-us", (req, res) => {
    res.redirect("/about");
})

// 404 page
// use methods fires for every request cheking for url match in get fucntions above,if not it executes
// the it is crucial where we put this code
// and we have to mention the status code this cuz express doesn't know this html for code 404;
// res.status() returns the res object itself
app.use((req, res)=>{
    res.status(404).sendFile("./views/404.html", {root:__dirname});
});