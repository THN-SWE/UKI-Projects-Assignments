"use strict";
// enums - An enumeration, is a type that represents 
// named constants and is often referred to as an enum.
// const small = 1;
// const medium = 2;
// const large = 3;
// instead we can use enums built in to ts
// using PascalCase
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
; // we can explicitly set the values
let mySize = size.Medium;
console.log(mySize);
