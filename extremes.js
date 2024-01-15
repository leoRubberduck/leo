function extreme(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
  
    let smallestValue = arr[0];
    let biggestValue = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
      if (arr[i] > biggestValue) {
        biggestValue = arr[i];
      }
    }
  
    return { biggest: biggestValue, smallest: smallestValue };
  }
  