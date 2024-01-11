/*
A fraction is resilient iff its numerator and denominator are coprime.
Thus, the resilience of a denominator can be related to Euler's totient function (phi(n) returns the number of numbers <= n which are coprime to n ) (Read https://infinitedescent.xyz/ to learn more about the number theory used in this solution)

R(d) = phi(d)/(d-1)

phi(d) = d * (1-1/p_1)*(1-1/p_2)*...(1-1/p_n) where p_1, p_2, ..., p_n are unique prime numbers that are factors of d (Read Page 288 of the aforementioned textbook for a detailed proof of this formula (Theorem 7.3.59))

Thus, we are trying to find the smallest number d such that (d * (1-1/p_1)*(1-1/p_2)*...(1-1/p_n))/(d-1) is less than 15499/94744

For approximation purposes, we can assume that d and (d-1) are going to be almost equal, and can focus on thinking 
about how to minimize (1-1/p_1)*(1-1/p_2)*...(1-1/p_n)

(1-1/p_n) is always going to be a number less than 1 but greater than 0, so the more (1-1/p_n) terms we have, the smaller the value of the product is going to be.
Thus, we want to multiply the first (1-1/p_n)s together (where the p_n's are the first x primes) until we get a R(product) that is less than 15499/94744.

After we do this, we'll have an array of the first x primes, and we'll know that
R(product of first x-1 primes) < 15499/94744 < R(product of first x primes)

Instead of checking R(d) for all numbers in the range (product of first x-1 primes) to (product of first x primes),
we can only check multiples of (product of first x-1 primes) in that range, because they won't have any additional prime factors
*/

const target = 15499/94744;

let primes = [];
let currentNumber = 2;

while (resilience(primes.reduce((accumulator, currentValue) => accumulator * currentValue, 1)) >= target) {
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
    }

    currentNumber++;
}

let productOfAll = primes.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
let productOfAllExceptLast = primes.slice(0, primes.length - 1).reduce((accumulator, currentValue) => accumulator * currentValue, 1);

for (let i = productOfAllExceptLast; i <= productOfAll; i += productOfAllExceptLast) {
    if (resilience(i) < target) { //if we go below our target, we have our answer!
        console.log(i); //our answer!
        break;
    }
}

//helper function
function resilience(d) {
    return phi(d)/(d-1);
}

//helper function
function phi(n) {
    let input = n; //for the end

    let primes = [];

    outerLoop: while (n !== 1) {
        innerLoop: for (let i = 2; i <= Math.floor(Math.sqrt(n)) + 1; i++) {
            if (i === Math.floor(Math.sqrt(n)) + 1) {
                primes.push(n);
                break outerLoop;
            }

            if (n % i === 0) {
                if (!primes.includes(i)) {
                    primes.push(i);
                }

                while (n % i === 0) {
                    n /= i;
                }

                break innerLoop;
            }
        }
    }

    //using the formula for phi(n)
    return Math.round(primes.reduce((accumulator, currentValue) => accumulator *= (1 - (1 / currentValue)), input)); // rounding to make up for floating point rounding errors
}