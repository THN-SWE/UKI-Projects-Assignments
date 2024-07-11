// gloabal object -- is like window object in browser environment 


// console.log(global);

global.setTimeout(() => {
   console.log("inside global"); 
}, 2000);

// we don't have to use global.
setTimeout(() => {
    console.log("inside global but we don't have to say it"); 
 }, 2500);

console.log(__dirname); // returns current directory name 
console.log(__filename); // returns current directory name along with file name

