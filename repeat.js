function repeat(str, num) {
    if (num < 0) {
      // Handle negative numbers, returning an empty string
      return '';
    }
  
    let result = '';
    for (let i = 0; i < num; i++) {
      result += str;
    }
  
    return result;
  }
  