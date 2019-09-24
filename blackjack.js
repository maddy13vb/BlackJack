
// card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// DOM variables
let paragraph = document.getElementById('text-area'),
    clickHit = document.getElementById('hit'),
    stayHere = document.getElementById('stay'),
    newGame = document.getElementById('new-game');



// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// initial placement of the buttons
clickHit.style.display = 'none';
stayHere.style.display = 'none';
showStatus();

// click event
newGame.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    playerCards = [getNextCard(), getNextCard()]; //gets 2 cards
    dealerCards = [getNextCard(), getNextCard()];

    newGame.style.display = 'none';
    clickHit.style.display = 'inline';
    stayHere.style.display = 'inline';
    showStatus();
});


function createDeck() {
     let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

// shuffle deck
function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function showStatus() {
    if (!gameStarted) {
        paragraph.innerText = 'Welcome to Blackjack!';
        return;
    }
}

for (var i = 0; i < deck.length; i++) {
    paragraph.innerText += '\n' + getCardString(deck[i]); 
}




// function changeCard(card) {
//     card.suit = "Clubs";
// }

// let card = [
//     {
//     suit: "Hearts",
//     value: "Queen"
//     }
// ];
