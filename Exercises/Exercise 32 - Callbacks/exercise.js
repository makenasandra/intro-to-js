function sayHelloName(callback) {

    setTimeout(function(){
        console.log(`Hello`)
        callback();
    }, 1000);
    
};

function printName(params) {
    console.log("Summer")  
};

sayHelloName(printName);

