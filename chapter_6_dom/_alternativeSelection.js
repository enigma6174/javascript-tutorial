// Get the element with ID 'page-title'
const id = document.getElementById("page-title");
console.log(id);

// Get the elements which have class name 'error'
const classes = document.getElementsByClassName("error");
console.log(classes);

// Get the elements which are <p></p> tag
const tags = document.getElementsByTagName("p");
console.log(tags);

console.log("\n");

// Access the element at index 0 of tags
console.log("[INFO] tags[0]");
console.log(tags[0]);

// Access the element at index 1 of classes
console.log("[INFO] classes[0]");
console.log(classes[1]);

console.log("\n");

// Check the type of classes and tags
console.log(`[INFO] type(classes[]) ${typeof classes}`);
console.log(`[INFO] type(tags[]) ${typeof tags}`);

// Since classes and tags are HTML Collections, forEach() will not work on them
// The below gives an error
classes.forEach((c) => {
  console.log(c);
});
