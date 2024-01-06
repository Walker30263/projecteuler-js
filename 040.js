/*
This problem can also be solved using math...but I made a bashy program solution anyways since it's like 5 lines of code
Also made a less bashy program solution using the following algorithm because I'm bored

By concatenating all x-digit long natural numbers, we will obtain a string x * 9 * 10^(n-1) characters long

Let c(x) be a function that returns the length of the string obtained by concatenating all x-digit long natural numbers:

c(0): 0-character long string (duh)
c(1): 9-character long string
c(2): 180-character long string
c(3): 2700-character long string
c(4): 36000-character long string
c(5): 450000-character long string
c(6): 5400000-character long string

Thus, to find the nth digit in C_10 (Base 10 Champernowne's Constant), we can use the following algorithm:
Starting at k = 0, subtract c(k) from n until n' <= c(k+1). Then, nth digit is contained in the ceil(n' / (k+1))-th k+1-digit number.
Index of nth digit in the number will be equal to n' % k+1. (If 0 then (n' % k+1)-th position)

1st digit: 1 - c(0) = 1 = n' <= c(1). 1st digit is contained in the ceil(1 / 1) = 1st 1-digit number = 10^(1-1) + 1 - 1 = "1". Index of digit in "1" = 1 % 1 = 0, so 1st position. 
Therefore, 1st digit = 1.
10th digit: 10 - c(0) - c(1) = 1 = n' <= c(2). 10th digit is contained in the ceil(1 / 2) = 1st 2-digit number = 10^(2-1) + 1 - 1 = "10". Index of digit in "10" = 1 % 2 = 1, so 1st position.
Therefore, 10th digit = 1.
100th digit: 100 - c(0) - c(1) = 91 = n' <= c(3). 100th digit is contained in the ceil(91 / 2) = 46th 2-digit number = 10^(2-1) + 46 - 1 = "55". Index of digit in "55" = 91 % 2 = 1, so 1st position.
Therefore, 100th digit = 5.
1000th digit: 1000 - c(0) - c(1) - c(2) = 811 = n' <= c(3). 1000th digit is contained in the ceil(811 / 3) = 271th 3-digit number = 10^(3-1) + 271 - 1 = "370". Index of digit in "370" = 811 % 3 = 1, so 1st position.
Therefore, 1000th digit = 3.
10000th digit: 10000 - c(0) - c(1) - c(2) - c(3) = 7111 = n' <= c(4). 10000th digit is contained in the ceil(7111 / 4) = 1778th 4-digit number = 10^(4-1) + 1778 - 1 = "2777". Index of digit in "2777" = 7111 % 4 = 3, so 3rd position.
Therefore, 10000th digit = 7.
100000th digit: 100000 - c(0) - c(1) - c(2) - c(3) - c(4) = 61111 = n' <= c(5). 100000th digit is contained in the ceil(61111 / 5) = 12223th 5-digit number = 10^(5-1) + 12223 - 1 = "22222". Index of digit in "22222" = 61111 % 5 = 1, so 1st position.
Therefore, 100000th digit = 2.
1000000th digit: 1000000 - c(0) - c(1) - c(2) - c(3) - c(4) - c(5) = 511111 = n' <= c(6). 1000000th digit is contained in the ceil(511111 / 6) = 85186th 6-digit number = 10^(6-1) + 85186 - 1 = 185185. Index of digit in "185185" = 511111 % 6 = 1, so 1st position.
Therefore, 1000000th digit = 1.

Thus, the answer is 1 * 1 * 5 * 3 * 7 * 2 * 1 = 210.
*/



//Bashy solution:

let champernownesConstant = "";

for (let i = 1; i <= 500000; i++) { //string should definitely be at least a million characters long now 
    champernownesConstant += i;
}

let answer = parseInt(champernownesConstant.charAt(1 - 1)) * parseInt(champernownesConstant.charAt(10 - 1)) * parseInt(champernownesConstant.charAt(100 - 1)) * parseInt(champernownesConstant.charAt(1000 - 1)) * parseInt(champernownesConstant.charAt(10000 - 1)) * parseInt(champernownesConstant.charAt(100000 - 1)) * parseInt(champernownesConstant.charAt(1000000 - 1));
console.log(answer);





//Algorithmic solution:

//function that returns the nth digit in C (Champernowne's Constant in Base 10) using the algorithm described at the top of the code
function nthDigitInC(n) {
    let k = 0;
    let m = n;

    // "Starting at k = 0, subtract c(k) from n until n' <= c(k+1)." (here we're just calling n' "m")

    while (m > lengthOfStringOfAllXDigitNumbersConcatenated(k+1)) {
        m -= lengthOfStringOfAllXDigitNumbersConcatenated(k+1);
        k++;
    }

    

    // "Then, nth digit is contained in the ceil(n' / (k+1))-th k+1-digit number."

    let numberDigitIsContainedIn = (10**(k)) + Math.ceil(m / (k + 1)) - 1;

    // "Index of nth digit in the number will be equal to n' % k+1. (If 0 then (n' % k+1)-th position)"

    let index = m % (k+1);

    if (index === 0) {
        return numberDigitIsContainedIn.toString().charAt(index);
    } else {
        return numberDigitIsContainedIn.toString().charAt(index - 1);
    }
}

//helper function that returns the returns the length of the string obtained by concatenating all x-digit long natural numbers
function lengthOfStringOfAllXDigitNumbersConcatenated(x) {
    return (x * 9 * (10 ** (x-1)))
}

let answer2 = 1; //accumulator kinda

for (let i = 0; i <= 6; i++) {
    answer2 *= nthDigitInC(10 ** i);
}

console.log(answer2);