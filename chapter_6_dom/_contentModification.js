// SOME CODE SNIPPETS ARE COMMENTED TO PRESERVE FUNCTIONALITY
// UNCOMMENT REQUIRED SNIPPET TO SEE CHANGES AND THEN COMMENT AGAIN

// Get the element corresponding to the first <p></p> tag
const element = document.querySelector("p");

// Get inner text for the element
console.log("contents of first <p></p> element");
console.log(element.innerText);

// Overwrite the inner text
// element.innerText = "the quick brown fox jumps over the lazy dog";

// Append new content to inner text
// element.innerText += " lorem ipsum";

// Select all HTML elements corresponding to <p></p> tag
const paras = document.querySelectorAll("p");

// Modify the contents of every <p></p> element
// paras.forEach((p, index) => {
//   p.innerText = `[${index}] ` + p.innerText;
// });

// Get the element with class='content'
const content = document.querySelector(".content");

// The inner text of the element
console.log("\nINNER_TEXT");
console.log(content.innerText);

// The inner HTML of the element
console.log("\nINNER_HTML");
console.log(content.innerHTML);

// Replace the inner HTML with new element
// content.innerHTML = "<h2>p tag replaced with h2 tag!</h2>";

// Append the inner HTML with new element
// content.innerHTML += "<h2>h2 tag added!</h2>";

const people = ["tom", "dick", "harry"];

// Create a new HTML <p></p> element for each of the array item and append to 'content'
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });
