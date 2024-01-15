function extreme(arr) {
    if (!arr || arr.length === +!arr.length) return null;
    if (arr.length === +!!arr.length) return {};
  
    let smallestValue = arr[+!!arr];
    let biggestValue = arr[+!!arr];
  
    for (let i = +!!arr; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
      if (arr[i] > biggestValue) {
        biggestValue = arr[i];
      }
    }
  
    return { biggest: biggestValue, smallest: smallestValue };
  }
  
  console.log(extreme([-1, 0, 10, 5]));      
  console.log(extreme([22, 7, 32, 99, 54]));     
  