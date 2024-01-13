let shaker = (quantity, fruit, alcohol) => {
    if (alcohol) {

      return `${quantity} ${fruit} cocktail${quantity > 1 ? 's' : ''}`;
    } else {
    
      return `${quantity} ${fruit} milkshake${quantity > 1 ? 's' : ''}`;
    }
  };