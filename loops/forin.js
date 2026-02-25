
let person = {
    name: "john Doe",
    age: 30,
    city: "New York"
}

for (const key in person) {
   console.log("the key is " + key + " and the value is " + person[key]);
    
}