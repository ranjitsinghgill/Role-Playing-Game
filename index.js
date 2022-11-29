/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
*/

let elementIdHero = 'hero'
let nameHero = 'Wizard'
let avatarHero = 'images/wizard.png'
let healthHero = 60
let diceScoreHero = 6

let elementIdMonster = 'monster'
let nameMonster = 'Orc'
let avatarMonster = "images/orc.png"
let healthMonster = 10
let diceScoreMonster = 4

function renderCharacter(elementId, name, avatar, health, diceScore) {
    document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${diceScore} </div></div>
    </div>`; 
}

renderCharacter(elementIdHero, nameHero, avatarHero, healthHero, diceScoreHero)
renderCharacter(elementIdMonster, nameMonster, avatarMonster, healthMonster, diceScoreMonster)