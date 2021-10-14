// Creating a basic JavaScript object
const user = {
  username: "johndoe",
  email: "johndoe42@email.com",
  location: "New York, US",
  posts: ["Being A Father", "Fun On Sunday", "How To Cook Burgers"],
  followers: 23455,
  premium: true,
};

// Print the complete object on the console
console.log("[INFO] Object: user");
console.log(user);

// Print some of the object properties
console.log(`[INFO] username: ${user.username}`);
console.log(`[INFO] email: ${user.email}`);
console.log(`[INFO] posts: ${user.posts}`);

// Print the contents of the user.posts
console.log(`[INFO] USER POSTS:`);
user.posts.forEach((post, index) => {
  console.log(`[INFO] ${index} ${post}`);
});

// Check the type of an object property
console.log(`[INFO] type(user.username) ${typeof user.username}`);
console.log(`[INFO] type(user.posts) ${typeof user.posts}`);
console.log(`[INFO] type(user.followers) ${typeof user.followers}`);

// Update the object properties with new values
user.followers = 30000;
user.email = "johndoe42@newemail.com";
console.log("[INFO] object: user");
console.log(user);

// Square bracket notation to access object properties
console.log(`[INFO] username: ${user["username"]}`);
console.log(`[INFO] followers: ${user["followers"]}`);

// Use variable to access object properties
let key = "premium";
console.log(`[INFO] premium user ? ${user[key]}`);

// Update the variable to access another property
key = "followers";
console.log(`[INFO] followers count ? ${user[key]}`);
