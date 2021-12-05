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
    deckDisplay.innerHTML = "";
    let header = document.querySelector("#study");
    header.innerHTML = "You are currently studying " + deckName + "."; //changes the header to list the appropriate deck and which card is being looked at
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newDeckDisp.setAttribute("id", "deckID");
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);
    let card = document.getElementById("createCard");
    card.style.paddingTop = "225pt";
  } else if (deckDisplay.childElementCount != 0) {
    alert(
      "You cannot create more than one deck. Reload the page to make a new deck."
    );
  }
});

//study session card flip
var cardVar = document.querySelector(".card");
cardVar.addEventListener("click", function () {
  cardVar.classList.toggle("is-flipped");
});

/* 
CREATE CARD EVENT LISTENERS!!!!!!!!
 Track current cards */
//let cardList = [];
let currentCardIndex = 0;

var buttonAdd = document.querySelector("#newCardButton");
buttonAdd.addEventListener("click", function () {
  if (myDeck == null) {
    alert("unable to make cards without a deck! Please make a deck first.");
  } else {
    let newCard = new card(currentCardIndex);
    newCard.addFrontText(frontText.value);
    newCard.addBackText(backText.value); //we need to add the card to the deck at somepoint: deck.addCard(Card)
    // console.log(newCard.geBackText());
    // console.log(newCard.getFrontText());
    // frontOfCard.innerHTML = newCard.getFrontText();
    // backOfCard.innerHTML = newCard.geBackText();
    //cardList.push(newCard);
    currentCardIndex++;
    //console.log(cardList);
    myDeck.addCardToDeck(newCard);
    displayCards();
    showStudyCard();
  }
});
function showStudyCard() {
  let currCard = myDeck.showNextCard();
  let studyDisplay = document.querySelector("#studyItem");
  if (currCard !== null) {
    studyDisplay.innerHTML = "";
    let cardName = currCard.getFrontText();
    let newCardDiv = document.createElement("div");
    let newCardDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newCardDisp.setAttribute("id", "cardID");
    //newCardDisp.innerHTML = cardName;
    let frontCardDiv = document.createElement("div");
    let backCardDiv = document.createElement("div");
    frontCardDiv.classList.add("card__face");
    frontCardDiv.classList.add("card__face--front");
    backCardDiv.classList.add("card__face");
    backCardDiv.classList.add("card__face--back");
    frontCardDiv.innerHTML = cardName;
    backCardDiv.innterHTML = currCard.getBackText();
    frontCardDiv.setAttribute("id", "frontOfCard");
    backCardDiv.setAttribute("id", "backOfCard");
    //<!-- <div id='frontOfCard' class="card__face card__face--front">**Add Front Text**</div>
    //<div id='backOfCard' class="card__face card__face--back">**Add Back Text**</div> -->
    newCardDiv.classList.add("card");
    newCardDisp.classList.add("cardDisp");
    newCardDisp.appendChild(frontCardDiv);
    newCardDisp.appendChild(backCardDiv);
    //newCardDiv.appendChild(newCardDisp);
    //studyDisplay.appendChild(newCardDiv);
    studyDisplay.appendChild(newCardDisp);
  } else {
    studyDisplay.innerHTML = "You have studied the whole deck!";
  }
}

function displayCards() {
  let cardDisplay = document.querySelector("#displayCards"); //grabs the p tag
  while (cardDisplay.firstChild) {
    cardDisplay.removeChild(cardDisplay.firstChild);
  }
  for (let i = 0; i < myDeck.cards.length; i++) {
    let cardName = myDeck.cards[i].getFrontText();
    let newCardDiv = document.createElement("div");
    let newCardDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newCardDisp.setAttribute("id", "cardID");
    newCardDisp.innerHTML = cardName;
    newCardDiv.classList.add("card");
    newCardDisp.classList.add("cardDisp");
    newCardDiv.appendChild(newCardDisp);
    cardDisplay.appendChild(newCardDiv);
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
