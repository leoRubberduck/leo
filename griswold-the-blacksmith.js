let purchasableGoods = [];

const arrowPrice = 3;
const bootsPrice = 44;
const swordPrice = 299.99;

if (playerCoins >= arrowPrice) {
    purchasableGoods.push("Arrows");
  }
  
  if (playerCoins >= bootsPrice) {
    purchasableGoods.push("Boots");
  }
  
  if (playerCoins >= swordPrice) {
    purchasableGoods.push("Sword (Limited Offer)");
  }
  



