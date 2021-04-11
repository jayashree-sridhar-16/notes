"use strict";
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
        let users = resp.data;
        callback(users);
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

var callback = function (data) {
    let arr = data.map(x => {
        return {
            "id": x.id,
            "name": x.name,
            "email": x.email
        }
    });
    console.log("Id      |       Name           |           Email");
    for (var y in arr) {
        console.log(arr[y].id + "      |       " + arr[y].name + "     |       " + arr[y].email);
    }
}

console.log("Fetching user details");