function total(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    return arr.reduce((sum, value) => sum + value, 0);
  }

  