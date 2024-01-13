let playerCoins = 50;

let purchasableGoods = [];


if (playerCoins >= 3) {
  purchasableGoods.push('Arrows');
}

if (playerCoins >= 44) {
  purchasableGoods.push('Boots');
}

if (playerCoins >= 299.99) {
  purchasableGoods.push('Sword (Limited Offer)');
}
