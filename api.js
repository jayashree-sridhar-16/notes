"use strict";
const axios = require("axios");

async function func(callb) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  let users = res.data;
  callb(users);
}

var callback = function (data) {
  let arr = data.map((x) => {
    return {
      id: x.id,
      name: x.name,
      email: x.email,
    };
  });
  console.log("Id      |       Name           |           Email");
  for (var y in arr) {
    console.log(
      arr[y].id +
        "      |       " +
        arr[y].name +
        "     |       " +
        arr[y].email
    );
  }
};

func(callback);
console.log("Fetching user details");
