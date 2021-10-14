console.log("\nFUNCTION OUTPUTS\n");
console.log(
  "==============================================================================\n\n"
);

// This is a declared function
function foo() {
  console.log("[INFO] Called From : foo()");
}

// This is a function expression
const fun = function () {
  console.log("[INFO] Called From : fun()");
};

// Call the functions
foo();
fun();

// Declared functions can be called before being defined
hello();

function hello() {
  console.log("[INFO] Called From: hello()");
}

// Function expressions cannot be called before being defined
// This will lead to an error
// world();

// const world = function () {
//   console.log("[INFO] Called From : world()");
// };

// Function without default parameter
function add(x, y) {
  console.log(`[INFO] ${x} + ${y} = ${x + y}`);
}

// Function with one default parameter
function divide(x, y = 1) {
  console.log(`[INFO] ${x} / ${y} = ${x / y}`);
}

// Function with multiple default parameters
function multiply(x = 1, y = 1) {
  console.log(`[INFO] ${x} * ${y} = ${x * y}`);
}

function args(
  arg1 = "def_1",
  arg2 = "def_2",
  arg3 = "def_3",
  arg4 = "def_4",
  arg5 = "def_5"
) {
  console.log(
    `[INFO] arg1: ${arg1} arg2: ${arg2} arg3: ${arg3} arg4: ${arg4} arg5: ${arg5}`
  );
}

add(10, 20); // Pass both arguments
divide(10); // Pass first argument only
multiply(); // Do not pass any arguments
args("hello", "world", "javascript"); // Pass some of the arguments

// Return a value from a function
function square(x) {
  return x ** 2;
}
console.log(`[INFO] square(7): ${square(7)}`);

// Return a value from a function and reuse
function area(length, breadth) {
  return length * breadth;
}

function volume(height, area) {
  return height * area;
}

const areaOfSquare = area(13, 5);
const volumeOfSquare = volume(10, areaOfSquare);

console.log(
  `[INFO] Volume(length=13, breadth=5, height=10) = ${volumeOfSquare}`
);

// End of JS file; This is just for beautification
console.log(
  "------------------------------------------------------------------------------"
);
console.log("\n");
