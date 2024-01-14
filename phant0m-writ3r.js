if (!(startsWithAl(word) && endsWithIon(word))) {
    console.log(word);
  }
  
  function startsWithAl(word) {
    return word.toLowerCase().startsWith('al');
  }
  
  function endsWithIon(word) {
    return word.toLowerCase().endsWith('ion');
  }