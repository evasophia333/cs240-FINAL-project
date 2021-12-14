/**
 * Creates a deck and instantiates corresponding fields
 */
class Deck {
  constructor() {
    this.name = ""; //stores the name of the deck created
    this.cards = []; //stores the cards in the deck
    this.pointer = 0; //tracks our current position in the deck
  }
  removeCard(num) {
    if (num < this.pointer) {
      this.pointer = this.pointer - 1;
    }
    if (num >= 0 && num < this.cards.length) {
      this.cards.splice(num, 1);
    }
    for (let i = num; i < this.cards.length; i++) {
      this.cards[i].setCardID(i);
    }
    if (this.pointer > this.cards.length - 1) {
      this.pointer--;
    }
    if (this.pointer < 0) {
      this.pointer++;
    }
  }
  /**
   * Takes a given card and adds it to the deck.
   * @param {Card object} Card
   */
  addCardToDeck(Card) {
    Card.setCardID(this.cards.length - 1);
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
   * the currentorder.
   * @returns current card
   * @returns null if there are no more unseen cards to study
   */

  getCurrCard() {
    if (this.pointer < this.cards.length && this.pointer > -1) {
      //if we're within the bounds of the deck
      let currCard = this.cards[this.pointer]; //return the card we're pointing at
      return currCard;
    } else {
      return null; //at the end or beginning of the deck!!!!
    }
  }
  movePointerBack() {
    //move the pointer back, therefore moving the user back in the deck
    if (!(this.pointer < 1)) {
      this.pointer--;
    }
  }
  movePointerForward() {
    //move the pointer forward, therefore moving the user forward in the deck
    if (!(this.pointer > this.cards.length - 1)) {
      this.pointer++;
    }
  }

  /**
   * Randomizes all cards in the deck between our current card and the end of the deck
   */
  shuffle() {
    for (let i = this.pointer; i < this.cards.length; i++) {
      //for each card from our current card to the end of the deck...
      let max = this.cards.length - this.pointer;
      let j = Math.floor(Math.random() * max) + this.pointer; //randomly...
      let card1 = this.cards[i]; //reassxign
      card1.setCardID(j);
      let card2 = this.cards[j];
      card2.setCardID(i);
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
    //moves the pointer to the beginning of the deck
    this.pointer = 0;
  }

  resetCards() {
    //resets deck to be empty
    this.cards = [];
  }
}
