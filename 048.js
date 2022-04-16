//n at the end of numbers because we're using BigInt
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt for reference

let sum = 0n; //cumulative variable to add to

for (let i = 1n; i <= 1000n; i++) {
 sum += i ** i; //add self-power (i^i) to the cumulative sum
}

console.log(sum.toString().substring(sum.toString().length - 10)) //print last 10 digits of sum as a string
