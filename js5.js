function Max(arr) { 
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
    return max;
  }
  const numbers = [3, 5, 7, 2, 8, 4];
console.log(Max(numbers)); 