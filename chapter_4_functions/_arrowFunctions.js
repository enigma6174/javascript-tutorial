// Standrad function notation
function f(argument1, argument2 = "default_args") {
  console.log(
    `[INFO] Function: f() argument1: ${argument1} argument2: ${argument2}`
  );
}

f("hello world");

// Define the above function using arrow function notation
const arrow = (argument1, argument2) => {
  console.log(
    `[INFO] Function: arrow() argument1: ${argument1} argument2: ${argument2}`
  );
};

arrow("args_1", "args_2");

// Syntax for arrow function with multiple parameters and code block with return statement
const arrowFunction = (x, y) => {
  const offset = 0.05;
  return offset * x * y;
};
console.log(`[INFO] arrowFunction(10, 5): ${arrowFunction(10, 5)}`);

// Syntax for arrow function with multiple parameters and code block with ONLY return statement
const sum = (x, y) => x + y;
console.log(`[INFO] sum(10, 5): ${sum(10, 5)}`);

// Syntax for arrow function with ONE PARAMETER and code block with ONLY return statement
const cube = (x) => x ** 3;
console.log(`[INFO] cube(11): ${cube(11)}`);
