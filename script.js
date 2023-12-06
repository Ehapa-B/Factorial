// Write a function that
//  calculates the factorial of a given number. Do not use prompt, I want only 1 console.log. The function 
// must be reuseable and must return a value



function CalFactorial(number) {
    let factorial = 1;
  
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  const calNumber = 20;
  const result = CalFactorial (calNumber);
  
  console.log(`The factorial of ${calNumber} is : ${result}`);