function factorial(num) {
    let result = 1;
    let i = num; 
  
    while (i > 0) {
      result *= i; 
      i--;    
    }
    return result;
  }
  console.log(factorial(5)); 