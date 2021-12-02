/* 
Global variable: deck!!!!! stores the current deck used
 */

let myDeck;

// NEW DECK EVENT LISTENER
//Creates a new deck and adds it to a list for the user to keep track of their decks
let newDeck = document.querySelector("#newDeck");

newDeck.addEventListener("click", () => {
  myDeck = new Deck(); // creates a new deck object
  myDeck.name = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
  if (myDeck.name != "") {
    let deckName = myDeck.name;
    let deckDisplay = document.querySelector("#display"); //grabs the p tag
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newDeckDisp.setAttribute("id", "deckID");
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);
  }
});

/* 
CREATE CARD EVENT LISTENERS!!!!!!!!
 */
// var cardVar = document.querySelector(".card");
// cardVar.addEventListener("click", function () {
//   cardVar.classList.toggle("is-flipped");
// });

/** Track current cards */
let cardList = [];
let currentCardIndex = 000;

var buttonAdd = document.querySelector("#newCardButton");
buttonAdd.addEventListener("click", function () {
  let newCard = new card(currentCardIndex);
  newCard.addFrontText(frontText.value);
  newCard.addBackText(backText.value); //we need to add the card to the deck at somepoint: deck.addCard(Card)
  console.log(newCard.geBackText());
  console.log(newCard.getFrontText());
  frontOfCard.innerHTML = newCard.getFrontText();
  backOfCard.innerHTML = newCard.geBackText();
  cardList.push(newCard);
  currentCardIndex++;
  console.log(cardList);
  displayCards();
});
function displayCards() {
  let cardDisplay = document.querySelector("#display"); //grabs the p tag
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
