// find number of divisors of whole number n
function numberOfDivisors(n) {
  let divisors = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { //check for divisors until sqrt(n), and then double that amount of divisors by 2 (to make up for the other half of each factor pair) to get full amount of divisors
      divisors.push(i);
    }
  }
  
  return divisors.length * 2;
}

function solution() {
  let triangularNumber = 1;
  let count = 2;

  //keep generating triangular numbers in numerical order until one has 500 divisors 
  while (numberOfDivisors(triangularNumber) < 500) {
    triangularNumber += count;
    count++;
  }
  
  console.log(triangularNumber);  
}

solution();
