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
