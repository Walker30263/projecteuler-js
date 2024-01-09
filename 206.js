/*
We can use some basic number theory to simplify our problem.

First of all, since the square ends in a 0, we can immediately deduce that it eneds in a 00, since it must be divisible by 10, and since 10 is not a square, then 10^2 must be a factor -> ends in 00

Thus, our problem now is to find a square of the form 1_2_3_4_5_6_7_8_9.
Since the square ends in a 9, the integer must end in a 3 or a 7.

Our bounds for the brute force algorithm are going to be sqrt(1023040506070809) to sqrt(19293949596979899), cases where all gaps are 0s and 9s, respectively
Math.floor(Math.sqrt(1023040506070809)) = 31985004
Math.ceil(Math.sqrt(19293949596979899)) = 138902663

As said before, the integer must end in a 3 or a 7, so we can do this in 2 parts:
First check all the numbers between 31985013 and 138902663 that end in 3s
If we still haven't found our answer, check all the numbers between 31985007 and 138902657 that end in 7s
*/

//helper function to check if inputted number is of the form 1_2_3_4_5_6_7_8_9
function numberOfTargetForm(n) {
    n = n.toString();

    if ((n.length != 17) || (n.charAt(0) != "1")) { //immediately invalid if it's not 17 chars long or doesn't start with a 1
        return false;
    } 

    for (let i = 2; i < n.length - 1; i += 2) { //iterate through the string's even positions and make sure each even-position digit is 1 more than the one 2 positions before it
        if (parseInt(n.charAt(i)) !== parseInt(n.charAt(i-2)) + 1) {
            return false;
        }
    }

    return true;
}

let foundAnswer = false;
let answer = null;

for (let i = 31985013n; i <= 138902663n; i += 10n) {
    if (numberOfTargetForm(i**2n)) {
        foundAnswer = true;
        answer = i;
        break;
    }
}

if (!foundAnswer) {
    for (let i = 31985007n; i <= 138902657n; i += 10n) {
        if (numberOfTargetForm(i**2n)) {
            foundAnswer = true;
            answer = i;
            break;
        }
    }
}

console.log((answer*10n).toString()); //our answer! (remember the square from the question ends in a 00 so we have to multiply the 10 back)