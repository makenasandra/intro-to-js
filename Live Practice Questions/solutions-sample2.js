// Create an object car with properties make, model, and year.
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.startCar = () => {
        console.log(`Starting ${this.make} ${this.model}`)
    };
    
    this.driveCar = (distance) => {
        console.log(`Driving ${distance} miles`)
    };
    
    this.stopCar = ()=> {
        console.log(`Stopping ${this.make} ${this.model}`)
    }
}

let rolls = new Car("Rolls Royce", "Phatom", 2020);
rolls.startCar();
rolls.driveCar(30);
rolls.stopCar();

// Add a method start to the car object that logs the message "Starting [make] [model]".

// Add a method drive to the car object that takes a distance parameter and logs the message "Driving [distance] miles".

// Add a method stop to the car object that logs the message "Stopping [make] [model]".

// Create an object person with properties name, age, and gender.

// Add a method greet to the person object that logs the message "Hello, my name is [name].".

// Add a method celebrateBirthday to the person object that increments the age property by 1.

// Create an object rectangle with properties width and height.

// Add a method getArea to the rectangle object that returns the area of the rectangle (width * height).

// Add a method getPerimeter to the rectangle object that returns the perimeter of the rectangle (2 * (width + height)).

// Create an object bankAccount with properties balance and accountNumber.

// Add a method deposit to the bankAccount object that takes a amount parameter and adds it to the balance property.

// Add a method withdraw to the bankAccount object that takes a amount parameter and subtracts it from the balance property.

// Add a method getBalance to the bankAccount object that returns the current balance.

// Create a constructor function Student with properties name, major, and year.

// Add a method changeMajor to the Student prototype that takes a newMajor parameter and sets the major property to the new value.

// Add a method graduate to the Student prototype that sets the year property to the next year (i.e., if the current value is 2023, it becomes 2024).

// Create an object triangle with properties side1, side2, and side3.

// Add a method isEquilateral to the triangle object that returns true if all three sides are equal length, and false otherwise.

// Add a method isIsosceles to the triangle object that returns true if at least two sides are equal length, and false otherwis