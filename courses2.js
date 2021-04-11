"use strict";

const courses = require("./courses.js");

class Classes {
  static getCourseForField = (field = "CMPE") => {
    const regex = new RegExp(field);
    let offered = [];
    for (var c in courses) {
      if (regex.test(c)) {
        offered.push(courses[c]);
      }
    }
    return offered;
  };
}

console.log("\nGet courses for field Computer engineering..");
let resp = Classes.getCourseForField("CMPE");
console.log(resp.toString());

console.log("\nGet courses for field Computer Science..");
resp = Classes.getCourseForField("CS");
console.log(resp.toString());

console.log("\nGet courses ..");
resp = Classes.getCourseForField();
console.log(resp.toString());
