console.log("OBJECT METHODS OUTPUTS\n");
console.log(
  "==============================================================================\n\n"
);

// Creating a JavaScript object with properties and methods
// Do not use arrow functions when defining methods
const userObject = {
  // Properties of object
  username: "johndoe",
  email: "johndoe42@email.com",
  location: "New York, US",
  posts: [
    "Being A Father",
    "Fun On Sunday",
    "How To Cook Burgers",
    "Buying Your First Car",
  ],
  followers: 23455,
  premium: true,

  // Method of the object (syntax 1)
  isLoggedIn: function () {
    return true;
  },

  // Method of the object (syntax 2 - more popular)
  getFollowerCount() {
    return 35430;
  },

  // Method of the object (syntax 2 - more popular)
  metadata() {
    console.log("[INFO] object with properties and methods");
  },
};

// Call the object methods which return

console.log(`[INFO] username? ${userObject.username}`);
console.log(`[INFO] follower_count? ${userObject.getFollowerCount()}`);

// Return values of methods can also be assigned to variables
const loginStatus = userObject.isLoggedIn();
console.log(`[INFO] logged_in? ${loginStatus}`);

// Call the non returning method
userObject.metadata();

// Print the contents of the user.posts
console.log(`[INFO] USER POSTS:`);
userObject.posts.forEach((post, index) => {
  console.log(`[INFO] ${index} ${post}`);
});

// Creating a JavaScript object with properties and methods
// Do not use arrow functions when defining methods
// To access properties of an object we have to use 'this' keyword
const userObjectModified = {
  // Properties of object
  username: "johndoe",
  email: "johndoe42@email.com",
  location: "New York, US",
  posts: [
    "Being A Father",
    "Fun On Sunday",
    "How To Cook Burgers",
    "Buying Your First Car",
  ],
  followers: 23455,
  premium: true,

  // Use this keyword to access the properties of the object
  getPostCount() {
    return this.posts.length;
  },
  getUserData() {
    return `[INFO] USERNAME ${this.username} EMAIL ${this.email}`;
  },

  // Properties can also be combined with other JavaScript functions
  getPosts() {
    this.posts.forEach((post) => {
      console.log(`[INFO] ${post}`);
    });
  },
};

const count = userObjectModified.getPostCount();
console.log(`[INFO] post_count? ${count}`);

userObjectModified.getPosts();

console.log(userObjectModified.getUserData());

// End of JS file; This is just for beautification
console.log(
  "------------------------------------------------------------------------------"
);
console.log("\n");
