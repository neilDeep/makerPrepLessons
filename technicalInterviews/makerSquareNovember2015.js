var array = [1, 2, 3, 4, 5];

function addsTogether(x, y) {
  return x + y;
}

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  }
  else {
    for (var key in collection) {
      callback(collection[key]);
    }
  }
}

function reduce(collection, callback, initialValue){
  var counter=0, accumValue=initialValue;
  each(collection,function(element)
  {
    accumValue = callback(accumValue, element);
  });
  return accumValue;
}

var result = reduce(array,addsTogether,5);

console.log(result);


// The reduce function is supposed to take the Initial Value (5), and add it to the first element in the array, then take that sum and add it to the second element in the array, and so on.. until you have the AccumValue, which should be 20 in this case.
// 5 + 1 = 6 + 2 = 8 + 3 = 11 + 4 = 15 + 5 = 20.
