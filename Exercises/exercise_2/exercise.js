let numbersArr = [50,7,5,1,58,90,12,44,67, 49, 45, -34, -43, 2, 1, 45, 23, 6, 3, 8, 2];

function findPrimeNumbers(numbers){

    let primeNumbers = [];
    

    for (let index = 0; index < numbers.length; index++) {
        let isPrime = true;

        if (numbers[index] <= 1) {
            isPrime = false;
        } else {
            s = Math.sqrt(numbers[index]);
            for (let i = 2; i <= s; i++) {
                if (numbers[index]%i === 0 ) {
                    isPrime = false;
                    break
                }   
            }

       }

       if (isPrime) {
        primeNumbers.push(numbers[index])
       }
      
        
    }

    return primeNumbers;
}

console.log(findPrimeNumbers(numbersArr));

