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
            case 'Small Hot Latte':
            case 'Small Hot Cappuccino':
            case 'Small Hot Mocha':
            case 'Small Iced Latte':
            case 'Small Iced Mocha':
                shots = 2;
                break;
            case 'Medium Hot Latte':
            case 'Medium Hot Cappuccino':
            case 'Medium Hot Mocha':
            case 'Medium Iced Latte':
            case 'Medium Iced Mocha':
                shots = 2;
                break;
            case 'Large Iced Latte':
            case 'Large Iced Mocha':
                shots = 3;
            case 'Large Hot Latte':
            case 'Large Hot Cappuccino':
            case 'Large Hot Mocha':
                shots = 4;
                break;
            case 'Small Frozen Latte':
            case 'Small Frozen Mocha':
                shots = 6;
                break;
            case 'Medium Frozen Latte':
            case 'Medium Frozen Mocha':
                shots = 8;
                break;
            case 'Large Frozen Latte':
            case 'Large Frozen Mocha':
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
            case 'Small Hot Latte':
            case 'Small Hot Cappuccino':
            case 'Small Iced Latte':
                pumps = 2;
                break;
            case 'Medium Hot Latte':
            case 'Medium Hot Cappuccino':
            case 'Medium Iced Latte':
            case 'Small Frozen Latte':
                pumps = 3;
                break;
            case 'Large Hot Latte':
            case 'Large Hot Cappuccino':
            case 'Large Iced Latte':
            case 'Medium Frozen Latte':
                pumps = 4;
                break;
            case 'Large Frozen Latte':
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
            case 'Small Hot Mocha':
            case 'Small Iced Mocha':
                scoops = 2;
                break;
            case 'Medium Hot Mocha':
            case 'Medium Iced Mocha':
            case 'Small Frozen Mocha':
                scoops = 2.5;
                break;
            case 'Large Hot Mocha':
            case 'Large Iced Mocha':
            case 'Medium Frozen Mocha':
                scoops = 3;
                break;
            case 'Large Frozen Mocha':
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
            case "Small Hot Latte":
            case "Medium Hot Latte":
            case "Large Hot Latte":
            case "Small Iced Latte":
            case "Medium Iced Latte":
            case "Large Iced Latte":
            case "Small Frozen Latte":
            case "Medium Frozen Latte":
            case "Large Frozen Latte":
                this.shotDeterminer();
                this.pumpDeterminer();
                break;
            case "Small Hot Mocha":
            case "Medium Hot Mocha":
            case "Large Hot Mocha":
            case "Small Iced Mocha":
            case "Medium Iced Mocha":
            case "Large Iced Mocha":
            case "Small Frozen Mocha":
            case "Medium Frozen Mocha":
            case "Large Frozen Mocha":
                this.shotDeterminer();
                this.scoopDeterminer();
                break;
            case "Small Hot Cappuccino":
            case "Medium Hot Cappuccino":
            case "Large Hot Cappuccino":
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
    let sizes = ['Small', 'Medium', 'Large'];
    let num = Math.floor(Math.random() * sizes.length);
    return sizes[num];
}

let randomType = () => {
    let types = ['Hot', 'Iced', 'Frozen'];
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

let hotLatte = new beverage('Latte', 'Hot', randomSize())
drinkList.push(hotLatte);
let icedLatte = new beverage('Latte', 'Iced', randomSize())
drinkList.push(icedLatte);
let frozenLatte = new beverage('Latte', 'Frozen', randomSize())
drinkList.push(frozenLatte);

let Cappuccino = new beverage('Cappuccino', 'Hot', randomSize())
drinkList.push(Cappuccino);

let hotMocha = new beverage('Mocha', 'Hot', randomSize())
drinkList.push(hotMocha);
let icedMocha = new beverage('Mocha', 'Iced', randomSize())
drinkList.push(icedMocha);
let frozenMocha = new beverage('Mocha', 'Frozen', randomSize())
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