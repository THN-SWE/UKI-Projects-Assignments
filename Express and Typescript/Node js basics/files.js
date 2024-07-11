const fs = require("fs");
// console.log(fs);

// read

// fs.readFile("./docs/demo.txt", (err, txt) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(txt); // you get the buffer
//   console.log(txt.toString());
// });

// write

// will overwrite the file.
// fs.writeFile("./docs/demo.txt", "wrote using writeFile", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// writing to a file that doesn't exist will create new file in that name and write to it.
// fs.writeFile("./docs/demo1.txt", "wrote using writeFile", (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });

// directories

// checks if dir already exists 
// if (fs.existsSync("./New directory")) {
//   console.log("Directory already exists.");
// } else {
//   fs.mkdir("./New directory", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("new directory created");
//   });
// }

// deleting
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file has been deleted')
//     })
// }