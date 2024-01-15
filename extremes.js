function extreme(arr) {
    if (arr.length === 0) {
        
      return null;
    }
  
    let smallest = arr[0];
    let bigest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
      if (arr[i] > bigest) {
        bigest = arr[i];
      }
    }
  
    return { bigest, smallest };
  }
  
  
  