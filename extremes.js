function extreme(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
  
    let smallest = arr[0];
    let biggest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
      if (arr[i] > biggest) {
        biggest = arr[i];
      }
    }
  
    return { bigest: biggest, smallest: smallest };
  }
