function multpile(a, b) {
  let z = a * b;
  console.log(z);
}

// let x = 5;
// var y = 6;

// // Arithmetic Operators
// var z = x + y;
// console.log(z);

// z = x-y;
// console.log(z);

// z = x*y;
// console.log(z);

// z = x/y;
// console.log(z);

// z = x%y;
// console.log(z);

// // Assignment Operators

// z = x;
// console.log(z);

// z += x; // z= z + x
// console.log(z);

// z -= x; // z= z - x
// console.log(z);

// z *= x; // z= z * x
// console.log(z);

// z /= x; // z= z / x
// console.log(z);

// z %= x; // z= z % x
// console.log(z);

//   // = is the assignment operator
//  // == is the comparison operator
// // === is te comparison operator with type checking


// // Comparison Operators

// x = 5;
// y = 4;

// console.log(x == y); // ONLY checks the value
// console.log(x === y); // checks the value and the type
// console.log(x != y); // checks if the values are different
// console.log(x !== y); // checks if the values and the types are different
// console.log(x > y); // checks if x is greater than y
// console.log(x < y); // checks if x is less than y


// // String Operators

// var firstName = "Ball";
// var lastName = "Apple";

// console.log(firstName[1]);  

// var fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(firstName < lastName);

// Logical Operators

// var a = 'true';
// var b = 5;

// console.log(a && b); // AND
// console.log(a || b); // OR
// console.log(!a); // NOT
// console.log(!b); // NOT

// if(!b ) {
//   console.log("Hello");
// }


// console.log(typeof(a)) // returns the type of the variable
// console.log(typeof(b)) // returns the type of the variable

// Data Types

// 1. String name and all
// 2. Number 5, 5.5, 5e5 etc
// 3. Bigint 5n
// 4. Boolean true or false
// 5. Undefined 
// 6. Null
// 8. Object arrays, class, objects, date, match

// let x = null;
// console.log(x); // undefined
//  var obj = { name: "John", age: 30, city: "New York" };  // object key value pair
//     console.log(obj.city);
// var names = ["CSD", "SDC", "Startup Club"]; // array
// console.log(names[2]);

// Dates
// var today = new Date();

// console.log(today); // returns the current date and time
// console.log(today.getFullYear()); // returns the year
// console.log(today.getMonth()); // returns the month
// console.log(today.getDate()); // returns the date
// var nameof = "SDC"
// if(nameof == "CSD") {
//     if(nameof == "SDC") {
//         console.log("Hello");
//     } else {
//         console.log("World");
//     }
//   console.log("Hello");
// } else {    
//   console.log("World");
// }

// Loops for, while, do while, for in, for of
// for (let i =0; i < 5; i++) {
//   console.log("Hello");
//   console.log(i);
// }
i = 11;
while (i == 10) {
  console.log("Hello");
    i++;
}

do {
  console.log("Hello");
  i++;
} while (i == 11);

// for in loop
var arr = ['name', 5, 7];
for (let i in arr) { // in fllow only length of the array
  console.log(i);
}

for (let i of arr) { // of follow the values of the array
  console.log(i);
}



// Functions



