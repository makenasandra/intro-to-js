const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];


function printMsg(array){

    for (let index = 0; index < array.length; index++) {
        if(array[index].hobby == 'gamer'){
            console.log(`${array[index].name} \nLife Is a Game, Play to Win!`);
        }
        
        if(array[index].hobby == 'sportsman'){
            console.log(`${array[index].name} \nNever give up!`);
        };

        if(array[index].hobby == 'photographer'){
            console.log(`${array[index].name} \nA picture is worth a thousand words!`);
        };  
    };
    
    console.log(`The youngest is ${findYoungest(array)}`);
    console.log(`The longest surname ${findLongestName(array)}`);
    
}

function findYoungest(array){

    let youngest ="y";
    let age = array[0].age;

    for (let index = 0; index < array.length; index++) {
       if (array[index].age <= age) {
        youngest = array[index].name;
        // console.log(youngest);
       } 
    }
    

    return youngest;
}

function findLongestName(array){

    let longestSurname = array[0].surname;

    for (let index = 0; index < array.length; index++) {
        if (array[index].surname.length > longestSurname.length) {
            longestSurname = array[index].surname;
            // console.log(longestSurname);
        } 
     }

     return longestSurname;
}

// printMsg(students);

//add new student to student array
students.splice(2, 0, { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'});

// console.log(students);

printMsg(students);


