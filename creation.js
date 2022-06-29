const character = new Map();
const manipulate = document.querySelector("#manipulate")

// This section is for rolling stats
function rollDice(dieFace){
    return Math.floor(Math.random() * dieFace);
}

function rollThree(){
    let total = 0
    let firstRoll = rollDice(6);
    let secondRoll = rollDice(6);
    let thirdRoll = rollDice(6);
    let fourthRoll = rollDice(6)
    let rolls = [firstRoll,secondRoll,thirdRoll,fourthRoll];
    rolls = removeLowest(rolls);
    for (i in rolls){
        if (i != undefined){
            total += i;
        }
    }
    return total;
}

function removeLowest(rolls){
    let lowest = 80;
    for (number in rolls){
        if (rolls[number] <= lowest) {
            lowest = rolls[number];
        }
    }
    for (i in rolls){
        if (rolls[i] == lowest){
            delete rolls[i];
        }
    }
    return rolls;
}
// This is for setting stats
function setByThree(){
    character.set("strength", rollThree());
    character.set("dexterity", rollThree());
    character.set("constitution", rollThree());
    character.set("intelligence", rollThree());
    character.set("wisdom", rollThree());
    character.set("charisma", rollThree());
    showStats()
}

// This is for setting modifiers

// This is for setting equipment

// This is for setting class

// This is for setting spells

// This is for setting race

// This is for dynamically setting the page
function openStatPage(){
    const html = `<button id = "hand" onclick = "showInputStats()">Input by hand</button>
    <button id = "4d6" onclick = "setByThree()">Roll 4d6</button>
    <section id = "statBlock"></section>`;
    manipulate.innerHTML = html;
}

function showInputStats(){
    const statBlock = document.querySelector("#statBlock")
    let html = `<ul id = "inputList">
    <li>Strength: <input id = "strengthInput"></input></li>
    <li>Dexterity: <input id = "dexterityInput"></input></li>
    <li>Constitution: <input id = "constitutionInput"></input></li>
    <li>Intelligence: <input id = "intelligenceInput"></input></li>
    <li>Wisdom: <input id = "wisdomInput"></input></li>
    <li>Charisma: <input id = "charismaInput"></input></li>
    </ul>
    <button id = "inputStatButton" onclick = ></button>`;
    statBlock.innerHTML = html;
}

function showStats(){
    const statBlock = document.querySelector("#statBlock");
    let html = `<ul id = "generatedStats">
    <li>Strength: ${character.strength}</li>
    <li>Dexterity: ${character.dexterity}</li>
    <li>Constitution: ${character.constitution}</li>
    <li>Intelligence: ${character.intelligence}</li>
    <li>Wisdom: ${character.wisdom}</li>
    <li>Charisma: ${character.charisma}</li>
    </ul>`;
    statBlock.innerHTML = html;
}

// This is for Listeners
document.querySelector("#stats").addEventListener("click",openStatPage);