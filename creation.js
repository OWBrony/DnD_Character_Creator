const character = new Map();
const manipulate = document.querySelector("#manipulate")

let statActive = false
let raceActive = false
let classActive = false
let gearActive = false
let spellActive = false
// This is for setting active event listeners
function setStatActive(active){
    statActive = active
    return
}
function setRaceActive(active){
    raceActive = active
    return
}
function setClassActive(active){
    classActive = active
    return
}
function setGearActive(active){
    gearActive = active
    return
}
function setSpellsActive(active){
    spellActive = active
    return
}

// This section is for rolling stats
function rollDice(dieFace){
    return Math.floor(Math.random() * dieFace);
}

function rollThree(){
    firstRoll = rollDice(6);
    secondRoll = rollDice(6);
    thirdRoll = rollDice(6);
    total = firstRoll + secondRoll + thirdRoll;
    return total
}

function rollDieTwenty(){
    return rollDice(20)
}

function setByThree(){
    character.set("strength", rollThree());
    character.set("dexterity", rollThree());
    character.set("constitution", rollThree());
    character.set("intelligence", rollThree());
    character.set("wisdom", rollThree());
    character.set("charisma", rollThree());
}

function setByTwenty(){
    character.set("strength", rollDieTwenty);
    character.set("dexterity", rollDieTwenty);
    character.set("constitution", rollDieTwenty);
    character.set("intelligence", rollDieTwenty);
    character.set("wisdom", rollDieTwenty);
    character.set("charisma", rollDieTwenty);
}

// This is for setting modifiers

// This is for setting equipment

// This is for setting class

// This is for setting spells

// This is for setting race

// This is for dynamically setting the page
function openStatPage(){
    setStatActive(true);
    setClassActive(false);
    setRaceActive(false);
    setGearActive(false);
    setSpellsActive(false);
    const html = `<button id = "hand" onclick = "showInputStats()">Input by hand</button>
    <button id = "3d6">Roll 3d6</button><button id = "1d20">Roll 1d20</button>
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
    </ul>`;
    statBlock.innerHTML = html;
}

// This is for Listeners
document.querySelector("#stats").addEventListener("click",openStatPage);
if (statActive.addEventListener == true) {

    document.querySelector("#hand").addEventListener("click",showInputStats);
}
