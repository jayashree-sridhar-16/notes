"use strict";

const validateLogin = () => {
  let uname = document.getElementById("uname").value;
  let pwd = document.getElementById("pwd").value;

  let usersString = localStorage.getItem("users");
  let users = JSON.parse(usersString);

  if (users[uname] && users[uname] == pwd) {
    sessionStorage.setItem("currentUser", uname);
    sessionStorage.setItem("currentPwd", pwd);
    return true;
  } else {
    alert("Invalid credentials. Please try again!");
    return false;
  }
};

const navToHome = () => {
  location.href = "./index.html";
};
