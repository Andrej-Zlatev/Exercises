function test(id, cb) {
  setTimeout(() => {
    cb({
      id: id,
      name: "Andrej",
    });
  }, 2000);
}

function callBack(obj) {
  console.log(obj);
}

test(1, callBack);
