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
