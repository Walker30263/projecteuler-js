/* Part 1: Generate prime numbers below 190: */

const primeNumbersBelow190 = [];

for (let i = 2; i <= 190; i++) {
    let isPrime = true;

    //since every composite number must have a prime factor less than or equal to its square root...
    for (let j = 0; j < primeNumbersBelow190.length; j++) {
        if (i % primeNumbersBelow190[j] === 0) {
            isPrime = false;
            break;
        }

        if (primeNumbersBelow190[j] > Math.floor(Math.sqrt(i))) {
            break;
        }
    }

    if (isPrime) {
        primeNumbersBelow190.push(i);
    }
}

/* Part 2: Finding the PSR (Psuedo Square Root) */
/* 
The pseudo square root of n is defined as the LARGEST divisor of n that doesn't exceed sqrt(n)
The pseudo square root of the product of all the primes below 190 is thus going to be a number composed of primes below 190 (with each prime occuring exactly once) such that it doesnot exceed sqrt(n)

To make calculations easier, we can log everything, remembering our log properties:
log(ab) = log(a) + log(b)
and
log(a^b) = b*log(a)
*/

const logOfPrimeNumbersBelow190 = [];

primeNumbersBelow190.forEach(p => {
    logOfPrimeNumbersBelow190.push(Math.log(p));
});

//our "target" is going to be the log of the square root of the product of all the prime numbers below 190, which we can find by summing the array and dividing by 2, based on log properties
const target = 0.5 * logOfPrimeNumbersBelow190.reduce((accumulator, element) => {
    return (accumulator + element)
});

//we now want to find the subset of logOfPrimeNumbersBelow190 that has a sum closest to target without going over it
//Instead of brute forcing and testing all subsets, we can use the Meet in the Middle algorithm

let firstHalf = logOfPrimeNumbersBelow190.slice(0, Math.floor(logOfPrimeNumbersBelow190.length/2));
let secondHalf = logOfPrimeNumbersBelow190.slice(Math.floor(logOfPrimeNumbersBelow190.length/2), logOfPrimeNumbersBelow190.length);

//helper function to return an array of objects containing attributes subset and sum, containing all possible subsets of an inputted array
function subsetSums(arr) {
    let subsets = [[]];
    let result = [];

    //iterate through items in the array
    for (let i = 0; i < arr.length; i++) {
        let currentSubsets = subsets.slice(); //create a temporary copy of subsets

        for (let j = 0; j < currentSubsets.length; j++) {
            let newSubset = currentSubsets[j].concat(arr[i]); //add the current element to each existing subset to make new subsets and then add the new subsets to the array of subsets
            subsets.push(newSubset);
        }
    }

    //sum all the subsets
    subsets.forEach((subset) => {
        let sum = subset.reduce((accumulator, element) => {
            return (accumulator + element)
        }, 0);

        result.push({
            subset: subset,
            sum: sum
        });
    });

    return result;
}

const firstHalfSums = subsetSums(firstHalf);
const secondHalfSums = subsetSums(secondHalf);

//sort them in ascending order
firstHalfSums.sort((a, b) => a.sum - b.sum);
secondHalfSums.sort((a, b) => a.sum - b.sum);

let firstHalfIterator = 0;
let secondHalfIterator = secondHalfSums.length - 1;

let closestSumFoundSoFar = {
    sum: -Infinity,
    firstHalfIterator: null,
    secondHalfIterator: null
};

//iterate through the 2 arrays, starting at the beginning of the first one and at the end of the first one
while ((firstHalfIterator < firstHalfSums.length-1) && (secondHalfIterator > 0)) {
    let sum = firstHalfSums[firstHalfIterator].sum + secondHalfSums[secondHalfIterator].sum;

    //if the sum of the current pair is too high, decrement the secondHalfIterator, so the sum gets lower
    if (sum > target) {
        secondHalfIterator--;
    } else { //otherwise, if the sum is greater than the closestSumFoundSoFar, update the object
        if (sum > closestSumFoundSoFar.sum) {
            closestSumFoundSoFar.sum = sum;
            closestSumFoundSoFar.firstHalfIterator = firstHalfIterator;
            closestSumFoundSoFar.secondHalfIterator = secondHalfIterator;
        }

        firstHalfIterator++; //and increase the firstHalfIterator in hopes of finding an even larger sum that's smaller than the target
    }
}

//the hard part's over, we now have the logarithms of the prime numbers whose sum is the closest to the target value
let logarithmsOfPrimesWeWant = firstHalfSums[closestSumFoundSoFar.firstHalfIterator].subset.concat(secondHalfSums[closestSumFoundSoFar.secondHalfIterator].subset);

//raise e to the power of the logarithms to undo the logs, and then round it just to make up for rounding errors when we first took the logarithm
let primesWeWanted = logarithmsOfPrimesWeWant.map((x) => Math.round(Math.exp(x)));

//we should now have an array of the prime numbers whose product is the pseudo square root of the product of all the primes below 190
console.log(primesWeWanted);

//take the product of all the prime numbers in the primesWeWanted array, and mod it 10^16 each time we multiply another number with the accumulator
let answer = primesWeWanted.reduce((accumulator, currentValue) => ((accumulator * BigInt(currentValue)) % (10n**16n)), 1n);

console.log(answer.toString()); //our answer!!