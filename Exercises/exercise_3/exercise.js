function printNames(obj){
    let newArray = [];
    for (const key in obj) {
        // console.log(typeof(obj[key]));
        if (typeof obj[key] === "string" && obj[key].length > 5) {
            newArray.push(obj[key]);
        }
    }
    return newArray;
}

const students = { id: 1, name: "Luca", surname: "Rossile", age: 20 };


console.log(printNames(students));