"use strict";

const saveNote = () => {
  let textarea = document.getElementById("area");
  let note = textarea.value;

  let uname = sessionStorage.getItem("currentUser");
  localStorage.setItem(uname + "_note", note);
  textarea.disabled = true;
};

const getNote = () => {
  let textarea = document.getElementById("area");
  let uname = sessionStorage.getItem("currentUser");
  let note = localStorage.getItem(uname + "_note");
  if (note) {
    textarea.value = note;
  } else {
    textarea.value = "";
  }
};

const editNote = () => {
  let textarea = document.getElementById("area");
  textarea.disabled = false;
};

const navToHome = () => {
  location.href = "./index.html";
};
