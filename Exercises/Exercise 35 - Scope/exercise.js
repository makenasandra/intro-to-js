// function canPlay() {
//   let sport = " Football";

//   if (true) {
//     let personName = "Cosimo";
//   }

//   console.log(personName + sport);
// }

// canPlay();

//personName is declared within the if statement scope thus cannot be accessed outside that scope. Any
//attempt to access it outside that scope results in an error

//Solution

function canPlay() {
  let sport = " Football";
  let personName;

  if (true) {
    personName = "Cosimo"; 
  }

  console.log(personName + sport);
}

canPlay();