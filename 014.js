//accumulator
let longestChainLength = {
    number: 0,
    length: 0
};

for (let i = 1; i <= 1000000; i++) {
    let sequence = [i];

    while (sequence[sequence.length - 1] !== 1) { //repeat the Collatz algorithm until we arrive at 1
        let lastTerm = sequence[sequence.length - 1];
        if (lastTerm % 2 === 0) { //if the last term is even...
            sequence.push(lastTerm / 2);
        } else { //if the last term is odd...
            sequence.push((3 * lastTerm) + 1);
        }
    }

    if (sequence.length > longestChainLength.length) {
        longestChainLength.length = sequence.length;
        longestChainLength.number = i;
    }
}

console.log(longestChainLength.number); //our answer!