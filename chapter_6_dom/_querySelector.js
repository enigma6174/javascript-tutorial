let element = null;

// Select the first <p></p> element
element = document.querySelector("p");
console.log(element);

// Select the first HTML element with 'error' class
element = document.querySelector(".error");
console.log(element);

// Select the <div class="error"></div> element
element = document.querySelector("div.error");
console.log(element);

// Select the <h1></h1> element inside <body></body> tag
element = document.querySelector("body > h1");
console.log(element);

// Select all <p></p> elements
const paras = document.querySelectorAll("p");
console.log(paras);

console.log("\n");

// Print each item in paras[] individually
paras.forEach((p) => {
  console.log(p);
});

console.log("\n");

// Select all elements with class="error"
const errors = document.querySelectorAll(".error");
console.log(errors);

console.log("\n");

// Print each item in errors[] individually
errors.forEach((e) => {
  console.log(e);
});

console.log("\n[INFO] errors[1]");
console.log(errors[1]);
