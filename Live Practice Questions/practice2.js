// QUESTION 1
//Write an if else statement to check if a number is even or odd

let num = 17;
// if (num%2 == 0) {
//     console.log(`${num} is even`)
// } else {
//     console.log(`${num} is odd`)
// }

// QUESTION 2
//Write a switch statement to check the day of the week. 
//If the day is a weekday, print "It's a weekday". 
//If the day is a weekend day, print "It's a weekend day".

let today = new Date().getDay();

switch (today) {
    case 0:
    case 6:
        console.log("It's a weekend day");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    default:
      console.log("This is not a day of the week, Try again.");
}


//Write a program that checks whether a password is strong or weak.
// A strong password should have at least 8 characters, a mix of upper and lowercase letters, and at least one number. 
//If the password is strong, print "Strong password". If the password is weak, print "Weak password".

let password = "PAssword3thi";

if (/^([a-zA-Z0-9]){8,}$/.test(password)){
    console.log("Strong password");
 
} else{
    console.log("Weak password");
}


//Write a program that takes three numbers as input and outputs the largest of the three numbers.
let num1=100
let num2=20
let num3=3

// if (num1>num2 && num1>num3){
//     console.log("Largest Number:", num1);
// } else if (num2>num1 && num2>num3){
//     console.log("Largest Number:", num2); 
// } else{
//     console.log("Largest Number:", num3);
// }

//OR 
function findLargestNum(num1,num2,num3){
    try {

        let largestNum = Math.max(num1,num2,num3);
        if (isNaN(largestNum)){
            throw error;
        } else {
            console.log(`Largest Number: ${largestNum}`);
        }
           
    } catch (error) {
        console.log(`Invalid Entry, Try Again!`);
    }   
}

findLargestNum(100,20,7);

//Write a program that takes numbers as input and outputs the largest of the numbers.
function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
   if (num > max_num) {
       max_num=num
   }
   }
    return max_num;
   }


console.log(`Largest Number in the List: ${find_max([91,2,54,785,6])}`);
