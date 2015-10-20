//Countin' Count Code Exercise 2
console.log("I am called the Count... because I really love to count!");
var startNum = prompt("What is the starting Number?");
var imDone = "";
var lastNum = prompt("What is the ending Number?");
while (startNum < lastNum) {
  startNum++;
  if (startNum < lastNum) {
    imDone += startNum + ", ";
  }
  else {
      imDone += startNum;
    }
}
console.log(imDone);
console.log('fin!');
