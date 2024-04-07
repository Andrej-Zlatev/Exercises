// function test(id, cb) {
//   setTimeout(() => {
//     cb({
//       id: id,
//       name: "Andrej",
//     });
//   }, 2000);
// }

// function getUserProfile(username, cb) {
//   setTimeout(() => {
//     cb({ username: username, photo: "slika.jpg" });
//   }, 1000);
// }

// function callBack(obj) {
//   console.log("id", obj);
//   getUserProfile(obj.obj, function (userProfile) {
//     console.log("userProfile", userProfile);
//   });
// }

// test(1, callBack);

const test = new Promise((resolve, reject) => {
  let num = 15;
  setTimeout(() => {
    if (num > 10) {
      resolve("The number is higher than 10");
    } else {
      reject("The number is lower than 10");
    }
  }, 2000);
});

test.then((res) => console.log(res)).catch((error) => console.log(error));
