/*
Define a Quadratic class 
new Quadratic(a, b, c) to create a quadratic 
in the form ax^2 + bx + c
*/
class Quadratic {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  //evaluate the quadratic expression at x
  evaluate(x) {
    return (this.a*Math.pow(x, 2)) + (this.b*x) + this.c
  }


  //we never have to print the quadratic to solve the problem, so this part is optional
  //still added it for debugging and progress check purposes
  toString() {
    let expression = ``;
    expression += `${this.a}x^2 `
    if (this.b > 0) {
      expression += `+ ${this.b}x `;
    } else if (this.b < 0) {
      expression += ` ${this.b}x `;
    }

    if (this.c > 0) {
      expression += `+ ${this.c}`;
    } else if (this.c < 0) {
      expression += ` ${this.c}`;
    }

    return expression;
  }
}

// check if number n is prime
function isPrime(n) {
  if (n < 2) {
    return null;
  }
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// generate array of primes under n
function genPrimes(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function solution() {
  let constantTerms = genPrimes(1000); //constant term has to be prime so that the value of the quadratic is a prime when evaluated at 0

  //object to hold quadratic with longest prime number streak for consecutive input values starting at 0
  //everytime we find a quadratic with a longer streak, we can update this object (line 89)
  let longestStreak = {
    quadratic: null,
    streakLength: 0
  }

  
  for (let i = 0; i < constantTerms.length; i++) {
    for (let b = -1000; b < 1000; b++) {
      let quadratic = new Quadratic(1, b, constantTerms[i]);
      
      let streak = 0;
      
      while (isPrime(quadratic.evaluate(streak))) { //while value of polynomial evaluated at n is prime,
        streak++ //n++
      }

      if (streak > longestStreak.streakLength) {
        longestStreak.quadratic = quadratic;
        longestStreak.streakLength = streak;
        console.log(`Just checked ${quadratic.toString()}, streak length of ${streak}`); //progress check, print the quadratic everytime one with the longest prime number streak so far is found
      }
    }
  }


  //log the product of the coefficient of the linear term and the constant term (the answer that the question's asking for)
  console.log(longestStreak.quadratic.b * longestStreak.quadratic.c);
}

solution();
