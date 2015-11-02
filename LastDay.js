function p(x){
  console.log(x);
}

var array = [1, 2, 3, 4];

object = {
  name: "Object",
  age: 1,
};

var houses = [
  {
    name: "House 1",
    duplex: true ,
    color: "Cadet Blue",
    windows: 2,
    parking: true,
  }, {
    name: "House 2",
    duplex: false,
    color: "red",
    windows: 6,
    parking: true,
  }, {
    name: "House 3",
    duplex: true,
    color: "brown",
    windows: 8,
    parking: false,
  }, {
    name: "House 4",
    duplex: false,
    color: "red",
    windows: 4,
    parking: false,
  }
]; // An Array of Objects !

var redHouse = function(house){
  return house.color === "red";
};

// Each Function

function each(collection, callback){
  if (Array.isArray(collection)) {
    for (i=0; i<collection.length; i++){
      callback(collection[i]);
    }
  }
  else {
    for (var key in collection) {
      callback(collection[key]);
    }
  }
}

each(array, p);
each(object, p);

// Map Function

function map(collection, callback) {
  var results = [];
  each(collection, function(currentElement){
    results.push(callback(currentElement));
  });
  return results;
}

map(array, p);

// Filter Function

function filter(collection, predicate) {
  var results = [];
  each(collection, function(currentElement){
    if (predicate(currentElement)){
      results.push(currentElement);
    }
  });
  return results;
}

var redHouses = filter(houses, redHouse);

console.log(redHouses);

// Reduce Function

function sum(currentAccumValue, currentElement) {
  return currentAccumValue + currentElement;
}

function reduce(collection, callback, initialValue) {
  var accumValue, i;
  if (initialValue === undefined) { // no initialValue
    accumValue = collection[0];
    i = 1;
  } else { // if initialValue
    accumValue = initialValue;
    i = 0;
  }
  while (i < collection.length) {
    accumValue = callback(accumValue, collection[i]);
    i++;
  }
  return accumValue;
}

var total = reduce(array, sum, 0);

console.log(total);
