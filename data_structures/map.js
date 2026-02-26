// Create a Map for monthly sales
let salesData = new Map([

// Add sales data (example numbers)
["January", 12000],
["February", 15000],
["March", 18000],
["April", 14000],
["May", 20000],
["June", 22000],
["July", 25000],
["August", 24000],
["September", 21000],
["October", 23000],
["November", 26000],
["December", 30000],
]);

// Get sales for a specific month
console.log(salesData.get("January")); // 12000

// Loop through all months
for (let [month, sales] of salesData) {
  console.log(`${month}: $${sales}`);
}
