const skyrimbtn = document.querySelector('#skyrim');

function priceAnalyzer() {
    let speech = parseInt(prompt("What is your Speech stat great dragonborn?"));
    let itemValue = parseInt(prompt("What is the value of the item you're pricing?"));
    let buyCurrentValue = 3.3 - (speech * .013);
    let sellCurrentValue = .303 + (speech * .00197);
    let itemBuyPrice = buyCurrentValue * itemValue;
    let itemSellPrice = sellCurrentValue * itemValue;
    alert("Your Speech is: " + speech + "\nYou buy for " + buyCurrentValue.toFixed(2) + " times the item value." + "\nYou sell for " + sellCurrentValue.toFixed(2) + " times the item value.\n" + "\n\nYour items value is: " + itemValue + "\nYou will sell your item for " + itemSellPrice.toFixed(0) + " gold, plus your perk bonuses.\nYou could buy this item for " + itemBuyPrice.toFixed(0) + " gold, plus your perk bonuses.");
}

skyrimbtn.addEventListener('click', priceAnalyzer);