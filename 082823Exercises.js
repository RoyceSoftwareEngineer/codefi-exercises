//exercise 1//
console.log('hello World!')
//this should print Hello World! to the console.

//exercise 2//
var Name=('Royce');
console.log(Name);
//prints Royce on the console//

//exercise 3//
let x=5;
let y=4;
 let rectangleArea=x*y
console.log(rectangleArea)
//This prints the area of the rectangle in the console//

//exercise 4//
const number= prompt('Enter a number: ');
if (number % 2==0){
    console.log('This number is even.');
}
else {
    console.log('This number is odd.');
}
//this prompts for an number input and priints to the console if the
//number is odd or not//

//exercise 5//
function countTen(){
for(var i=1; i<=10; i++){
    console.log(i);
}}

countTen();
//This prints numbers 1 through 10 in console.//

//exercise 6//
const name= prompt('What is your name?');
function greet(prompt){
    console.log('Hello,' +name+ '!');
}
greet(prompt);
//This prints a unique greeting based on input//

//exercise 7//
const Number= parseInt(prompt('Enter a positive interger: '));
if(Number<0){
    console.log('A factorial for a negative number does not exist!');
}
else if(Number === 0){
    console.log(`the factorial of ${Number} is 1`);
}
else{
    let fact=1;
    for(i=1; i <=Number; i++){
        fact*=i;
    }
    console.log(`The factorial of ${Numbe} is ${fact}.`);
}
//This prints out the factioria of a given number based on the input
//given.//

//exercise 8//
let year=prompt('Enter a year: ');
// Convert the input to a number
//year = Number(year);
// Check if the input is valid
if (isNaN(year)) {
  // Display an error message
  console.log("Invalid input. Please enter a valid year.");
} else {
  // Check if the year is a leap year
  let isLeapYear = false;
  if (year % 4 === 0) {
    // The year is divisible by 4
    if (year % 100 === 0) {
      // The year is divisible by 100
      if (year % 400 === 0) {
        // The year is divisible by 400
        isLeapYear = true;
      }
    } else {
      // The year is not divisible by 100
      isLeapYear = true;
    }
  }

  // Display the result
  if (isLeapYear) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}
//prints out whether a given year is a leap year or not.

