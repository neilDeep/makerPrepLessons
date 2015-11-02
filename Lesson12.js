var say_hi = function () {
  console.log('meh');
};

var runner = function (fn) {
  console.log('Invoking a function now!');
  fn();
};

runner(say_hi); // a function that was passed as an argument to another function is called a CALLBACK

// Exercise 1
function answerLogger (fn) {
    fn = fn();
    console.log(fn);
}

answerLogger(function(){
  var answer = prompt("What is the answer?");
  return answer;
});

// Exercise 2
function answerCollector(functionsArray) {
  var resultsArray = [];
  for (i=0; i<functionsArray.length; i++) {
    resultsArray.push(functionsArray[i]());
  }
  console.log(resultsArray);
}

var fn1 = function () {
  return "this should be the first value in results array";
};

answerCollector([fn1, function(){ return "this should be the second value"; }]);

// Exercise 3
function addFive() {
  return function(num)
  {
    var added5 = num + 5;
    console.log(added5);
  };
}

var addFiver = addFive();

console.log(addFiver(5));

// Exercise 4
var secretKeeper = function(string1, string2) {
    var secret = "password";
    console.log(string1 + secret + string2);
};

secretKeeper("This is the secret: ", " ...Keep it safe!");

// Exercise 5
var number = 0;

function adds10(){
  console.log(number + 10);
}

function leakyAdds10(){
  number += 10;
  console.log(number);
}

// Exercise 6
function multipliesBy(num){
  return function(num2){
    return num * num2;
  };
}

// ---------------------Lesson 10/21/15-----------------------------------------
// forEach / each
function forEach(collection, callbackFunction) {
  for (var i=0; i<collection.length; i++) {
    callbackFunction(collection[i]);
  }
}
function p(input) {
  console.log(input);
}

forEach([1, 3, 4, "Avi"], p);

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
