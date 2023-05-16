// Write a function declaration named addNumbers that takes two numbers as arguments and returns their sum.

function addNumbers (num1, num2){
    return num1 + num2;
}
// console.log(addNumbers(50,60))


// Write a function expression named multiplyNumbers that takes two numbers as arguments and returns their product.
const multiplyNumbers = function (num1, num2){
   return num1*num2;
};

// console.log(multiplyNumbers(50,60))


// Write a higher-order function named operateOnNumbers that takes three arguments: two numbers and a callback function. 
//The function should use the callback function to perform an operation on the two 
//numbers and return the result.

function operateOnNumbers(num1, num2, callback){
    return callback(num1, num2);
}

function divide(num1, num2){
    return num1 /num2;
}

// console.log(operateOnNumbers(10,5, divide));


// Rewrite the multiplyNumbers function as an arrow function.

let newMultiplyNumbers = (num1, num2) => num1*num2;

// console.log(multiplyNumbers(50,60))


// Write a function named greet that takes a name as an argument and returns a string greeting that includes the name.
function greet(name){
    return `Hello ${name}`;
}

// console.log(greet("Sondag"));


// Write a function named outerFunction that defines a variable and returns an inner function that references that variable. 
//Call the outer function and assign the inner function to a variable. Call the inner function.

function outerFunction(params) {

    let variable;
    
}

// Write a function named countDown that takes a number as an argument and logs a countdown from that number to 1, with a final message of "Blast off!".
function countDown(num) {

    for(let i=num; i>=1; i--){
        console.log(num);
        num--;
    }

    console.log("Blast off!");
    
}

// console.log(countDown(10));


// Write a function named getRandomInt that takes a minimum and maximum number as arguments and returns a random integer between them (inclusive).

function getRandomInt(min, max) {
    return Math.random(max)*(max-min)+min;
}

// console.log(getRandomInt(5,20));

// Write a function named isPrime that takes a number as an argument and returns true if the number is prime, and false otherwise.


// Write a function named calculateAverage that takes an array of numbers as an argument and returns the average of those numbers.
function calculateAverage(nums){
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

// console.log(calculateAverage([1,2,3,4,5]));

function average(array){
    
    array.reduce((a, b) => (a + b));

}

// let average = (a, b) => (a + b)

// Write a function named getArea that takes two arguments, a width and a height, and returns the area of a rectangle with those dimensions.
function getArea(width, height) {

    let area = width*height;
    return area;
}

// console.log(getArea(16,3));

// Write a function expression named divideNumbers that takes two numbers as arguments and returns their quotient.
let divideNumbers = function(num1, num2) {
    return num1/num2;
    };

console.log(divideNumbers(48,3));

// Write a higher-order function named operateOnString that takes a string and a callback function as arguments. 
//The function should use the callback function to transform the string and return the result.
function operateOnString(str, callback) {
    return callback(str);
}

function divideStr(string) {
    let stringArr = string.split(" ");
    let resultStr = stringArr.join(",")

    return resultStr;
}

let mainString = "Red Green Yellow Orange Blue";
// console.log(operateOnString(mainString, divideStr));

// Rewrite the divideNumbers function as an arrow function.
let divideNumbersArrow = (num1, num2) => num1/num2;

// Write a function named double that takes a number as an argument and returns its double.
let double = num => num*2;
console.log(double(num));

// Write a function named outerFunction that defines a variable and returns an inner function that 
//references that variable. Call the outer function and assign the inner function to a variable. 
//Call the inner function.
function outerFunction() {

    let variable = "this is it";

    return innerFunction(variable);
} 

outerFunction(innerFunction());
let someVar = innerFunction();
innerFunction();