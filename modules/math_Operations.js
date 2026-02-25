// mathOperations.js

function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

export function subtract(a, b) {
  return a - b;
}

let result = multiply(2, 5);
{
  console.log(result); // 10
}

// export { multiply, divide, subtract };
export default multiply;
