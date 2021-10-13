console.log("FOR-EACH FUNCTION OUTPUTS\n");
console.log(
  "==============================================================================\n\n"
);

// forEach() method is very useful for iterating
// It needs a callback function

let counter = 1;

// Define the array
const myArray = [
  "Manchester United",
  "Barcelona",
  "Real Madrid",
  "Dortmund",
  "Juventus",
];

// Iterate over the array using forEach()
// Result will be printed 5 times
myArray.forEach(function () {
  console.log(`[INFO] item_${counter}`);
  counter += 1;
});

// Iterate over the array using forEach() and print
// The callback function takes two arguments - items inside the array and their index
myArray.forEach(function (arrayItem, itemIndex) {
  console.log(`[INFO] ITEM: ${arrayItem} INDEX: ${itemIndex}`);
});

// Define the array
const anotherArray = ["Spider-Man", "Superman", "Thor", "Green Arrow", "Flash"];

// Iterate over the array using forEach()
// Use arrow function as callback function
anotherArray.forEach((arrayItem, itemIndex) => {
  console.log("[INFO]", itemIndex, arrayItem);
});

anotherArray.forEach((arrayItem) =>
  console.log(`[INFO] ARRAY_ITEM: ${arrayItem}`)
);

// End of JS file; This is just for beautification
console.log(
  "------------------------------------------------------------------------------"
);
console.log("\n");
