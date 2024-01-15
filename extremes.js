function extreme(numbers) {
    if (numbers.length === 0) {

      return null;
    }
  
    let smallest = numbers[0];
    let bigest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
      if (numbers[i] > bigest) {
        bigest = numbers[i];
      }
    }
  
    return { bigest, smallest };
  }
  

  console.log(extreme([-1, 0, 10, 5]));      
  console.log(extreme([22, 7, 32, 99, 54]));     
  