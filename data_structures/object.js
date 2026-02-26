let person = {
  name: "Sakariye",
  age: 25,
  city: "Mogadishu",
};

console.log(person.name); // Sakariye

person.job = "Developer"; // Adding a new property to the object

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

