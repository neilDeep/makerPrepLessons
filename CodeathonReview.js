// Exercise 4
// MKS gold coins
var coins = prompt('What is the value of your MakerSquare coins?');
coins = coins.split(' '); // <- Makes Coins into an array
var dollars = map(coins, function(n){
  var half = Math.floor(n/2);
  var third = Math.floor(n/3);
  var fourth = Math.floor(n/4);
  return half + third + fourth;
});
console.log(dollars);
// Exercise 5
//The Palindrome
//Prompt User to enter their test Numbers
var numbers = prompt('Enter numbers w/ a space');

numbers = numbers.split(' ');

var palindromaticNumber = map(numbers, getPalindrome);

function getPaltindrome (n) {
  n++;
  while (!isPalindrome(n)) {
    num++;
  }

  return n;
}

function isPalindrome (number) {
  return number === parseInt(number.toString().split('').reverse().join(''));
}

// Each function
function each(collection, callback){
  if (Array.isArray(collection)){
  for (i=0; i < collection.length; i++) {
    callback(collection[i]);
  }}
  else {
    for (var key in collection){
      callback(collection[key]);
    }
  }
}
// MAP function
function map(collection, callback) {
  var results = [];
  each(collection, function(element) {
    results.push(callback(element));
  });
}
// Filter function
function filter(collection, predicate){
  var results = [];

  each(collection, function(element){
    if(predicate(element)){
      results.push(element);
    }
  });
}
//Reduce function
function reduce(collection, callback, initialValue){
    var counter=0, accumValue=initialValue;
    each(collection,function(element)
    {
        accumValue = callback(accumValue, element);
    });
    return accumValue;
}

var testArray = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
var adder = function(previousVal, currentVal){
    return previousVal + currentVal;
};

var sum = reduce(testArray, adder, 0);
