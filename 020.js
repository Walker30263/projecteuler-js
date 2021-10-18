//function that calculates the factorial of n using a while loop
function factorial(n) {
  let result = 1n;
  while (n > 1n) {
    result *= n;
    n -= 1n;
  }

  return result;
}

//function that calculates sum of all the digits in n
function digitSum(n) {
  let string = n.toString();
  let result = 0;
  
  for (let i = 0; i < string.length; i++) {
    result += parseInt(string.charAt(i));
  }

  return result;
}

console.log(digitSum(factorial(100n))); //Outputs the answer
