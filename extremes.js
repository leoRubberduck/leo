function extreme(arr) {
    if (!arr) return null;
    if (arr.length === 0) return {};
    if (arr.length === 1) {
      const [first] = arr;
      return { bigest: first, smallest: first };
    }
    return {
      bigest: Math.max(...arr),
      smallest: Math.min(...arr)
    };
  }