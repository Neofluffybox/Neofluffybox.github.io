/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
determines buy/sell prices for a skyrim character
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

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

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
create view and quiz on drinks for my job
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//selectors
const drinkBtn = document.querySelector('#drink');
const drinkTitle = document.querySelector('#drinkTitle');
const shots = document.querySelector('#shots');
const pumps = document.querySelector('#pumps');
const scoops = document.querySelector('#scoops');
const shotsNum = document.querySelector('#shotsNum');
const pumpsNum = document.querySelector('#pumpsNum');
const scoopsNum = document.querySelector('#scoopsNum');
const newDrinkBtn = document.querySelector('#newDrink');

//classes and functions
class beverage {
    constructor(name, type, size) {
        this._name = name;
        this._type = type;
        this._size = size;
    }
    get name() { return this._name; }
    get type() { return this._type; }
    get size() { return this._size; }
    set name(x) { return this._name = x; }
    set type(x) { return this._type = x; }
    set size(x) { return this._size = x; }
    shotDeterminer() {
        toggleDisplay('#shots');
        if (this._size == 'small' && this._type == 'frozen') {
            return shotsNum.innerHTML = '6';
        } else if (this._size == 'medium' && this._type == 'frozen') {
            return shotsNum.innerHTML = '8';
        } else if (this._size == 'large' && this._type == 'frozen') {
            return shotsNum.innerHTML = '10';
        } else if (this._size == 'small') {
            return shotsNum.innerHTML = '2';
        } else if (this._size == 'medium') {
            return shotsNum.innerHTML = '2';
        } else if (this._size == 'large' && this._type == 'iced') {
            return shotsNum.innerHTML = '3';
        } else if (this._size == 'large') {
            return shotsNum.innerHTML = '4';
        } else { return shotsNum.innerHTML = 'unsure'; }
    }
    pumpDeterminer = () => {
        toggleDisplay('#pumps');
        if (this._size == 'small') {
            return pumpsNum.innerHTML = `2`;
        } else if (this._size == 'medium') {
            return pumpsNum.innerHTML = `3`;
        } else {
            return pumpsNum.innerHTML = `4`;
        };
    }
    scoopDeterminer = () => {
        toggleDisplay('#scoops');
        if (this._size == 'small' && this._name == 'Mocha' && this._type == 'frozen') {
            return scoopsNum.innerHTML = `2.5`;
        } else if (this._size == 'medium' && this._name == 'Mocha' && this._type == 'frozen') {
            return scoopsNum.innerHTML = `3`;
        } else if (this._size == 'large' && this._name == 'Mocha' && this._type == 'frozen') {
            return scoopsNum.innerHTML = `3.5`;
        } else if (this._size == 'small' && this._name == 'Mocha') {
            return scoopsNum.innerHTML = '2';
        } else if (this._size == 'medium' && this._name == 'Mocha') {
            return scoopsNum.innerHTML = '2.5';
        } else if (this._size == 'large' && this._name == 'Mocha') {
            return scoopsNum.innerHTML = '3';
        } else {
            return scoopsNum.innerHTML = 'unsure';
        }
    }
    display() {
        resetDisplay('#shots');
        resetDisplay('#pumps');
        resetDisplay('#scoops');
        if (this._name == 'Mocha' && this._type == 'hot') {
            this.shotDeterminer();
            this.scoopDeterminer();
            return drinkTitle.innerHTML = `${this._size} ${this._type} ${this._name}`;
        } else if (this._name == 'Mocha' && this._type == 'iced') {
            this.shotDeterminer();
            this.scoopDeterminer();
            return drinkTitle.innerHTML = `${this._size} ${this._type} ${this._name}`;
        } else if (this._name == 'Mocha' && this._type == 'frozen') {
            this.shotDeterminer();
            this.scoopDeterminer();
            return drinkTitle.innerHTML = `${this._size} ${this._type} ${this._name}`;
        } else {
            this.shotDeterminer();
            this.pumpDeterminer();
            return drinkTitle.innerHTML = `${this._size} ${this._type} ${this._name}`;
        }
    }
}

let randomSize = () => {
    let sizes = ['small', 'medium', 'large'];
    let num = Math.floor(Math.random() * sizes.length);
    return sizes[num];
}

let randomType = () => {
    let types = ['hot', 'iced', 'frozen'];
    let num = Math.floor(Math.random() * types.length);
    return types[num];
}

let randomDrink = () => {
    let num = Math.floor(Math.random() * drinkList.length);
    return drinkList[num];
}

function toggleDisplay(x) {
    let disp = document.querySelector(x);
    if (disp.style.display === 'none') {
        disp.style.display = 'flex';
    } else {
        disp.style.display = 'none';
    };
}

function resetDisplay(x) {
    let disp = document.querySelector(x);
    disp.style.display = 'none';
}

//menu
let drinkList = [];

let hotLatte = new beverage('Latte', 'hot', randomSize())
drinkList.push(hotLatte);
let icedLatte = new beverage('Latte', 'iced', randomSize())
drinkList.push(icedLatte);
let frozenLatte = new beverage('Latte', 'frozen', randomSize())
drinkList.push(frozenLatte);

let Cappuccino = new beverage('Cappuccino', 'hot', randomSize())
drinkList.push(Cappuccino);

let hotMocha = new beverage('Mocha', 'hot', randomSize())
drinkList.push(hotMocha);
let icedMocha = new beverage('Mocha', 'iced', randomSize())
drinkList.push(icedMocha);
let frozenMocha = new beverage('Mocha', 'frozen', randomSize())
drinkList.push(frozenMocha);

//buttons
drinkBtn.addEventListener('click', () => {
    toggleDisplay('#drinkDisplay');
    randomDrink().display();
});

newDrinkBtn.addEventListener('click', () => {
    randomDrink().display();
});