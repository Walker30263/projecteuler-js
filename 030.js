function canBeWrittenAsSumOfFifthPowersOfDigits(number) {
  let numAsStr = number.toString(); //convert the inputted number into a string so we can iterate through it "letter by letter" (digit by digit)

  let sum = 0; //variable to hold sum of fifth powers of digits
  
  for (let i = 0; i < numAsStr.length; i++){
    sum += Math.pow(parseInt(numAsStr.charAt(i)), 5); //raise each digit to the fifth power and add to the sum variable
  }

  if (sum === number) { //check if the sum is equal to the inputted number
    return true;
  } else {
    return false;
  }
}

let numbers = []; //array to hold numbers that can be written as the sum of the fifth powers of their digits

/*
  finding the upper bound to test to:
  n * 9^5 where n is the number of digits
  when n = 5, 295245 is n * 9^5
  when n = 6, 354294 is n * 9^5
  therefore, we don't have to check anything with 6 digits or above
*/

for (let i = 2; i < 1000000; i++) {
  if (canBeWrittenAsSumOfFifthPowersOfDigits(i)) {
    numbers.push(i);
  }
}

let add = (a, b) => a + b; //define a reducer function to easily take the sum of all values in an array

console.log(numbers.reduce(add)); //should output the answer!
