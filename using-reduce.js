const adder = (numbers, initialValue = 0) => {
    return numbers.reduce((acc, num) => acc + num, initialValue);
  };
  
  const sumOrMul = (numbers, initialValue = 0) => {
    return numbers.reduce((acc, num) => {
      return num % 2 === 0 ? acc * num : acc + num;
    }, initialValue);
  };
  
  const funcExec = (functions, initialValue) => {
    return functions.reduce((acc, func) => func(acc), initialValue);
  };  