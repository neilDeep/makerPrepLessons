// alert("This Is Lesson 9");

// prompt('Are you ready for Objects in JavaScript?');

// simple object
// "hello".length // property
// "hello".toUpperCase() // method

// ~ Object Literal Syntax ~
var car =
{
  color: "red",
  make: "Toyota Camry",
  year: 1998,
};

car.color = "purple"; // changes color to purple

car.price = "$1,200"; // can add values outside of object brackets

var userProperty = prompt("What is another property that should the car have");

var value = prompt("What is the value of this key property?");

userProperty = car.userProperty;

car.userProperty = value;

console.log([car.userProperty]);

// JSON = JavaScript Object Notation

// Objectception
car.seats = {
  material: "leather",
  heated: true,
  armrest : {
    comfy: true,
    brown: "okay",
    box: {
      color: "auburn"
    }
  }
};

// for in loop

var counter = 0;
for (var x in car) {
  console.log(x + ": " + car[x]);
   if (counter === 3) {
       break;
   }
}
