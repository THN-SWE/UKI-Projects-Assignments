//1//

let transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 30 },
];

function groupByType(transactions) {
  let grouped = {};

  grouped.deposit = [
    ...transactions.filter((transaction) => {
      return transaction.type === "deposit";
    }),
  ];
  grouped.withdrawal = [
    ...transactions.filter((transaction) => {
      return transaction.type === "withdrawal";
    }),
  ];

  return grouped;
}
console.log(groupByType(transactions));

//2//

let employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 30 },
];
let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
  return employees.filter((employee) => {
    // using terenary method
    return employee.age <= ageLimit ? true : false;
  });
}
console.log(filterEmployees(employees, ageLimit));

//3//

// using set obejct to identify duplicate names.
let classes = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Alice", "Eve"],
  ["Frank", "George", "Bob"],
];
function checkDuplicates(classes) {
  let nameSet = new Set();
  //   converting 2d array into 1d array
  let stu_union = classes.flat();

  //   if total student count equal to all unique name counte then there are no duplicates of names
  return stu_union.length === nameSet.add(stu_union) ? true : false;
}
console.log(checkDuplicates(classes));
// Output: true

//4//

//YYYY-MM-DD HH:MM:SS
function returnTime() {
  let date = new Date();
  return date.toLocaleString();
}

console.log(returnTime());

//5//

function calculateAge(birthdate) {
  let date = new Date();
  let birthday = new Date(birthdate);

  let age = date.getFullYear() - birthday.getFullYear();
  // again a terenary here. handy feature.
  return typeof age === "number"
    ? age
    : "invalid input! follow this format (YYYY:MM:DD)";
}
console.log(calculateAge("2003-02-22"));

//6//

// using setDate() mehtod to add days.
// using toLocaleDateString() to return date except time.
function addDays(date, days) {
  let new_date = new Date(date);
  new_date.setDate(days);
  return new_date.toLocaleDateString();
}

console.log(addDays("2022-06-15", 10));

//7//

function dateDifference(date1, date2) {
  let a = new Date(date1);
  let b = new Date(date2);
  let in_milli_seconds = Math.abs(a - b);
  let one_day_in_milli_seconds = 86400000;

  if (date1 === date2) {
    return "same dates gieven!";
  } else {
    return in_milli_seconds / one_day_in_milli_seconds + " day/s";
  }
}
console.log(dateDifference("2022-06-16", "2022-06-16"));

//8//

// a typeof object.
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

let userPreferences = new Map();
function setPreference(key, value) {
  userPreferences.set(key, value);
}
function getPreference(key) {
  return userPreferences.get(key);
}

setPreference("theme", "dark");
setPreference("fontSize", "16px");
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px

//9//

let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countOccurrences(arr) {
  let map = new Map();
  let arr_unique_items = new Set(arr);

  for (let item of arr_unique_items) {
    let count = 0; // initiating a count for every unique item

    for (let i of arr) {
      if (item === i) {
        count++;
      }
    }
    map.set(item, count);
  }
  return map;
}
console.log(countOccurrences(strings));

//10//

let employes = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
function mapEmployeeIdsToNames(employes) {
  let map = new Map();
  employes.forEach((emp) => {
    map.set(emp.id, emp.name);
  });
  return map;
}
let employeeMap = mapEmployeeIdsToNames(employes);
console.log(employeeMap);

//11//

let inventory = new Map();
function addItem(itemName, quantity) {
  inventory.set(itemName, quantity);
}
function updateItemQuantity(itemName, quantity) {
  return inventory.has(itemName)
    ? inventory.set(itemName, quantity)
    : "no item in that name";
}
function checkItemQuantity(itemName) {
  return inventory.get(itemName);
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple"));
console.log(checkItemQuantity("banana"));

//12//

function removeDuplicates(arr) {
  let arr_without_dup = [...new Set(arr)];
  return arr_without_dup;
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]

//13//

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let common_set = [];

  set1.forEach((set1_item) => {
    if (set2.has(set1_item)) {
      common_set.push(set1_item);
    }
  });
  return common_set;
}
console.log(intersection(array1, array2));

//14//

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];

// the multiple arrays passed to function would collected as single array of arrays
// by  using ...

function union(...arrays) {
  let resultSet = [];
  let unique_elements = new Set(arrays.flat()); // flatning the arrays then create a Set out of it only store unique elements.
  unique_elements.forEach((elem) => resultSet.push(elem));

  return resultSet;
}
console.log(union(arr1, arr2, arr3));

//15//

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];

function removeItemsFromSet(items, set) {
  items.forEach((item) => {
    if (set.has(item)) {
      set.delete(item);
    }
  });
  return set;
}
removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]);

//16//

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];

function updateAttendance(newAttendance, overallAttendance) {
  return overallAttendance.add(...todayAttendance);
}

overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
