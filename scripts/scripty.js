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
const checkerBtn = document.querySelector('#checkerBtn');
const checkedShots = document.querySelector('#checkedShots');
const checkedPumps = document.querySelector('#checkedPumps');
const checkedScoops = document.querySelector('#checkedScoops');
const answerBtn = document.querySelector('#answer');

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
        let name = `${this.size} ${this.type} ${this.name}`;
        let shots;
        switch (name) {
            case 'small hot Latte':
            case 'small hot Cappuccino':
            case 'small hot Mocha':
            case 'small iced Latte':
            case 'small iced Mocha':
                shots = 2;
                break;
            case 'medium hot Latte':
            case 'medium hot Cappuccino':
            case 'medium hot Mocha':
            case 'medium iced Latte':
            case 'medium iced Mocha':
                shots = 2;
                break;
            case 'large iced Latte':
            case 'large iced Mocha':
                shots = 3;
            case 'large hot Latte':
            case 'large hot Cappuccino':
            case 'large hot Mocha':
                shots = 4;
                break;
            case 'small frozen Latte':
            case 'small frozen Mocha':
                shots = 6;
                break;
            case 'medium frozen Latte':
            case 'medium frozen Mocha':
                shots = 8;
                break;
            case 'large frozen Latte':
            case 'large frozen Mocha':
                shots = 10
                break;
        }
        return shotsNum.innerHTML = shots;
    }
    pumpDeterminer = () => {
        toggleDisplay('#pumps');
        let name = `${this.size} ${this.type} ${this.name}`;
        let pumps;
        switch (name) {
            case 'small hot Latte':
            case 'small hot Cappuccino':
            case 'small iced Latte':
                pumps = 2;
                break;
            case 'medium hot Latte':
            case 'medium hot Cappuccino':
            case 'medium iced Latte':
            case 'small frozen Latte':
                pumps = 3;
                break;
            case 'large hot Latte':
            case 'large hot Cappuccino':
            case 'large iced Latte':
            case 'medium frozen Latte':
                pumps = 4;
                break;
            case 'large frozen Latte':
                pumps = 5;
                break;
        }
        return pumpsNum.innerHTML = pumps;
    }
    scoopDeterminer = () => {
        toggleDisplay('#scoops');
        let name = `${this.size} ${this.type} ${this.name}`;
        let scoops;
        switch (name) {
            case 'small hot Mocha':
            case 'small iced Mocha':
                scoops = 2;
                break;
            case 'medium hot Mocha':
            case 'medium iced Mocha':
            case 'small frozen Mocha':
                scoops = 2.5;
                break;
            case 'large hot Mocha':
            case 'large iced Mocha':
            case 'medium frozen Mocha':
                scoops = 3;
                break;
            case 'large frozen Mocha':
                scoops = 3.5;
                break;
        }
        return scoopsNum.innerHTML = scoops;
    }
    display() {
        resetDisplay('#shots');
        resetDisplay('#pumps');
        resetDisplay('#scoops');
        let name = `${this.size} ${this.type} ${this.name}`;
        switch (name) {
            case "small hot Latte":
            case "medium hot Latte":
            case "large hot Latte":
            case "small iced Latte":
            case "medium iced Latte":
            case "large iced Latte":
            case "small frozen Latte":
            case "medium frozen Latte":
            case "large frozen Latte":
                this.shotDeterminer();
                this.pumpDeterminer();
                break;
            case "small hot Mocha":
            case "medium hot Mocha":
            case "large hot Mocha":
            case "small iced Mocha":
            case "medium iced Mocha":
            case "large iced Mocha":
            case "small frozen Mocha":
            case "medium frozen Mocha":
            case "large frozen Mocha":
                this.shotDeterminer();
                this.scoopDeterminer();
                break;
            case "small hot Cappuccino":
            case "medium hot Cappuccino":
            case "large hot Cappuccino":
                this.shotDeterminer();
                this.pumpDeterminer();
                break;
        }
        return drinkTitle.innerHTML = name;
    }
    checker() {
        if (shotsCheckerBox.value == shotsNum.innerHTML) {
            shotsCheckerBox.style.color = 'green';
            checkedShots.innerHTML = 'correct!';
        } else {
            shotsCheckerBox.style.color = 'red';
            checkedShots.innerHTML = 'incorrect';
        };
        if (pumpsCheckerBox.value == pumpsNum.innerHTML) {
            pumpsCheckerBox.style.color = 'green';
            checkedPumps.innerHTML = 'correct!';
        } else {
            pumpsCheckerBox.style.color = 'red';
            checkedPumps.innerHTML = 'incorrect';
        };
        if (scoopsCheckerBox.value == scoopsNum.innerHTML) {
            scoopsCheckerBox.style.color = 'green';
            checkedScoops.innerHTML = 'correct!';
        } else {
            scoopsCheckerBox.style.color = 'red';
            checkedScoops.innerHTML = 'incorrect';
        };
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

function resetContent() {
    shotsCheckerBox.value = '';
    shotsCheckerBox.style.color = 'black';
    pumpsCheckerBox.value = '';
    pumpsCheckerBox.style.color = 'black';
    scoopsCheckerBox.value = '';
    scoopsCheckerBox.style.color = 'black';
    checkedShots.innerHTML = '';
    checkedPumps.innerHTML = '';
    checkedScoops.innerHTML = '';

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
    resetContent();
});

newDrinkBtn.addEventListener('click', () => {
    randomDrink().display();
    resetContent();
});

checkerBtn.addEventListener('click', () => {
    randomDrink().checker();
});

answerBtn.addEventListener('click', () => {
    toggleDisplay('#shotsNum');
    toggleDisplay('#pumpsNum');
    toggleDisplay('#scoopsNum');
});