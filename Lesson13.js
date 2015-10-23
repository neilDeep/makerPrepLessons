
// Exercise 1
// Each Function
var each = function (collection, callback) {
  if (Array.isArray(collection)) {  // Check to see if its an Array or Object with an If/Else Statement
	for (var i = 0; i < collection.length; i++) {
    callback(collection[i]); // Runs the code for your Array
  }
  }
  else { // Runs the code if its an Object
  for (var property in collection) {
    callback(collection[property]);
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
  });
}//Reduce function
function reduce(collection, callback, initialValue){
    var counter=0, accumValue=initialValue;
    each(collection,function(element)
    {
        accumValue = callback(accumValue, element);
    });
    return accumValue;
}
