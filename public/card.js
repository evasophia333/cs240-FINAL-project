var cardVar = document.querySelector(".card");
cardVar.addEventListener("click", function () {
  cardVar.classList.toggle("is-flipped");
});

/** Track current cards */
let cardList = [];
let currentCardIndex = 000;

var buttonAdd = document.querySelector("#button");
buttonAdd.addEventListener("click", function () {
  let newCard = new card(currentCardIndex);
  newCard.addFrontText(frontText.value);
  newCard.addBackText(backText.value);
  console.log(newCard.geBackText());
  console.log(newCard.getFrontText());
  frontOfCard.innerHTML = newCard.getFrontText();
  backOfCard.innerHTML = newCard.geBackText();
  cardList.push(newCard);
  currentCardIndex++;
  console.log(cardList);
  displayCards();
});

/**
 * Create a card and instantiates corresponding fields
 */
class card {
  constructor(num) {
    this.frontText = "";
    this.backText = "";
    this.difficulty = "";
    this.cardID = num;
  }
  /**
   * adds to the front of the deck
   * @param {} textToAdd
   */
  addFrontText(textToAdd) {
    this.frontText = textToAdd;
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
  geBackText() {
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

function displayCards() {
  let cardDisplay = document.querySelector("#displayCards"); //grabs the p tag
  while (cardDisplay.firstChild) {
    cardDisplay.removeChild(cardDisplay.firstChild);
  }
  for (let i = 0; i < cardList.length; i++) {
    let cardName = cardList[i].getFrontText();
    let newCardDiv = document.createElement("div");
    let newCardDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newCardDisp.setAttribute("id", "cardID");
    newCardDisp.innerHTML = cardName;
    newCardDiv.classList.add("card");
    newCardDisp.classList.add("cardDisp");
    newCardDiv.appendChild(newCardDisp);
    cardDisplay.appendChild(newCardDiv);
    //console.log(cardDisplay.childNodes)
  }
}
