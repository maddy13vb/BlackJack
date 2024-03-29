// Pluralsight with Mark Zamoyta

// card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"],
  values = [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "Ten",
    "Nine",
    "Eight",
    "Seven",
    "Six",
    "Five",
    "Four",
    "Three",
    "Two"
  ];

// DOM variables
let textArea = document.getElementById("text-area"),
  clickHit = document.getElementById("hit"),
  stayHere = document.getElementById("stay"),
  newGame = document.getElementById("new-game");

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
clickHit.style.display = "none";
stayHere.style.display = "none";
showStatus();

// click event
newGame.addEventListener("click", function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  playerCards = [getNextCard(), getNextCard()]; //gets 2 cards
  dealerCards = [getNextCard(), getNextCard()];

  newGame.style.display = "none";
  clickHit.style.display = "inline";
  stayHere.style.display = "inline";
  showStatus();
});

hit.addEventListener('click', function () {
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayHere.addEventListener('click', function () {
    gameOver = true;
    checkForEndOfGame();
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
  return card.value + " of " + card.suit;
}

function getNextCard() {
  return deck.shift();
}

function getCardNumericValue(card) {
    switch(card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace') {
            hasAce =true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    updateScores();
    if (gameOver) {
        // let dealer take cards
        while(dealerScore < playerScore
            && playerScore <= 21
            && dealerScore <= 21) {
                dealerCards.push(getNextCard());
                updateScores();
            }
    }
    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    }
    else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    }
    else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        }
        else {
            playerWon = false;
        }
    }
}

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = "You gotta know when to hold 'em, know when to fold 'em, know when to walk away."
    return;
  }

  let dealerCardString = '';
  for (let i=0; i < dealerCards.length; i++) {
      dealerCardString += getCardString(dealerCards[i]) + '\n';
  }

  let playerCardString = '';
  for (let i=0; i < playerCards.length; i++) {
      playerCardString += getCardString(playerCards[i]) + '\n';
  }
  updateScores();

  textArea.innerText = 'Dealer has:\n' +
    dealerCardString + 
    '(score: ' + dealerScore + ')\n\n' +
    'Player has:\n' +
    playerCardString +
    '(score: ' + playerScore + ')\n\n';

    if(gameOver) {
        if (playerWon) {
            textArea.innerText += "You Win!";
        } 
        else {
            textArea.innerText += "You Lose :(";
        }
        newGame.style.display = 'inline';
        hit.style.display = 'none';
        stayHere.style.display = 'none';
    }
}
