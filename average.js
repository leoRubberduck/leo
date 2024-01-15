function average(arr) {
    if (arr.length === 0) {
      return NaN;
    }
  
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum / arr.length;
  }
  