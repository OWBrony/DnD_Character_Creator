let character = new Map();
const manipulate = document.querySelector("#manipulate")

// This section is for rolling stats
function rollDice(dieFace){
    return Math.floor(Math.random() * dieFace) + 1;
}

function rollThree(){
    let total = 0
    let firstRoll = rollDice(6);
    let secondRoll = rollDice(6);
    let thirdRoll = rollDice(6);
    let fourthRoll = rollDice(6)
    let rolls = [firstRoll,secondRoll,thirdRoll,fourthRoll];
    rolls = removeLowest(rolls);
    for (let i = 0; i < rolls.length; i++){
        if (rolls[i] != undefined){
            total += rolls[i];   
        }
    }
    return total;
}

function removeLowest(rolls){
    let lowest = 80;
    for (number in rolls){
        if (rolls[number] < lowest) {
            lowest = rolls[number];
        }
    }
    for (i in rolls){
        if (rolls[i] == lowest){
            delete rolls[i];
            break;
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

function setInputStats(){
    let strengthHolder = document.querySelector("#strengthInput").value;
    let dexterityHolder = document.querySelector("#dexterityInput").value;
    let constitutionHolder = document.querySelector("#constitutionInput").value;
    let intelligenceHolder = document.querySelector("#intelligenceInput").value;
    let wisdomHolder = document.querySelector("#wisdomInput").value;
    let charismaHolder = document.querySelector("#charismaInput").value;
    character.set("strength", strengthHolder);
    character.set("dexterity", dexterityHolder);
    character.set("constitution", constitutionHolder);
    character.set("intelligence", intelligenceHolder);
    character.set("wisdom", wisdomHolder);
    character.set("charisma", charismaHolder);
    addSaveToPage()
}
// This is for setting modifiers

// This is for setting equipment

// This is for setting class

// This is for setting spells

// This is for setting race

// This is for dynamically setting the page
function addSaveToPage(){
    const statBlock = document.querySelector("#statBlock")
    let html = "<p>Data Saved!</p>";
    statBlock.innerHTML += html;
}

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
    <button id = "inputStatButton" onclick = "setInputStats()">Save Stats</button>`;
    statBlock.innerHTML = html;
}

function showStats(){
    const statBlock = document.querySelector("#statBlock");
    let html = `<ul id = "generatedStats">
    <li>Strength: ${character.get("strength")}</li>
    <li>Dexterity: ${character.get("dexterity")}</li>
    <li>Constitution: ${character.get("constitution")}</li>
    <li>Intelligence: ${character.get("intelligence")}</li>
    <li>Wisdom: ${character.get("wisdom")}</li>
    <li>Charisma: ${character.get("charisma")}</li>
    </ul>`;
    statBlock.innerHTML = html;
}

// This is for Listeners
document.querySelector("#stats").addEventListener("click",openStatPage);