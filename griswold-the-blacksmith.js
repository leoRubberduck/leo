const purchasableGoods = [];

const arrows = { name: 'Arrows', cost: 3 };
const boots = { name: 'Boots', cost: 44 };
const sword = { name: 'Sword', cost: 299.99, limitedOffer: true };

if (playerCoins >= arrows.cost) {
    purchasableGoods.push(arrows);
}

if (playerCoins >= boots.cost) {
    purchasableGoods.push(boots);
}

if (playerCoins >= sword.cost && sword.limitedOffer) {
    purchasableGoods.push(sword);


}

purchasableGoods.sort((a, b) => a.cost - b.cost);




