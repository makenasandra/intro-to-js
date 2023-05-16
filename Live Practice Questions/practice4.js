//Q1
//Write a function called gradeEvaluator that takes a numerical grade as an argument and returns 
//the corresponding letter grade based on the following scale: 90 or above: "A" 80-89: "B" 70-79: 
//"C":60-69: "D":Below 60: "F":Test the function with an array of grades [85, 92, 78, 60, 95] and 
//display the corresponding letter grade for each grade using a loop.

function gradeEvaluator(gradeArr){

    for (let index = 0; index < gradeArr.length; index++) {
        console.log(gradeArr[index]);
        
        if (gradeArr[index]>90) {
            console.log(`Grade: ${gradeArr[index]} - A`);
        } else {
            
        }
        
        }

        
    }
   


let grades = [85, 92, 78, 60, 95];

// gradeEvaluator(grades);


//Create an object called Rectangle with properties width and height. Add a method called 
//calculateArea to the object's prototype that calculates and returns the area of the rectangle. 
//Create two instances of Rectangle with different dimensions and call the calculateArea method for each instance.
function Rectangle(width, height){

    this.width = width;
    this.height = height;

}

Rectangle.prototype.calculateArea = function() {
    return  this.width*this.height
    };

let rect = new Rectangle(3,4);
let rect2 = new Rectangle(4,5);

// console.log(rect.calculateArea());
// console.log(rect2.calculateArea());

//Declare a variable called myString and assign it a value of "123". Convert myString to a number 
//and store the result in a new variable called myNumber. Finally, compare myString and myNumber 
//using the strict equality operator (===) and store the result in a variable called isEqual.

let myString = "123";
let myNumber = Number(myString);

let isEqual = myString===myNumber;

console.log(isEqual);



//Create a variable called age and assign it a numeric value. Use the Conditional (ternary) operator. 
//If the variable is greater or equal to 18, print You can drive a car. If the variable is less than 18, 
//print You are too young to drive.
let age = 18;
// age >= 18 ? console.log("You can drive a car") : console.log("You are too young to drive" );

//Create two boolean variables called isSunnyDay and isHomeworkCompleted. Assign them a value. 
//Use the Ternary Operator in order to print Jesse can go out to play, if both variables are true. 
//If one of them or both are false print Jesse stays at home.
let isSunnyDay = true;
let isHomeworkCompleted = false
 
// isSunnyDay && isHomeworkCompleted ? console.log("Jesse can go out to play") : console.log("Jesse stays at home") 


let number = -7;

// 

// Print in the console the price of the room according to the following scheme:
// Prince for Basic Room --> 50€
// Price for Junior Suite Room --> 80€
// Price for Master Suite --> 100€

let room = "Basic Room";

// switch (room){
//     case "Basic Room":
//         console.log(`Price: 50€`)
//         break;
//     case "Junior Suite Room":
//         console.log(`Price: 80€`)
//         break;
//     case "Master Suite":
//         console.log(`Price: 100€`)
//         break;
//     default:
//         console.log(`No such room available`);
// }

//Create two functions: the first one is called sayHelloName and takes is as parameter another 
//function (the second one) called printName. -The printName function should just execute the 
//console.log() method and print the name. The sayHelloName that takes in the callback as parameter,
//must execute the console.log() of the "Hello" string and after that invoke the function taken in as 
//parameter.

function sayHelloName(callback){
    console.log("Hello")
    callback();
}

function printName(name){
    console.log("Nani");
}

// sayHelloName(printName)

// Starting from the exercise 31, we want to print the "Hello" "Name" strings after one second. In order to achieve this, we can use the setTimeout() JavaScript function. This function takes in two parameters: the first one is a function, the second one is the delay time.

function sayHelloName(callback){
    setTimeout(()=> {
        console.log("Hello")
        callback();
    }, 1000)
    
}

function printName(name){
    console.log("Nani");
}

// sayHelloName(printName);

//In the code below we have an object literal called user that has two properties: name and age. If we try to create a newUser starting from user and, after that, we try to change the name, you'll notice that even the original user has been modified. How can we modify the name of newUser without changing the name of user?

let user = {
    name: "Cosimo",
    age: 30,
};
    
let newUser = {}
Object.assign(newUser, user);


newUser.name = "Paolo";

console.log(newUser);
console.log(user);

