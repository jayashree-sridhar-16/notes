"use strict";

const registerUser = () => {
  let element = document.getElementById("fname");
  let fname = element.value;
  sessionStorage.setItem("fname", fname);

  element = document.getElementById("lname");
  let lname = element.value;
  sessionStorage.setItem("lname", lname);

  element = document.getElementById("dob");
  let dob = element.value;
  sessionStorage.setItem("dob", dob);

  element = document.getElementById("uname");
  let uname = element.value;

  element = document.getElementById("pwd");
  let pwd = element.value;

  element = document.getElementsByName("gender");
  for (var x in element) {
    if (element[x].checked) {
      sessionStorage.setItem("gender", element[x].value);
      break;
    }
  }

  element = document.getElementById("number");
  let number = element.value;
  sessionStorage.setItem("phno", number);

  let users = localStorage.getItem("users");

  if (!users || users == null) {
    users = {};
  } else {
    users = JSON.parse(users);
  }
  users[uname] = pwd;
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("currentUser", uname);
  sessionStorage.setItem("currentPwd", pwd);
};

const getCurrentLocation = () => {
  let element = document.getElementById("map");
  let src = "https://google.com/maps?q=";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      src +=
        position.coords.latitude +
        "," +
        position.coords.longitude +
        "&output=embed";
      element.src = src;
    });
  } else {
    element.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.309221761403!2d-121.88326018499673!3d37.33518737984189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan%20Jos%C3%A9%20State%20University!5e0!3m2!1sen!2sus!4v1613439156263!5m2!1sen!2sus";
  }
};

const navToHome = () => {
  location.href = "./index.html";
};
