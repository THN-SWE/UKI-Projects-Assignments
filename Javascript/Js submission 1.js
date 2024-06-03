//NOTE : test the code by block by block
// same variable names used.

//1//

// var strings = ["hello", "world"]; // convert to uppercase
// var stringsUpper = [];

//method 1
// stringsUpper = strings.map((word) => {
//   return word.toUpperCase();
// });
// console.log(stringsUpper);

//method 2
// for (let i = 0; i < strings.length; i++) {
//   stringsUpper[i] = strings[i].toUpperCase();
// }
// console.log(stringsUpper);

//method 3
// for (let word in strings){
//   stringsUpper.push(strings[word].toUpperCase());
// }
// console.log(stringsUpper);

//method 4
/*      The issue here is that forEach() does not return the modified array. 
        It simply iterates over the array and 
        applies the provided function to each element. 
*/
// strings.forEach((word) => {
//   console.log(word.toUpperCase());
// });

//2//

//////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const numbersEven= []
// const numbersEven = numbers.filter((num) => {
//   if (num % 2 == 0) {
//     return num;
//   }
// });

// console.log(numbersEven);
/////////////////

//3//

// const strings = ["hello", " ", "good", "   ", "world", "", "javascript"];

// mehtod 1
// function removeMtStrings() {
//   let x = strings.join(" "); // making array of strings into single string
//   let result = ""; // temp variable
//   // console.log(x);
//   for (i = 0; i < x.length; i++) {
//     if (x[i] !== " ") {
//       result += x[i]; // adding only letters to result
//       if (x[i + 1] == " ") {
//         result += ","; // adding coma at the end of each word.
//       }
//     }
//   }
//   console.log(result.split(",")); // output in array format
// }
// removeMtStrings();

//method 2
// var strings_no_mt = [];
// strings_no_mt = strings.filter((string) => {
//   return string.trim() !== "";
//   // method trim removes all white space before & after the string
//   // if string a emty string trimming it will always return ""
//   // that is how we eleminate mt strings in the array
// })
// console.log(strings);
// console.log(strings_no_mt);

//4//

// //using reduce to making an array of string into single string each seperated by space.
// const words = ["hello", "world", "javascript"];
// var words_joined = "";

// // // how reduce works
// // const numbers = [1, 2, 3, 4, 5];
// // const sum = numbers.reduce((x,y) => x + y ); // x - curr_total, y - next number.
// // x and y are accumulator and currValue
// // console.log(sum); // Output: 15

// words_joined =  words.reduce((x, y) => {
//   return x + " " + y;
// });
// console.log(words_joined);

//5//

// // ouput sum of squared numbers.
// const array = [4, "hello", 3, true, "Uki",5];
// let sum = 0;

// for (let elem of array){
//   if (typeof(elem) === "number"){
//     sum += elem * elem;
//   }
// }
// console.log(sum);

//6//

// // reversing an array
// const array = [1,"2",3,"4",5,"6"];

// function reverseArray(arr){
//   return arr.reverse(); // using in-built array method reverse()
// }
// const reversed_array = reverseArray(array);
// console.log(reversed_array);

//7//

// // creating the person obj
// const person = {};

// function CreatePerson(name, age) {
//   // a constructor function
//   this.name = name;
//   this.age = age;
//   this.greet = () =>
//     console.log(`hello! my name is ${name}, and I'm ${age} years old.`);
// }

// // creating new instance of person.
// var person1 = new CreatePerson("Thulasikan", 21);
// person1.greet();

//8//

// // function to return names of the students who got over 80;
// const students = [
//   { name: 'Alice', grade: 90 },
//   { name: 'Bob', grade: 70 },
//   { name: 'Charlie', grade: 85 }
//   ];

// function getHighGrades(marksheet){
//   let stu_top_list = [];
//   for (let stu of students){
//     if (stu.grade > 80 ){
//       stu_top_list.push(stu.name);
//     }
//   }
//   console.log(stu_top_list)
// }
// getHighGrades(students);

//10//

// // checking age is enough to be an adult
// let age = 17;
// const isAdult = age >= 18 ? "Adult" : "Child";
// console.log(isAdult); // child

//11//

// const score = 65;

// if (score >= 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

//12//

// const grade = 85;

// if (grade >= 90) {
//     console.log("Excellent");
// } else if (grade >= 75) {
//     console.log("Good");
// } else if (grade >= 50) {
//     console.log("Average");
// } else {
//     console.log("Poor");
// }

//13//

// // create a task list function
// const tasks = ["hack NASA"];

// function addTask(newTask){
//    tasks.push(newTask);
//    console.log(tasks);
// }
// addTask("do 911 push-ups");

//14//

// // returns an array containing common elements among 2 arrays given.
// let arr1 = [1, 2, 3, 4];
// let arr2 = [6, 3, 1, 5];

// function findCommonElements(arr1, arr2) {
//   let common = []

// taking one element in the first then comparing it with every element in
// second array. if matched then its common. if not do it again with next element.

//   for (let i of arr1){
//     for (let j of arr2){
//       if (i === j){
//         common.push(i);
//       }
//     }
//   }
//   console.log(common);
// }
// findCommonElements(arr1, arr2);

//15//

// // updating employee obj with updates obj
// const employee = { name: "John", position: "Developer", salary: 50000 };
// const updates = { position: "Senior Developer", salary: 60000 };

// function updateEmployeeRecord(employee, updates) {
//   employee.position = updates.position;
//   employee.salary = updates.salary;
//   return employee
// }
// console.log(updateEmployeeRecord(employee, updates));

//16//

// // print total inventory value
// const products = [
//   { name: "Laptop", price: 1000, quantity: 5 },
//   { name: "Phone", price: 500, quantity: 10 },
// ];
// function inventoryValue(products) {
//   let total = 0;
//   for (let i of products) {
//     total += i.price * i.quantity;
//   }
//   return total;
// }
// console.log(inventoryValue(products));

//17//

// // applying discount to a set price.
// let price = 1000;
// let discount = 10;

// function applyDiscount(price, discount){
//         discount = discount * 0.01; // making discount value to percentage;
//         price -= price * discount; // subracting discount amount from original price
//         return price;
// }
// console.log(applyDiscount(price, discount));

//18//

// finding factorial of number n (recursive);
// understanding recursion. It is just calling the same function inside itself.
// in the below case it is going to print out hi indefinetely.
// function hi(){
//         console.log('hi');
//         hi();
// }

// function factorial(n) {
//         if (n === 0 || n === 1) { // 0! = 1
//           return 1;
//         } else {
//           // 5 * 4!
//           return n * factorial(n - 1);
//         }
//       }
// console.log(factorial(5)); //120

//19//

// // adding user to database. only allowing unique usernames.
// const userDB = [
//   { username: "admin", password: "admin" },
//   { username: "Thulasikan", password: "password" },
//   { username: "Sandy", password: "sandy3000" },
// ];

// let newUser1 = { username: "user", password: "user1234" };
// let newUser2 = { username: "user", password: "user1434" };
// let newUser3 = { username: "user", password: "user1534" };


// function registerUser(userDB, user) {
//   // for checking any username duplicates
//   let no_same_username_count = 0;
//   if (userDB.length > 0) {
//     for (let u of userDB) {
//       if (u.username !== user.username) {
//         no_same_username_count++;
//       }
//     }
//     if (no_same_username_count == userDB.length) {
//       userDB.push(user);
//     }
//   } else {
//     userDB.push(user);
//   }

 
//   return userDB;
// }
// console.log(registerUser(userDB, newUser1));
// console.log(registerUser(userDB, newUser2));
// console.log(registerUser(userDB, newUser3));

//20//
// repeated question