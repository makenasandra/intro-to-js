// QUESTION 1
//Write an if else statement to check if a number is even or odd


//Write a switch statement to check the day of the week. 
//If the day is a weekday, print "It's a weekday". 
//If the day is a weekend day, print "It's a weekend day".


// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         console.log("It's a weekend day");
//     default:
//       console.log("It's a weekday");
// }


//Write a program that checks whether a password is strong or weak.
// A strong password should have at least 8 characters, a mix of upper and lowercase letters, and at least one number. 
//If the password is strong, print "Strong password". If the password is weak, print "Weak password".

let password = "PAssword3thi";
let hasNumber = /\d/.test(password);
let hasUpperCase = /[A-Z]/.test(password);
let hasLowerCase = /[a-z]/.test(password);

// if (password.length>=8 && hasNumber &&  hasUpperCase && hasLowerCase){
//     console.log("Strong password");
 
// } else{
//     console.log("Weak password");
// }


//Write a program that takes three numbers as input and outputs the largest of the three numbers.


let num1=100
let num2=20
let num3=3

if (num1>num2 && num1>num3){
    console.log("Largest Number:", num1);
} else if (num2>num1 && num2>num3){
    console.log("Largest Number:", num2); 
} else{
    console.log("Largest Number:", num3);
}


function findLargestNum(num1,num2,num2){
    try {
        let largestNum = Math.max(num1,num2,num2);
        console.log(`Largest Number: ${largestNum}`);
        
    } catch (error) {
        console.log(`Invalid Entry`);
    }   
}

findLargestNum(100,20,3);