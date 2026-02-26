// 🔹 Parent Class
class Animal {
  constuctor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  speak() {
    console.log("This animal makes a sound.");
  }
}

// 🔹 Child Class Dog
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // call parent constructor
    this.breed = breed; // extra data
  }

  speak() {
    console.log(`${this.name} barks 🐶`);
  }

  getBreed() {
    console.log(`Breed: ${this.breed}`);
  }
}

// 🔹 Child Class Cat
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color; // extra data
  }

  speak() {
    console.log(`${this.name} meows 🐱`);
  }

  getColor() {
    console.log(`Color: ${this.color}`);
  }
}

// 🔥 Using the classes

const dog1 = new Dog("Buddy", 3, "German Shepherd");
dog1.info();
dog1.getBreed();
dog1.speak();

console.log("-------------");

const cat1 = new Cat("Luna", 2, "White");
cat1.info();
cat1.getColor();
cat1.speak();
