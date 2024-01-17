function toJadenCase(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  let result = toJadenCase('there is no dress');
  console.log(result);
  