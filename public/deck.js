/**
 * Create a deck and instantiates corresponding fields
 */
class Deck {
  constructor() {
    this.name = ""; //stores the name of the deck created
    this.cards = []; //stores the cards in the deck
    this.cardStatus = false; //stores true if the card has been studied, false if the card has not been studied (card class?)
  }

  /**
   * Takes a given card and will add it to the deck
   * @param {Card object} Card
   */
  addCardToDeck(Card) {
    this.cards.push(Card);
  }

  /**
   * Given a number, the card in the deck with the corresponding number will be returned.
   * @param {number} cardNumber
   * @returns card at specified number
   */
  getCard(cardID) {
    for (let i = 0; i < this.cards.length; i++) {
      if (cardID == i) {
        return this.cards[i];
      } else {
        console.log("Card not found!");
      }
    }
  }

  /**
   * Calling this method will show the user the next card in the deck in order
   * @returns current card
   */
  showNextCard() {
    let currentCard = 0; //alwways starts showing the deck from the beginning, does this need to be a global variable?
    if (currentCard < this.cards.length) {
      currentCard += 1; //incements by one to show the next card
      return this.cards[currentCard];
    } else {
      console.log("You have reached the end of your deck!");
    }
  }

  /**
   * Creates two new arrays to hold flashcards that have been seen or not and takes a random flash card from the deck
   * shows it to the user and and adds it to the appropriate array.
   * @returns random Card in the deck
   */
  showNextShuffledCard() {
    let seenCards = []; //holds the flashcards that the user has already seen randomly
    let unseenCards = []; //holds the flashcards that the user has not seen yet
    const randomCardID = Math.floor(Math.random() * this.cards.length); //grabs a random ID from the deck of flashcards
    const randomCard = this.cards[randomCardID];
    if (!seenCards.Contains(randomCard)) {
      seenCards.push(randomCard);
      this.cards.splice(randomCardID, 1);
    } else {
      unseenCards.push(randomCard);
      this.cards.splice(randomCardID, 1);
    }
    return randomCardID;
  }

  /**
   * Reports the name of the deck
   * @returns name of deck
   */
  getDeckName() {
    return this.name;
  }
}

// // When pressed, button will bring user back to homepage
// let homePage = document.querySelector('button[id="homePage"]');
// homePage.addEventListener("click", () => {
//   window.location.href = "homePage.html";
// });

// Creates a new deck and adds it to a list for the user to keep track of their decks
// let newDeck = document.querySelector("#newDeck");
// newDeck.addEventListener("click", () => {
//   let deck = new Deck(); // creates a new deck object
//   deck.name = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
//   if (deck.name != "") {
//     let deckName = deck.name;
//     // Trying to get the input field to clear on button click
//     // deck.name = '';
//     // deck.placeholder = "Enter Deck Name:";
//     // deck.reset;
//     // console.log(deck.name)
//     // console.log(deck.placeholder)
//     let deckDisplay = document.querySelector("#displayDecks"); //grabs the p tag
//     let newDeckDiv = document.createElement("div");
//     let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
//     newDeckDisp.setAttribute("id", "deckID");
//     newDeckDisp.innerHTML = deckName;
//     newDeckDiv.classList.add("deck");
//     newDeckDisp.classList.add("deckDisp");
//     newDeckDiv.appendChild(newDeckDisp);
//     deckDisplay.appendChild(newDeckDiv);

//     newDeckDisp.addEventListener("click", () => {
//       window.location.href = "viewCards.html";
//     });
//   }
//});
