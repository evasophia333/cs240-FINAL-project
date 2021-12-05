/* 
Global variable: deck!!!!! stores the current deck used
 */

let myDeck = null;

// NEW DECK EVENT LISTENER
//Creates a new deck and adds it to a list for the user to keep track of their decks
let newDeck = document.querySelector("#newDeck");

newDeck.addEventListener("click", () => {
  myDeck = new Deck(); // creates a new deck object
  myDeck.name = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
  let deckDisplay = document.querySelector("#displayDecks"); //grabs the p tag
  if (myDeck.name != "" && deckDisplay.childElementCount == 0) {
    let deckName = myDeck.name;
    deckDisplay.innerHTML = '';
    let header = document.querySelector("#study");
    header.innerHTML = "You are currently studying " + deckName + "." //changes the header to list the appropriate deck and which card is being looked at
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newDeckDisp.setAttribute("id", "deckID");
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);
  }
  else if (deckDisplay.childElementCount != 0) {
    confrim('You cannot create more then one deck. Click OK to make a new Deck or cancel to reutrn to the old deck.')
  }
});


var cardVar = document.querySelector(".card");
cardVar.addEventListener("click", function () {
  cardVar.classList.toggle("is-flipped");
});

/* 
CREATE CARD EVENT LISTENERS!!!!!!!!
 Track current cards */
let cardList = [];
let currentCardIndex = 000;

var buttonAdd = document.querySelector("#newCardButton");
buttonAdd.addEventListener("click", function () {
  if (myDeck == null) {
    alert('unable to make cards without a deck! Please make a deck first.')
  } else {
    let newCard = new card(currentCardIndex);
    newCard.addFrontText(frontText.value);
    newCard.addBackText(backText.value); //we need to add the card to the deck at somepoint: deck.addCard(Card)
    // console.log(newCard.geBackText());
    // console.log(newCard.getFrontText());
    // frontOfCard.innerHTML = newCard.getFrontText();
    // backOfCard.innerHTML = newCard.geBackText();
    cardList.push(newCard);
    currentCardIndex++;
    console.log(cardList);
    displayCards();
  }
});



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

//displays the cards in the deck for the user to scroll through
// function displayCurrentCard() {
//   let currentCard = document.querySelector("#currentCard");
//   if (cardList.length != 0){
//     let card = cardList[currentCardIndex];
//     let frontText = card.getFrontText();
//     currentCard.innerHTML = frontText;
//   }
// }

