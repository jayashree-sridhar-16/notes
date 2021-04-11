"use strict";

let parseJsonFromString = (req) => {
  return JSON.parse(req);
};

let main = () => {
  var jsonString =
    ' [ {"name": "John$"}, {"name": "Ann"}, {"name" : "Rita"}, {"name": 359929}, {"name": "Harry"},{"name": "Ron"}, {"name": "Hermoine"}, {"name": 12} ]';
  var obj = parseJsonFromString(jsonString);

  var arrayResponse = obj.map((x) => x.name);
  console.log("List of employees: " + arrayResponse.toString());

  //Remove invalid values, ie non string values from array
  var validArray = arrayResponse.filter((item) => typeof item === "string");
  console.log("Valid employee names: " + validArray.toString());

  //Removing $
  validArray[0] = validArray[0].split("$")[0];
  console.log(
    "Valid employee names after removing special character: " +
      validArray.toString()
  );

  //Find if the array includes name John
  console.log("Is Ann present in array? " + validArray.includes("Ann"));

  var firstThree = validArray.slice(0, 3);
  console.log("First 3 employees selected for bonus:" + firstThree.toString());

  var jsonList = JSON.stringify(firstThree);
  console.log(jsonList);

  return jsonList;
};

main();
