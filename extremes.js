function extreme(numbers) {
  if (numbers.length === 0) {
      return { bigest: undefined, smallest: undefined };
  }

  let bigest = numbers[0];
  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > bigest) {
          bigest = numbers[i];
      }
      if (numbers[i] < smallest) {
          smallest = numbers[i];
      }
  }

  return { bigest, smallest };
}


console.log(extreme([-1, 0, 10, 5])); // -> { bigest: 10, smallest: -1 }
console.log(extreme([22, 7, 32, 99, 54])); // -> { bigest: 99, smallest: 7 }

  
  