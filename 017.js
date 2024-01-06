//function that takes a natural number n between 1 and 1000 as input and returns a string of its "word form"
function numberToWord(n) {
    //listing out 1-19 in an array such that numbers[n] will return n in word form
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const numbersTimes10 = [null, null, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (n < 20) {
        return numbers[n];
    } else if (n < 100) {
        let wordForm = "";

        let tens = Math.floor(n / 10); 
        let ones = n - (10 * tens);

        wordForm += numbersTimes10[tens];
        
        if (ones > 0) {
            wordForm += "-"; //adding a hyphen between tens and ones because that's how they do it on the problem page (we remove the hyphen later when finding the length of the word tho so idk why i added this)
            wordForm += numbers[ones];
        }

        return wordForm;
    } else if (n < 1000) {
        let wordForm = "";

        let hundreds = Math.floor(n / 100);
        let restOfTheNumber = n - (100 * hundreds);

        wordForm += `${numbers[hundreds]} hundred`;

        if (restOfTheNumber > 0) {
            wordForm += " and ";
            wordForm += numberToWord(restOfTheNumber); //we love recursion
        }

        return wordForm;
    } else {
        return "one thousand";
    }
}

// "Do not count spaces or hyphens."
function length(wordFormString) {
    wordFormString = wordFormString.split(" ").join(""); //gets rid of spaces
    wordFormString = wordFormString.split("-").join(""); //gets rid of hyphens

    return wordFormString.length;
}

let sum = 0; // accumulator variable 

for (let i = 1; i <= 1000; i++) {
    sum += length(numberToWord(i));
}

console.log(sum); // the answer!