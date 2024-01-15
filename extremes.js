function extreme() {
    if (arguments[0].length === 0) {
      return null;
    }
  
    let smallest = arguments[0][0];
    let bigest = arguments[0][0];
  
    for (let i = 1; i < arguments[0].length; i++) {
      if (arguments[0][i] < smallest) {
        smallest = arguments[0][i];
      }
      if (arguments[0][i] > bigest) {
        bigest = arguments[0][i];
      }
    }
  
    return { bigest, smallest };
  }
  