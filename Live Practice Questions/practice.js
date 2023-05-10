
// let person = {
//     name: "Winter Fade",
//     age: 45,
//     address:{
//         street: "kimathi",
//         city: "Mombasa"
//     }
    
// }

// console.log(person.address);

// function updateAddress(obj, newAdress){
//     obj.address = newAdress;
// }

// updateAddress(person, {
//     street: "ring road",
//     city: "Nairobi"
// });

// console.log(person.address);

//Q2
// Create a constructor function called Car that represents a car. 
// It should have properties like make, model, and year. 
// Add a method start() to the Car prototype that logs a message "The car is starting" when called.

function Car (make, model, year){

    this.make = make;
    this.model = model;
    this.year = year;

    Car.prototype.start = function (){
        console.log("Car is starting");
    }

}

let myCar = new Car("Benz", "C19", "2022");

myCar.start();