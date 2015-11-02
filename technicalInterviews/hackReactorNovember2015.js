//name:
//email:
//phone-number:


/*
Welcome to the technical portion of this interview! You will be working together with your interviewer to work through the assignments
in this file. Here are a few important points to keep in mind during the interview:

- Communicate your thinking clearly before and while writing code. You will not be writing any code that you cannot hold conversation about.
- You may not use any external resources outside of this document during the interview. Reference to any outside materials during the interview
	is considered academic dishonesty and will immediately and irrevocably remove you from consideration for admissions into our program.
- If there is anything you would want to look up online, instead ask your interviewer, and they will support you as is appropriate for the
	interview setting.

Any questions?
*/

// Make an array called `myArray` with the number values 1 through 5.
var myArray = [1, 2, 3, 4, 5];

// Make an object called `myObject` with 3 properties, one for your name, one for your city and one for your favorite animal.
var myObject = {
  name: "yourName",
  city: "yourCity",
  favoriteAnimal: "favoriteAnimal"
};

// Create a function called `print` that takes 1 value as a parameter and logs it to the console.

    print(); // hoisting

      function print (input) {
          console.log(input);
          } // function declaration


          var print = function(input) {
            console.log(input);
          }; // function expression

          // Whats te difference between those two^ ?? What is Hoisting?


// Use `print` to print the second value in `myArray`.
print(myArray[1]);

// Use `print` to print the value in `myObject` that contains your name.
print(myObject.name);

//print using object bracket notation??


// You are going to write an `each` function which takes a collection and an callback function and
// invokes the callback function on each item in the collection.

// Here are 2 example use cases of `each`. Use these examples as guidance for how an implementation of
// `each` should behave.

// First of all, `each` should be able to handle arrays:

var scores = [10345, 23432, 333356];

var printScore = function (score) {
  console.log(score);
};

each(scores, printScore);

// The following would be logged to the console:
// 10345
// 23432
// 333356


// Secondly, `each` should also be able to handle objects:

var capitals = {
  California: 'Sacramento',
  Vermont: 'Montpelier',
  Arizona: 'Phoenix'
};

var printCapital = function (capital) {
  console.log(capital);
};

each(capitals, printCapital);

// The following would be logged to the console:
// 'Sacramento'
// 'Montpelier'
// 'Phoenix'

// Write the body of the function below:

var each = function (collection, callback) {
  if (Array.isArray(collection))
  {
	for (var i = 0; i < collection.length; i++)
  {callback(collection[i]);}
  }
  else
  {
  for (var property in collection)
  {callback(collection[property]);}
  }
};
