"use strict";

class Student {
  constructor(name, degree, gpa, curSem, units) {
    this.name = name;
    this.degree = degree;
    this.gpa = gpa;
    this.curSem = curSem;
    this.unitcompleted = units;
  }

  eligibleToGraduate = (reqdUnits) => {
    let eligible = this.unitcompleted == reqdUnits ? true : false;
    console.log(this.name + "'s eligibility to graduate: " + eligible);
  };
}

class grad extends Student {
  constructor(...arg) {
    super(...arg);
    this.degree = "MS";
  }

  eligibleToGraduate = (reqdUnits) => {
    let eligible = this.unitcompleted == reqdUnits ? true : false;
    let el = eligible && this.gpa > 3;
    console.log(
      this.name +
        "'s eligibility to graduate for degree " +
        this.degree +
        ": " +
        el
    );
  };
}

let gradStud = new grad("Jay", "m", 3.5, 3, 15);
let stud = new Student("Subha", "b", 3, 2, 12);

console.log(gradStud);
console.log(stud);

gradStud.eligibleToGraduate(30);
stud.eligibleToGraduate(30);

console.log("Updating gpa and units completed .. \n\n");
let gradStudUpdated = { gpa: 3.9, curSem: 4, unitcompleted: 30 };
Object.assign(gradStud, gradStudUpdated);
console.log(gradStud);
gradStud.eligibleToGraduate(30);

let studUpdated = { gpa: 3.5, curSem: 4, unitcompleted: 30 };
Object.assign(stud, studUpdated);
console.log(stud);
stud.eligibleToGraduate(30);
