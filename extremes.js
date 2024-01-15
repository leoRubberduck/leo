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
  