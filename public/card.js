/**
 * Create a card and instantiates corresponding fields
 */
class card {
  constructor() {
    this.frontText = "";
    this.backText = "";
    this.difficulty = "";
    this.cardID = -1;
  }
  /**
   * adds to the front of the deck
   * @param {} textToAdd
   */
  addFrontText(textToAdd) {
    this.frontText = textToAdd;
  }
  setCardID(num) {
    this.cardID = num;
  }
  /**
   * Adds text to the back of a card
   * @param {*} textToAdd
   */
  addBackText(textToAdd) {
    this.backText = textToAdd;
  }
  /**
   * Assigns a card a given ID
   * @param {*} givenID
   */
  addCardID(givenID) {
    this.cardID = givenID;
  }
  /**
   * assigns the card a difficulty level
   * @param {} diff
   */
  assignDificulty(diff) {
    let lowerDif = diff.toLowerCase();
    if (lowerDif == "red" || lowerDif == "yellow" || lowerDif == "green") {
      this.difficultyLevel = lowerDif;
    }
  }
  /**
   * Shows the text on the front of the card
   * @returns
   */
  getFrontText() {
    return this.frontText;
  }

  /**
   * shows the text on the back of the card
   * @returns
   */
  getBackText() {
    return this.backText;
  }
  /**
   * Returns the level of difficulty of the specificied card
   * @returns
   */
  difficultyLevel() {
    return this.difficulty;
  }
  /**
   * Gives the card an ID so that it is easier to access
   */
  getCardID() {
    return this.cardID;
  }
  /**
   * Changes the front text to what the paramater is
   * @param {} textToChangeTo
   */
  changeFront(textToChangeTo) {
    this.frontText = textToChangeTo;
  }
  /**
   * changes the back text to what the parameter is
   * @param {} textToChangeTo
   */
  changeBack(textToChangeTo) {
    this.backText = textToChangeTo;
  }
  /**
   * Changes the difficulty
   * @param {} newDif (must be red yellow or green)
   */
  changeDiffucultyLevel(newDif) {
    let lowerDif = newDif.toLowerCase();
    if (lowerDif == "red" || lowerDif == "yellow" || lowerDif == "green") {
      this.difficultyLevel = lowerDif;
    }
  }
}
