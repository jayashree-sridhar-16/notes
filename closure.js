"use strict";

let prices = {
  candy: 20,
  chips: 30,
  pizza: 50,
  cake: 10,
};

let buyFromCampus = (items) => {
  let prices = {
    candy: 10,
    chips: 20,
    pizza: 30,
    cake: 5,
  };

  return bill(items, prices);
};

let bill = (items, pricelist) => {
  let cost = 0;
  for (var c in items) {
    if (items[c] == "candy") {
      cost += pricelist["candy"];
    } else if (items[c] == "chips") {
      cost += pricelist["chips"];
    } else if (items[c] == "chips") {
      cost += pricelist["pizza"];
    } else if (items[c] == "cake") {
      cost += pricelist["cake"];
    }
  }
  return cost;
};

let cart = ["chips", "cake"];
let cost = bill(cart, prices);
let cost2 = buyFromCampus(cart);
console.log("Regular store bill = $" + cost);
console.log("Campus store bill = $" + cost2);
