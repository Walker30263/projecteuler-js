var number = (2n**1000n).toString(); //calculate 2^1000 and store it as a string

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += parseInt(number.charAt(i)); //loop through the number as a string and add each character (digit) to the sum
}

console.log(sum);
