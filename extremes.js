function extremeWithMapReduce(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
  
    return {
      bigest: arr.map(subArr => Math.max(...subArr)).reduce((a, b) => (a > b ? a : b)),
      smallest: arr.map(subArr => Math.min(...subArr)).reduce((a, b) => (a < b ? a : b)),
    };
  }
  