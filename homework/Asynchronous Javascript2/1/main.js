// 1. Send a POST request to typicode:
// a. Use https://jsonplaceholder.typicode.com/posts as the URL
// b. The data you send should be an object that contains: id, title, body and userId (id and userId
// are numbers, title and body are strings)
// c. First, log the response from the POST request you send
// d. Then, show the new post on screen, using the new title and body from the response

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 1,
//     title: "Title",
//     body: "Body",
//     userId: 2,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const loadPost = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadPost();

const getUsersAndPosts = async () => {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);
  const usersResult = await users.json();
  console.log(usersResult);
  const postsResult = await posts.json();
  console.log(postsResult);
};

getUsersAndPosts();
