// Objects Review
var hotel = {
  rooms: 100,
  pool: true,
  currentTenants: 25,
  name: "Bed & Breakfast",
  roomAvailable: function() {
    return this.rooms - this.currentTenants > 0;
  }
};

console.log(hotel);
console.log(hotel.currentTenants);
console.log("rooms?: " + hotel.roomAvailable());

//Closures
function logger() {
  console.log("Something");
}
logger(); // will log "Something" into the Console
//Function Declaration
      (function logger2() {
        console.log("logger2");
      })();
//Functon Expression
      var logAgain = function() {
        cosole.log("Logged Again!");
      }();
//Closure Example
      var pageCounter = function() {
        var counter = 0;
        return {
          incrementCounter: function() {
            counter++;
          },
          viewCounter: function() {
            return counter;
          },
        };
      }();

      console.log(pageCounter.viewCounter()); // Returns 0.
      pageCounter.incrementCounter(); // Increments Counter variable by 1.
      console.log(pageCounter.viewCounter()); // Returns 1.

// Decorator Pattern
var pikachu = {
  name: "Pikachu",
  type: "Electric"
};

var voltorb = {
  name: "Voltorb",
  type: "Electric"
};

var thunderMethod = function(pokemon){
  pokemon.specialAttack = function() {
    console.log(this.name + ' used Thunder!');
  };
};

thunderMethod(pikachu);
thunderMethod(voltorb);

console.log(pikachu);
console.log(voltorb);

// Factory Pattern
var pokemonCreation = function(name, hp, attack, specialAttack) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.specialAttack = specialAttack;
};
var magikarp = new pokemonCreation("Magikarp", 100, "struggle", "splash");

console.log(magikarp.name);

// Exercise 1
var person = {
  name: 'Neil',
  location: 'Los Angeles',
  age: 22,
  hobbies: ['Coding', 'Partying'],
  pet: {
    type: "Dog",
    name: "James Bond",
    hobbies: [ "playing", "eating", "shitting" ]
  },
  party: function(){
    console.log('Drink! Smoke! Turn Up!');
  }
};

person.party();
// Exercise 2
person.work = function(){
  console.log("Welcome to 24 Hour Fitness, I'm " + this.name + ". How May I Help You?");
  console.log("Enjoy this beautiful day in " + this.location);
  console.log("Would you like to hear a story about " + this.pet.name + " and his " + this.pet.hobbies[2]);
};
person.work();
