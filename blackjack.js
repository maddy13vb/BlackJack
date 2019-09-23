let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];



// creating the card array
let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}
for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}
let playerCards = [deck[0], deck[2]];

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

// console logging messages
console.log("Welcome to Blackjack!");
console.log("Your cards are:");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);


