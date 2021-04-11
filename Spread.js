"use strict";

var students = [
  {
    name: "Hermoine",
    score: 100,
  },
  {
    name: "Lucas",
    score: 99,
  },
  {
    name: "Ageuda",
    score: 90,
  },
  {
    name: "Jay",
    score: 85,
  },
  {
    name: "Frodo",
    score: 75,
  },
  {
    name: "Gouyen",
    score: 50,
  },
];

let [firstRank, secondRank, ...rest] = students;

console.log("First rank holder = " + firstRank.name);
console.log("Second rank holder = " + secondRank.name);
console.log("Other rank holding students: " + rest.map((r) => r.name));
