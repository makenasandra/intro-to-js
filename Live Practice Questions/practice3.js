//Q1
// Create an array named "fruits" with three elements: 
// Access and print the second element of the "fruits" array.

let fruits = ["apple", "banana", "orange"];


// fruits.forEach(fruit => console.log(fruit));

//Q2
//Create an array named "numbers" with five elements: 1, 2, 3, 4, 5.
//use the "join" method to join the elements of the "numbers" array 
//into a string separated by a comma then print it
let numbers = [1, 2, 3, 4, 5];

let numStr = numbers.join(",");

// console.log(numStr);

//Use the "slice" method to create a new array "slicedNumbers" containing the elements 
//from index 1 to index 3 of the "numbers" array.

let slicedNumbers = numbers.slice(1,4); //slice doesn't include last index
 
// console.log(slicedNumbers);


//Use the "map" method to double each element in the "numbers" array and store the result 
//in a new array "doubledNumbers".

let doubledNumbers = numbers.map(num=> num*2);

// console.log(doubledNumbers);

//Write a function called "reverseArray" that takes an array as an argument and returns a 
//new array with the elements in reverse order.

let originalArray = [1, 2, 3, 4, 5];

function reverseArray(array){
    let newArray = array.reverse();
    return newArray;
}

console.log(reverseArray(originalArray));

