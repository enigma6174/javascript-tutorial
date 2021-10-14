const link = document.querySelector("a");
const div = document.querySelector("div.error");

// Display the attributes of the <a></a> element
console.log(link);
console.log("attributes are: ", link.getAttributeNames());

// Display the value of the href attribute of the <a></a> element
console.log("value(href) attribute is: ", link.getAttribute("href"));

console.log("\n");

// Display the attributes of the <div id='_xid' class='content'></div>
console.log(div);
console.log("attributes are: ", div.getAttributeNames());

console.log("\n");

// Update the href attribute of <a></a> element
// These updates will reflect in the earlier calls to link also
link.setAttribute("href", "https://www.youtube.com");
link.innerText = "New Magical Place";

console.log(link);
console.log(link.getAttribute("href"));

// Add another attribute to the <div id='_xid' class='content'></div>
div.setAttribute("style", "color: red");
