// OBJECTS

var bake = function() {
  console.log("I'm baking!");
};

var pizza = {
  toppings: ["cheese", "pepperoni", "marinara sauce", "pineapple", "red onions"],
  size: "20 inches",
  isHot: true,
  price: 25.00,
  property: "Fine",
  bake: bake,
};

var property = "toppings";
console.log(pizza[property][3]);
pizza.bake(); //Call a Function within Object.

// forEach Function
// Takes a function as a parameter
var arr = [1, 2, 3, 4];
var string = "";
//Iterate over an Array
arr.forEach(function(number) {
  string += number + " ";
});

console.log(string);

//Split an Array
// . split();
var name = "Neil";
var newName = name.split("");
console.log(newName);
newName[2] = "a";
console.log(newName);
// .join();
name = newName.join("");
console.log(name);
