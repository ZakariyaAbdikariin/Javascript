// // Define two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// // Merge using spread operator
// let merged = [...arr1, ...arr2];

// console.log(merged);

// Original array
// let nums = [10, 20, 30];

// // Copy array using spread operator
// let copy = [...nums];
// console.log(nums);
// console.log(copy);

// let user = { name: "Sakariye", age: 35 };
// let details = { country: "Somalia", job: "Developer" };

// // Merge user and details into a new object
// let profile = { ...user, ...details };

// console.log(profile);

function multiply(x, y) {
  return x * y;
}
let numbers = [3, 5];
let result = multiply(...numbers);
console.log(result);
