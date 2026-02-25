// compile time errors
// run time errors
// IDE Integrated Development Environment
// 1. Visual Studio Code
// 2. IntelliJ IDEA
// 3. Sublime Text
// 4. Atom
// 5. Eclipse
// 6. NetBeans
// 7. PyCharm
// 8. WebStorm
// 9. Android Studio
// 10. Xcode

try {
  // let firstName
  // console.log(firstName.toUpperCase()); // Sakariye
  // console.log("Hello")
  // console.log("Hello2")
  let dbError = new Error("Could not connect to the database");
  throw dbError;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This will  run regardless of the error");
}
