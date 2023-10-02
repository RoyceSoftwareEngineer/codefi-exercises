//exercise 1
function greet( name= 'Royce'){
console.log(`${name} Hello, how are you today?`)
};
greet()
greet()
greet()
greet()
//prints a dynamically changing greeting to console.

//exercise 2
function multiply(number1,number2){
    return number1*number2;
};
let result =multiply(5,6);
console.log(result);
//prints the product to console.

//exercise 3
const person={
    name:'Royce',
    age:38,
    gender:'Male'
};
console.log(person);
//prints the person properties to the console.

//exercise 4
let car={
    make: 'Ford',
    model: 'Mustang',
    year: 2003,
};
console.log(car);
//prints properties for car to the console.

//exercise 5
let str="hello";
function reverseString(str){
    var splitString = str.split("");
    ["h", "e", "l", "l","o"];
    var reverseArray= splitstring.reverse();
    ["o","l","l","e","h"];
    var joinArray= reverseArray.join("");
    return joinArray;

}
console.log(str);
// no idea why this wont work for me.
