
// Exercise 1

// Each Function
var each = function (collection, callback) {
  if (Array.isArray(collection)) {  // Check to see if its an Array or Object with an If/Else Statement
	for (var i = 0; i < collection.length; i++) {
    callback(collection[i]); // Runs the code for your Array
  }
  }
  else { // Runs the code if its an Object
  for (var key in collection) {
    callback(collection[key]);
  }
  }
};

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
  });}

  // Filter example
  var myArray = [1, 2, 3, 4, 5, 1];
  var result = myArray.filter(function(value, index, array)
  {
    return array.indexOf(value) == index;
  });
console.log(result);

//Reduce function
function reduce(collection, callback, initialValue){
    var counter=0, accumValue=initialValue;
    each(collection,function(element)
    {
        accumValue = callback(accumValue, element);
    });
    return accumValue;
}
