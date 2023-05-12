let numbers = [50,7,5,1,58,90,12,44,67, 49, 45, -34, -43, 2, 1, 45, 23, 6, 3, 8, 2];

function findPrimeNumbers(numbers){

    let primeNumbers = [];
    let isPrime = true;

    for (let index = 0; index < numbers.length; index++) {

        const s = Math.sqrt(numbers[index]); // store the square to loop faster

        for(let i = 2; i <= s; i ++) { // start from 3, stop at the square, increment in twos
            if(numbers[index] % i == 0) { // modulo shows a divisor was found
                // console.log(numbers[index])
                isPrime = false;
                break;
            } 
            isPrime=true;
        }

        
        if(isPrime && numbers[index] > 1 ){ // negatives // even numbers removed
            // console.log(numbers[index])
            primeNumbers.push(numbers[index]);
        }
       
    }

    return primeNumbers;
}

console.log(findPrimeNumbers(numbers));

