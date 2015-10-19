// simple function
function print (banana) {
  console.log("Input: " + banana);
  return banana * 2;
}
// invocation operators
var doubledValue = print (70);
console.log("Doubled: " + doubledValue);

// function declaration
function alertSystem(){
  console.log("Alert! Alert!");
}
alertSystem();

//function expression
var secondAlertSystem = function coolFun () {
  console.log("Alert Again!");
};
secondAlertSystem();

// Functionception
function adder(num1, num2) {
  return num1 + num2;
}

function subtractor (num1, num2) {
  return num1 - num2;
}

// Function While Loop
function counter (startNum, maxCount) {
  var sum = 0;
  while (startNum <= maxCount) {
    console.log(startNum);
    sum += startNum;
    startNum++;
  }
  return sum;
}

console.log(counter(1, 5));

//Exercise 1
function welcomeMessage (){
    var getTime = console.log("Welcome! The current time is: " + new Date());
    return getTime;
}

welcomeMessage();

//Exercise 2
function random_number(min, max)
{
   counter = 0;
   string = "";
   while (counter <= 10) {
  loopNumber = newRandomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
   counter++;
   string += loopNumber + ", ";
   }
  return string;
}

console.log(random_number(1, 10));

//Exercise 3
function tripler(number){
    var tripled = Math.pow(number, 3);
    return tripled;
}
function multiply(num1, num2){
    var product = num1*num2;
    return product;
}
function divider(num1, num2){
    var quotient = num1/num2;
    return quotient;
}
function remainder(num1, num2){
    var remainderValue = num1%num2;
    return remainderValue;
}

console.log(remainder(divider(multiply(tripler(5), 12), 2), 3));

function factorialOfNum(num)
{
    var factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
}
console.log(factorialOfNum(5));

function thisThat(word1, word2, fizzNum, buzzNum){

  var counter = 1;
   while (counter <= 100){
    if (counter % fizzNum === 0 && counter % buzzNum ===0){
    console.log(word1 + word2);
                                              }
    else if (counter % buzzNum ===0){
      console.log(word1);}
     else if (counter % fizzNum ===0){
      console.log(word2);}
     else{
       console.log(counter);}
     counter++;
     }
}

thisThat("obtuse", "pickle", 6, 10);
