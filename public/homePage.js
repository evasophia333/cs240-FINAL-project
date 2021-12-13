/* 
Global variable: deck!!!!! stores the current deck used
 */
let myDeck = null;

// NEW DECK EVENT LISTENER
//Creates a new deck and adds it to a list for the user to keep track of their decks
let newDeck = document.querySelector("#newDeck");

newDeck.addEventListener("click", () => {
  let deckDisplay = document.querySelector("#displayDecks"); //grabs the p tag
  if (deckDisplay.childElementCount != 0) { // if there is an existing deck, alert the user and ask if they'd like to make new one
    var result = confirm(
      "You cannot create more than one deck. Click 'ok' to confirm that you'd like to delete this deck and create a new one."
    );
    if (result) { // if they click ok...
      myDeck = null;
      let cardDisplay = document.querySelector("#displayCards"); //grabs the p tag
      let studyItem = document.querySelector("#studyItem");

      while (cardDisplay.firstChild) { // remove existing cards
        cardDisplay.removeChild(cardDisplay.firstChild);
      }
      while (studyItem.firstChild) { // remove existing study display
        studyItem.removeChild(studyItem.firstChild);
      }
      let frontDiv = document.createElement("div"); // create a new deck
      frontDiv.classList.add("card__face");
      frontDiv.classList.add("card__face--front");
      frontDiv.setAttribute("id", "frontOfCard");
      frontDiv.innerHTML = "**Add Front Text**";
      studyItem.appendChild(frontDiv);
      let backDiv = document.createElement("div");
      backDiv.classList.add("card__face");
      backDiv.classList.add("card__face--back");
      backDiv.setAttribute("id", "backOfCard");
      backDiv.innerHTML = "**Add Back Text**";
      studyItem.appendChild(backDiv);
    } else { // if they click cancel...
      return; // do nothing
    }
  }
  let myDeckName = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
  if (myDeckName != "") { // if the user has input a name for the new deck
    if (deckDisplay.childElementCount != 0) { // remove existing decks just in case
      deckDisplay.removeChild(deckDisplay.firstChild);
    }
    myDeck = new Deck(); // create a new deck object
    let deckName = myDeckName;
    deckDisplay.innerHTML = "";
    let header = document.querySelector("#study");
    header.innerHTML = "You are currently studying " + deckName + "."; //changes the header to list the appropriate deck and which card is being looked at
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div");
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);
    let card = document.getElementById("createCard");
    card.style.paddingTop = "225pt";
  }
  document.getElementById("deckName").value = ""; // reset input box to blank
});

// handle the next button
let nextButton = document.querySelector("#button02");
nextButton.addEventListener("click", function () {
  myDeck.movePointerForward(); // point at the next card
  showCard();
});

// handle the back button
let backButton = document.querySelector("#button01");
backButton.addEventListener("click", function () {
  myDeck.movePointerBack(); // point at the last card
  showCard();
});

// handle the reset button
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  myDeck.movePointerToBeginning(); // point at the first card
  showCard();
});

// handle the shuffle button
let shuffleButton = document.querySelector("#shuffle");
shuffleButton.addEventListener("click", function () {
  myDeck.shuffle(); //shuffles remaining cards after pointer
  showCard();
});

// study session card flip
var cardVar = document.querySelector(".card");
cardVar.addEventListener("click", function () {
  cardVar.classList.toggle("is-flipped");
});

/* 
CARD EVENT LISTENERS!!!!!!!!
 Track current cards */
let currentCardIndex = 0;

var buttonAdd = document.querySelector("#newCardButton");
let frontText = document.querySelector("#frontText");
let backText = document.querySelector("#backText");
buttonAdd.addEventListener("click", function () { // if the user clicks the "Add Back & Front Text" button...
  if (myDeck == null) { // if there is no deck yet...
    alert("unable to make cards without a deck! Please make a deck first."); // alert the user and ask them to make one
  } else { // if there is a deck...
    let newCard = new card(currentCardIndex);
    if (frontText.value == "" || backText.value == "") { // if either input box is empty...
      alert("Please add front and back text"); // ask the user to add text
    } else { // if there is text to put on the cards...
      newCard.addFrontText(frontText.value); // create a new card with the appropriate text
      newCard.addBackText(backText.value);
      currentCardIndex++; // increment the card index
      myDeck.addCardToDeck(newCard); // add it to the deck
      displayCards(); // show the card below the create card section
      if (myDeck.cards.length === 1) {
        showCard(); // update the study section
      }
    }
  }
  document.getElementById("frontText").value = ""; // clear the input fields
  document.getElementById("backText").value = "";
});

// function to show the cards below the create card section
function displayCards() {
  let cardDisplay = document.querySelector("#displayCards");
  while (cardDisplay.firstChild) { // remove the cards that are already there
    cardDisplay.removeChild(cardDisplay.firstChild);
  }
  for (let i = 0; i < myDeck.cards.length; i++) { // display all of the cards in the deck
    let cardName = myDeck.cards[i].getFrontText();
    let backText = myDeck.cards[i].getBackText();
    let newCardDiv = document.createElement("div");
    let newCardDisp = document.createElement("div");
    let newCardDispF = document.createElement("div");
    cardDisplay.appendChild(newCardDiv);
    newCardDiv.appendChild(newCardDispF);
    newCardDiv.appendChild(newCardDisp);
    newCardDisp.setAttribute("id", "leftBottom");
    newCardDispF.setAttribute("id", "leftTop");
    newCardDiv.setAttribute("id", "leftWrapper");
    newCardDisp.innerHTML = backText;
    newCardDispF.innerHTML = cardName;
  }
}

// function to show the card we're currently studying
function showCard() {
  let currCard = myDeck.getCurrCard();
  if (currCard !== null) { // if we have another card to study...
    let frontOfCard = document.querySelector("#frontOfCard"); // update the display to show it
    let backOfCard = document.querySelector("#backOfCard");
    frontOfCard.innerHTML = currCard.getFrontText();
    backOfCard.innerHTML = currCard.getBackText();
  } else { // if we dont' ahve any more cards...
    var result = confirm( // ask the user if they'd like to start from the begnning 
      "You have studied all the cards in your deck. Click 'ok' to restart studying from the beginning and cancel to stay on the last card. "
    );
    if (result) { // if they say 'ok'...
      if (myDeck.cards.length != 0) { // if the deck isn't empty...
        myDeck.movePointerToBeginning(); // move them to the beginning of the deck
        showCard();
      }
    } else { // otherwise...
      if (myDeck.cards.length != 0) { // if the deck isn't empty...
         myDeck.movePointerBack(); // leave them at the last card
        showCard();
      }
    }
  }
}
