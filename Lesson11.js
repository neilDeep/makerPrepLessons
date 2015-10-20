//Arrays are lists of objects, numbers, strings & booleans
var groceryList = ["bread", "milk", "eggs"];
console.log(groceryList);

//.join() print out with commas or dots.
console.log("Go to the store \& get: " + groceryList.join(", "));

//.split()
var sentArr = "Take my dog to the park please.".split("a");
console.log(sentArr);

//Array.isArray()
console.log(typeof groceryList);
console.log(Array.isArray(groceryList));

//accessing array elements
console.log("Go to the store and get " + groceryList[2] + ".");

// //change array elements
// groceryList[1] = "tofurky";
// console.log(groceryList[1]);

// inserting into Arrays
//.unshift()
groceryList.unshift("pizza");
console.log(groceryList);
//.push()
groceryList.push("cheese");
console.log(groceryList);

//Removing elements from arrays
//.shift();
var firstElement = groceryList.shift();
console.log(groceryList);
console.log(firstElement);
//.pop()
var lastElement = groceryList.pop();
console.log(groceryList);
console.log(lastElement);

// pass by reference
var arr = [1, 2, 3, 4, 5];
var newArr = arr;
arr[0] = 99;
console.log(newArr);

//pass by value
var x = 10;
var y = x;
x = 20;
console.log(y);

//.concat();
var arr1= [1, 2, 3];
var arr2= [4, 5, 6];
var arr3= arr1.concat(arr2);
console.log(arr3);

// FOR LOOPS
for (i=0; i < 10; i++) {
  console.log('i: ' + i);
}
//For Loops + Arrays
for (var i=0; i < groceryList.length; i++) {
  console.log("Element " + i + " is " + groceryList[i]);
}

//Array Inside Object
var myObject = {
  list : [1, 2, 3, 4]
};

console.log(myObject.list[0]);

// Exercise 1
var recipe = [];
recipe[0] = "Boil Water";
recipe[1] = "Grind the Coffee Beans";
recipe[2] = "Put 2 Tablespoons of Coffee Grounds in a French Press";
recipe[3] = "Pour the boiling water until the grounds are saturated and bubbling";
recipe[4] = "Pour the desired fluid ounces of water";
recipe[5] = "Let stand for 4 minutes to allow for brewing";
recipe[6] = "Press down on the device to separate grounds from the coffee";
recipe[7] = "Pour coffee in a mug an add the desired amount of milk and sugar";
console.log(recipe[0]);
var lastStep = 7;
console.log(recipe[lastStep]);

// Exercise 2
var bucketList = [];
bucketList[0] = "Get a Nice Condo.";
bucketList[1] = "Be Able to Travel Extensively.";

bucketList.push("Get a Tesla Custom Model."); //Item goes on end
bucketList.push("Live in Vancouver."); //Item goes on end

bucketList.unshift("Have a dog which doesn't have separation anxiety."); //Item goes at beginning
bucketList.unshift("Live in Seattle."); //Item goes at beginning

var dyingWish = bucketList.pop();
var doItNow = bucketList.shift();

console.log(bucketList);

//Exercise 3 Functions & forEach LOOPS to Print Array
recipe.forEach(function(x) {
  console.log(x);
});
bucketList.forEach(function(x) {
  console.log(x);
});
var logArray = function(array) {
  array.forEach(function(x){
    console.log(x);
  });
};

logArray(bucketList);

// Exercise 4
var array = [1, 2, 3, 4];
var newArray = [];
var reverser = function(array){
  var reversedArray = array.reverse();
  console.log(reversedArray);
};
reverser(array);

//Exercise 5
var userInput = prompt("Give me a bunch of numbers separated by a space");
var sampleArray = userInput.split(" ");
console.log(sampleArray);
var length = sampleArray.length;
var smallestNumber = sampleArray[0];
var largestNumber = sampleArray[0];
var minMaxArray = [];
var biggestSmallest = function() {
  for (var i=1; i<length; i++ ) {
    if (parseInt(sampleArray[i])>largestNumber) {
      largestNumber = sampleArray[i];
    }
    if (parseInt(sampleArray[i])<smallestNumber) {
      smallestNumber = sampleArray[i];
    }
}
minMaxArray.push(smallestNumber);
minMaxArray.push(largestNumber);
console.log(minMaxArray);
};
biggestSmallest(sampleArray);

//Exercise 6
var userNumbers = prompt("Give me a bunch of numbers separated by a space");
var userArray = userNumbers.split(" ");

var arrayDuplicator = function(array)
{
	var outputArray = [];
	outputArray = array;
	return outputArray;
};

console.log("This is the what the User gave us:" + " " + userArray);
var duplicated = arrayDuplicator(userArray);
duplicated.pop();
duplicated.pop();
console.log("This is the duplicated and popped result:" + " " + duplicated);
