// Sales in March: 18000
// Number of months stored: 12
// Monthly Sales:
// Jan: $12000
// Feb: $15000
// Mar: $18000
// Apr: $14000
// May: $20000
// Jun: $22000
// Jul: $25000
// Aug: $24000
// Sep: $21000
// Oct: $23000
// Nov: $26000
// Dec: $30000

// Create a Map
let monthlySales = new Map();

// Add sales data (month → value in dollars)
monthlySales.set("Jan", 12000);
monthlySales.set("Feb", 15000);
monthlySales.set("Mar", 18000);
monthlySales.set("Apr", 14000);
monthlySales.set("May", 20000);
monthlySales.set("Jun", 22000);
monthlySales.set("Jul", 25000);
monthlySales.set("Aug", 24000);
monthlySales.set("Sep", 21000);
monthlySales.set("Oct", 23000);
monthlySales.set("Nov", 26000);
monthlySales.set("Dec", 30000);

// Access a specific month
console.log(monthlySales.get("Mar")); // 18000

// // Get the number of months stored
// console.log("Number of months stored:", monthlySales.size); // 12

// // Loop through all months and print sales
// console.log("Monthly Sales:");
// for (let [month, sales] of monthlySales) {
//   console.log(`${month}: $${sales}`);
// }
