let purchasableGoods = [];

const arrowPrice = 3;
const bootsPrice = 44;
const swordPrice = 299.99;

if (playerCoins >= arrowPrice) {
  purchasableGoods.push({ item: "Arrows", price: arrowPrice });
}

if (playerCoins >= bootsPrice) {
  purchasableGoods.push({ item: "Boots", price: bootsPrice });
}

if (playerCoins >= swordPrice) {
  purchasableGoods.push({ item: "Sword (Limited Offer)", price: swordPrice });
}

purchasableGoods.sort((a, b) => a.price - b.price);


