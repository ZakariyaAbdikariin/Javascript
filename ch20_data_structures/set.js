// set.js

// 🔹 1. Create a Set
const people = new Set(["Mustafa", "Mustafa", "Ismail", "Fatima"]);

console.log("Initial Set:", people);
// Output: Set { 'Mustafa', 'Ismail', 'Fatima' } (duplicates removed)

// // 🔹 2. Add an item
people.add("Amina");
// people.add("Ali"); // Adding duplicate, will not be added
// console.log("After adding Amina and Ali:", people);

// // 🔹 3. Delete an item
people.delete("Ismail");
// console.log("After deleting Ismail:", people);

// // 🔹 4. Check if an item exists
console.log("Contains Fatima?", people.has("Fatima")); // true
// console.log("Contains Ismail?", people.has("Ismail")); // false

// // 🔹 5. Get the size of the set
// console.log("Set size:", people.size);

// // 🔹 6. Loop through the Set
// console.log("Looping through Set:");
// for (const name of people) {
//   console.log(name);
// }

// // 🔹 7. Convert Set to Array
// const namesArray = [...people];
// console.log("Set converted to Array:", namesArray);

// // 🔹 8. Clear the Set
// people.clear();
// console.log("After clearing Set:", people);
console.log(people); // Set { 'Mustafa', 'Ismail', 'Fatima', 'Amina' }