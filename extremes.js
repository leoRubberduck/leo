function extreme(numbers) {
    if (!numbers) return null;
    if (numbers.length === 0) return {};
    if (numbers.length === 1) {
      const [first] = numbers; 
      return { biggest: first, smallest: first };
    };
    return {
      biggest: Math.max(...numbers),
      smallest: Math.min(...numbers)
    };
  };