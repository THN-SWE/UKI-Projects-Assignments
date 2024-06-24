// enums - An enumeration, is a type that represents 
// named constants and is often referred to as an enum.

// const small = 1;
// const medium = 2;
// const large = 3;

// instead we can use enums built in to ts

// using PascalCase
enum size {Small = 1, Medium, Large}; // we can explicitly set the values

let mySize:size = size.Medium; 
console.log(mySize);
