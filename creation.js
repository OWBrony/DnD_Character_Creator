const character = new Map();
const manipulate = document.querySelector("#manipulate")
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
    const html = `<button id = "hand">Input by hand</button>
    <button id = "3d6">Roll 3d6</button><button id = "1d20">Roll 1d20</button>
    <section id = "stat block"></section>`;
    manipulate.innerHTML = html;
}

// This is for Listeners
document.querySelector("#stats").addEventListener("click",openStatPage);