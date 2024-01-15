function extreme(numbers) {
    if (!numbers) return null;
    if (numbers.length === 0) return {};
    if (numbers.length === 1) {
      const [first] = numbers; 
      return { bigest: first, smallest: first };
    };
    return {
      bigest: Math.max(...numbers),
      smallest: Math.min(...numbers)
    };
  };