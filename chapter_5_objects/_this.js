console.log("THIS KEYWORD OUTPUTS\n");
console.log(
  "==============================================================================\n\n"
);

// Using 'this' keyword inside object method
const myObject = {
  property_1: 100,
  property_2: true,
  property_3: "hello world",
  status() {
    console.log("[INFO] myObject{} - regular function");
    console.log(this);
  },
  wrongStatus: () => {
    console.log("\n[INFO] myObject{} - arrow function");
    console.log(this);
  },
};

// This will give the object
myObject.status();

// This will give the context window
myObject.wrongStatus();

// Using 'this' keyword inside function
function myFunction() {
  console.log("\n[INFO] myFunction()");
  console.log(this);
}

myFunction();

// Using 'this' keyword inside array
const myArray = [0.1, true, this, "hello world"];
console.log("\n[INFO] myArray[]");
console.log(myArray[2]);

// Using 'this' keyword inside if-else block
if (2 > 1) {
  console.log("\n[INFO] if-block");
  console.log(this);
} else {
  console.log("\n[INFO] else-block");
  console.log(this);
}

// Using 'this' keyword in root
console.log("\n[INFO] root");
console.log(this);

console.log("\n");

// This will give the object
myObject.status();

// This will give the context window
myObject.wrongStatus();

// End of JS file; This is just for beautification
console.log(
  "------------------------------------------------------------------------------"
);
console.log("\n");
