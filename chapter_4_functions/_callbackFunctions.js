console.log("\nCALLBACK FUNCTION OUTPUTS\n");
console.log(
  "==============================================================================\n\n"
);

// Pass a function as an argument
function function1(x, y) {
  return x * y;
}

function function2(p, f) {
  return p * f(12, 5);
}

const result = function2(4, function1);

console.log(`[INFO] function1(12, 5): ${function1(12, 5)}`);
console.log(`[INFO] function2(4, function1): ${result}`);

// Example of callback function - passing a function as argument
const myFunc = (callback) => {
  // Do something
  console.log("[INFO] Function: myFunc()");

  // Call the function passed as argument
  // This function can be defined when myFunc() is called (if not defined earlier)
  callback();

  // Do something
  console.log("[INFO] Function: myFunc()");
};

// Call myFunc()
myFunc(function () {
  // Do something
  console.log("[INFO] Function: callback()");
});

// End of JS file; This is just for beautification
console.log(
  "------------------------------------------------------------------------------"
);
console.log("\n");
