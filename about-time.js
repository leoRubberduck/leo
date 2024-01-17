function childrenOnly(numbers) {
    return numbers.filter(number => number < 18);
  }
  
  const result = childrenOnly([12, 11, 23, 44, 10]);
  console.log(result); 
  