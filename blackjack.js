let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];


function createDeck() {
     let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}

function getNextCard() {
    return deck.shift();
}
let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}
let playerCards = [getNextCard(), getNextCard()]; //gets 2 cards

let score = 1000;
if (score > 1000) {
    score = score + 100;
    console.log("Great job!");
} else if (score === 1000) {
    console.log("Almost!")
} else {
    console.log("No bonus!");
}


console.log("Score is : ", score); //1100

// console log messages
console.log("Welcome to Blackjack!");
console.log("Your cards are:");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);

function changeCard(card) {
    card.suit = "Clubs";
}

let card = [
    {
    suit: "Hearts",
    value: "Queen"
    }
];
console.log(card[0].suit); // Hearts

//using built ins
let result = 0/0;
console.log(Number.isNaN(result)); // true