
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let hasWon = false
let player ={
    name: null ,
    chips: 0}
// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1;
    if(num === 1){
        num =11
        return num
    } else if (num === 11||num === 12|| num === 13) {
        num=10
        return num
    } else {
        return num
    }
    
}

function startGame() {
    isAlive = true
    hasBlackJack= false
    cards = []
    sum = 0
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    renderGame()
}
function sumC(){
    sum=0
    for (let i =0; i< cards.length; i++){
    sum += cards[i]
    }
}

function renderGame() {
    playerEl.textContent = "Player: " +player.name +" $"+player.chips
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
       
    }
    sumC()
    for(let i =0; i< cards.length; i++)
            if(cards[i] === 11){
                cards[i] = 1
                sumC()
            }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if(isAlive && !hasBlackJack){
    cards.push(getRandomCard())
    renderGame()
    }
}
