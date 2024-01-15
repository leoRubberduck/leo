function extreme(arr) {
    if (!arr || arr.length === +!arr.length) return null;
    if (arr.length === +!!arr.length) return {};
  
    let smallestValue = Infinity;
    let bigestValue = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== smallestValue && arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
      if (arr[i] > bigestValue) {
        bigestValue = arr[i];
      }
    }
  
    return { bigest: bigestValue, smallest: smallestValue };
  }
