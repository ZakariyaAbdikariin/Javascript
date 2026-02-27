// function listNames() {
//     console.log("Sakariye:");
//     console.log("Alice");
//     console.log("Bob");
//     console.log("Charlie");
//     console.log("Ahmed");
// }

// // listNames();

// function* listNames() {
//   yield "Sakariye";
//   yield "Alice";
//   yield "Bob";
//   yield "Charlie";
//   yield "Ahmed";
// }

// const names = listNames();

// // Manually getting values
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

function* listNames() {
  yield "Sakariye";
  yield "Alice";
  yield "Bob";
  yield "Charlie";
  yield "Ahmed";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runGenerator() {
  const generator = listNames();

  for (let value of generator) {
    console.log(value);
    await sleep(3000); // wait 3 seconds
  }
}

runGenerator();
