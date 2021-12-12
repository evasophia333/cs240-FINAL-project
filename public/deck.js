/**
 * Create a deck and instantiates corresponding fields
 */
class Deck {
  constructor() {
    //this.seenCards = []; //holds the flashcards that the user has already seen
    //this.unseenCards = []; //holds the flashcards that the user has not seen yet
    this.name = ""; //stores the name of the deck created
    this.cards = []; //stores the cards in the deck
    this.pointer = 0;
  }

  /**
   * Takes a given card and will add it to the deck. Also places
   * the card into the unseen set of cards
   * @param {Card object} Card
   */
  addCardToDeck(Card) {
    this.cards.push(Card);
  }

  /**
   * Given a number, the card in the deck with the
   * corresponding IDnumber will be returned.
   * @param {number} cardNumber
   * @returns card at specified number
   * @returns null if card does not exist
   */
  getCard(tempCardID) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].cardID == tempCardID) {
        return this.cards[i];
      } else {
        return null;
      }
    }
  }

  /**
   * Calling this method will return the next card in the deck in
   * the currentorder. Moves this card into the seen category
   * and removes from the unseen category.
   * @returns current card
   * @returns null if there are no more unseen cards to study
   */

  getCurrCard() {
    if (this.pointer < this.cards.length && this.pointer > -1) {
      let currCard = this.cards[this.pointer];
      return currCard;
    } else {
      return null; //at the end or beginning of the deck!!!!
    }
  }

  movePointerBack() {
    if (!(this.pointer < 1)) {
      this.pointer--;
    }
  }
  movePointerForward() {
    if (!(this.pointer > this.cards.length - 1)) {
      this.pointer++;
    }
  }

  /**
   * Creates two new arrays to hold flashcards that have been seen or not and takes a random flash card from the deck
   * shows it to the user and and adds it to the appropriate array.
   * @returns random Card in the deck
   */
  shuffle() {
    for (let i = this.pointer; i < this.cards.length; i++) {
      let max = this.cards.length - this.pointer;
      let j = Math.floor(Math.random() * max) + this.pointer;
      let card1 = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = card1;
    }
  }

  /**
   * Reports the name of the deck
   * @returns name of deck
   */
  getDeckName() {
    return this.name;
  }
  movePointerToBeginning() {
    this.pointer = 0;
  }

  resetCards() {
    this.cards = [];
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

//old shuffle method
// const randomCardID = Math.floor(Math.random() * this.unseenCards.length); //grabs a random ID from the deck of flashcards
// const randomCard = this.unseenCards[randomCardID];
// if (!seenCards.Contains(randomCard)) {
//   seenCards.push(randomCard);
//   this.cards.splice(randomCardID, 1);
// } else {
//   unseenCards.push(randomCard);
//   this.cards.splice(randomCardID, 1);
// }
// return randomCardID;
