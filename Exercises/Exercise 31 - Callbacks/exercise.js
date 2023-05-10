function sayHelloName(callback) {
    console.log("Hello")
    callback(); 
};

function printName(params) {
    console.log("Summer")  
};

sayHelloName(printName);