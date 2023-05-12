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


