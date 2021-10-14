// An object where one of the parameters is an array of objects
const user_johndoe = {
  username: "johndoe",
  email: "johndoe@email.com",
  posts: [
    {
      title: "Becoming A Father",
      likes: 30,
      published: "4/20/2021",
    },
    {
      title: "How To Install Python",
      likes: 345,
      published: "10/24/2020",
    },
    {
      title: "A Summary Of UCL 2020",
      likes: 4000,
      published: "8/10/2021",
    },
  ],
  isLoggedIn: true,
  getPostCount() {
    return this.posts.length;
  },
  showPostData() {
    this.posts.forEach((post) => {
      console.log(
        `TITLE: ${post.title} LIKES: ${post.likes} PUBLISHED: ${post.published}`
      );
    });
  },
};

// Show the blog post data
console.log(`[INFO] BLOG POST DATA FOR ${user_johndoe.username}`);
console.log(`[INFO] post_count? ${user_johndoe.getPostCount()}`);

console.log("\n");
user_johndoe.showPostData();
