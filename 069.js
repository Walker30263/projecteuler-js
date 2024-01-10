/*
    phi(n) = n * (1-1/p_1)*(1-1/p_2)*...(1-1/p_n) where p_1, p_2, ..., p_n are unique prime numbers that are factors of n (Read Page 288 of this textbook for a detailed proof of this formula (Theorem 7.3.59): https://infinitedescent.xyz/dl/infdesc.pdf)


    we are trying to maximize n/phi(n), which can be simplified to
    1/((1-1/p_1)*(1-1/p_2)*...(1-1/p_n)) based on the formula for phi(n)

    To maximize 1/((1-1/p_1)*(1-1/p_2)*...(1-1/p_n)), we can focus on MINIMIZING the denominator

    Now, our problem is to minimize (1-1/p_1)*(1-1/p_2)*...(1-1/p_n)
    Since all of our p's are going to be positive, all of our (1-1/p)s are going to be numbers in the range (0, 1)
    Thus, everytime we multiply another (1-1/p), the value of (1-1/p_1)*(1-1/p_2)*...(1-1/p_n) is going to get smaller, as desired.

    Thus, we want the number <= 1,000,000 with the largest number of UNIQUE PRIME FACTORS.
    To do this, we can just multiply the first x primes together but stop right before we get a product greater than one million
*/

//initialize with 2 as our first prime
let accumulator = 2;
let primes = [2];
let currentNumber = 3;

while (accumulator < 1000000) {
    let isPrime = true;

    //since every composite number must have a prime factor less than or equal to its square root...
    for (let j = 0; j < primes.length; j++) {
        if (currentNumber % primes[j] === 0) {
            isPrime = false;
            break;
        }

        if (primes[j] > Math.floor(Math.sqrt(currentNumber))) {
            break;
        }
    }

    if (isPrime) {
        primes.push(currentNumber);

        if (accumulator * currentNumber > 1000000) {
            console.log(accumulator); //our answer!
            break;
        }

        accumulator *= currentNumber;
    }

    currentNumber++;
}