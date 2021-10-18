//function that returns F_n where F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, etc.
function fibonacci(n) {
  let fibonacci = [1n, 1n]; //create an array of first 2 terms in the sequence

  while (fibonacci.length < n) {
    fibonacci.push(fibonacci[BigInt(fibonacci.length)-1n] + fibonacci[BigInt(fibonacci.length)-2n]) //push the sum of the last 2 terms, because that's the fibonacci sequence rule
  }

  return fibonacci[BigInt(fibonacci.length)-1n]; //return the last element of the array since it's the nth fibonacci number
}

let index = 1n;

while (fibonacci(index).toString().length < 1000) { //keep generating fibonacci numbers until there's one that's 1000 digits long
  index++;
}

console.log(index); //outputs answer
