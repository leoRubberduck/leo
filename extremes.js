function extreme(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
  
    let smallestValue = arr[0];
    let bigestValue = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
      if (arr[i] > bigestValue) {
        bigestValue = arr[i];
      }
    }
  
    return { bigest: bigestValue, smallest: smallestValue };
  }
  
  console.log(extreme([-1, 0, 10, 5]));         // Output: { biggest: 10, smallest: -1 }
  console.log(extreme([22, 7, 32, 99, 54]));     // Output: { biggest: 99, smallest: 7 }
  