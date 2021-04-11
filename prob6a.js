"use strict";

let student = {
    name: 'Phoebe',
    city: 'NY',
    getName: function () {
        return this.name;
    },
    getCity: function () {
        return this.city;
    }
};

var location = function () {
    console.log(this.getName() + " lives in " + this.getCity());
};

var func = location.bind(student);
func();

var registerStudent = function (degree, spl) {
    console.log(this.getName() + " has been registered for the degree " + degree + " in " + spl);
};

registerStudent.apply(student, ["MS", "Psychology"]);

var updateLastName = function (name) {
    let fullName = this.getName() + " " + name;
    console.log("Student name has been updated with value : " + fullName);
};

updateLastName.call(student, "Buffay");