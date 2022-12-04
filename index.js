const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceRoll: [3, 1, 4],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceRoll: [6],
    diceCount: 1
}

/*
CHALLENGE
1. Instead of the for loop, map over the diceRoll array
and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 
13
*/

function renderCharacter(data) {
    const { elementId, name, avatar, health, diceRoll, diceCount } = data;
    const diceHtml = diceRoll.map(function(roll){
       return `<div class="dice">${roll}</div>`
    });
    
    // for (let i = 0; i < diceRoll.length; i++) {
    //     diceHtml += `<div class="dice">${diceRoll[i]}</div>`
    // }

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml.join('')}
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);