const fs = require('fs');

// creating a read stream
const readStream = fs.createReadStream('./docs/demo3.txt', 'utf-8');
// creating a write stream
const writeStream = fs.createWriteStream('./docs/demo4.txt');

// listening to stream
// readStream.on('data', (chunk)=>{
//     console.log('--- NEW CHUNK ---')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk, (err)=>{
//         if (err){
//             console.log(err);
//         }
//     })
// })

// piping

// what piping doing is, pipe the data from read stream to write stream

readStream.pipe(writeStream);