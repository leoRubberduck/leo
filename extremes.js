function extremeWithMapApply(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
  
    return {
      bigest: Math.max.apply(null, arr.map(subArr => Math.max(...subArr))),
      smallest: Math.min.apply(null, arr.map(subArr => Math.min(...subArr))),
    };
  }