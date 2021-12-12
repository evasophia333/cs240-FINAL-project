/* 
Global variable: deck!!!!! stores the current deck used
 */

let myDeck = null;

// NEW DECK EVENT LISTENER
//Creates a new deck and adds it to a list for the user to keep track of their decks
let newDeck = document.querySelector("#newDeck");

newDeck.addEventListener("click", () => {
  let deckDisplay = document.querySelector("#displayDecks"); //grabs the p tag
  if (deckDisplay.childElementCount != 0) {
    var result = confirm("You cannot create more than one deck. Click 'ok' to confirm that you'd like to delete this deck and create a new one.");
    if (result) {
      myDeck = null;
      console.log(myDeck)
      let cardDisplay = document.querySelector("#displayCards"); //grabs the p tag
      let studyItem = document.querySelector("#studyItem");
      console.log(studyItem.firstChild);
      while (cardDisplay.firstChild) {
        cardDisplay.removeChild(cardDisplay.firstChild);
      }
      while (studyItem.firstChild) {
        studyItem.removeChild(studyItem.firstChild);
      }
      //console.log(studyContent)
      // let studyDiv = document.createElement('div');
      // studyDiv.classList.add('card');
      // studyDiv.setAttribute('id', 'studyItem');
      // studyContent.appendChild(studyDiv);
      let frontDiv = document.createElement('div');
      frontDiv.classList.add("card__face");
      frontDiv.classList.add("card__face--front");
      frontDiv.setAttribute('id', 'frontOfCard');
      frontDiv.innerHTML = "**Add Front Text**";
      studyItem.appendChild(frontDiv);
      let backDiv = document.createElement('div');
      backDiv.classList.add("card__face");
      backDiv.classList.add("card__face--back");
      backDiv.setAttribute('id', 'backOfCard');
      backDiv.innerHTML = "**Add Back Text**";
      studyItem.appendChild(backDiv);
    }
    else {
      return;
    }
  }
  myDeckName = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
  if (myDeckName != "") {
    if (deckDisplay.childElementCount != 0) {
      deckDisplay.removeChild(deckDisplay.firstChild)
    }
    myDeck = new Deck(); // creates a new deck object
    let deckName = myDeckName;
    deckDisplay.innerHTML = "";
    let header = document.querySelector("#study");
    header.innerHTML = "You are currently studying " + deckName + "."; //changes the header to list the appropriate deck and which card is being looked at
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);
    let card = document.getElementById("createCard");
    card.style.paddingTop = "225pt";
  }
});

let nextButton = document.querySelector("#button02");
nextButton.addEventListener("click", function () {
  showNextStudyCard();
});

let backButton = document.querySelector("#button01");
backButton.addEventListener("click", function () {
  showLastStudyCard();
});

// SENDS CODE INTO MYSTERIOUS NEVER-ENDING LOOP
let shuffleButton = document.querySelector('#shuffle');
shuffleButton.addEventListener('click', function () {
  console.log("shuffling")
  shuffleCards();
});

// FOR BOTH SHUFFLE AND RESET, NEED ALERT FOR WHEN THERE'S NOTHING TO STUDY

// ALSO DOESN'T WORK?
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  console.log("resetting");
  resetDeck();
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
let frontText = document.querySelector("#frontText");
let backText = document.querySelector("#backText");
buttonAdd.addEventListener("click", function () {
  if (myDeck == null) {
    alert("unable to make cards without a deck! Please make a deck first.");
  } else {
    let newCard = new card(currentCardIndex);
    newCard.addFrontText(frontText.value);
    newCard.addBackText(backText.value);
    frontOfCard.innerHTML = newCard.frontText;
    backOfCard.innerHTML = newCard.backText;
    //cardList.push(newCard);
    currentCardIndex++;
    myDeck.addCardToDeck(newCard);

    displayCards();
    if (myDeck.cards.length === 1) {
      showNextStudyCard();
    }
  }
});


function displayCards() {
  let cardDisplay = document.querySelector("#displayCards"); //grabs the p tag
  while (cardDisplay.firstChild) {
    cardDisplay.removeChild(cardDisplay.firstChild);
  }
  for (let i = 0; i < myDeck.cards.length; i++) {
    let cardName = myDeck.cards[i].getFrontText();
    let backText = myDeck.cards[i].getBackText();
    let newCardDiv = document.createElement("div");
    let newCardDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
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

function showNextStudyCard() {
  let currCard = myDeck.showNextCard();
  console.log(currCard);
  //let studyDisplay = document.querySelector("#studyItem");
  if (currCard !== null) {
    let frontOfCard = document.querySelector("#frontOfCard");
    let backOfCard = document.querySelector("#backOfCard");
    frontOfCard.innerHTML = currCard.getFrontText();
    backOfCard.innerHTML = currCard.getBackText();
  } else {
    document.querySelector("#frontOfCard").innerHTML = "End of deck!";
    document.querySelector("#backOfCard").innerHTML = "End of deck!";
    //studyDisplay.innerHTML = "You have studied the whole deck!"; //TODO how to reset the page
  }
}

function showLastStudyCard() {
  let currCard = myDeck.showLastCard();
  let studyDisplay = document.querySelector("#studyItem");
  if (currCard !== null) {
    let frontOfCard = document.querySelector("#frontOfCard");
    let backOfCard = document.querySelector("#backOfCard");
    frontOfCard.innerHTML = currCard.getFrontText();
    backOfCard.innerHTML = currCard.getBackText();
  } else {
    document.querySelector("#frontOfCard").innerHTML = "Beginning of deck!";
    document.querySelector("#backOfCard").innerHTML = "Beginning of deck!";
    //studyDisplay.innerHTML = "You have reached the beginning of the deck. You cannot go back farther!"; //TODO how to reset the page
  }
}

function shuffleCards() {
  myDeck.shuffle();
  showNextStudyCard();
}

function resetDeck() {
  myDeck.studyWholeDeckAgain();
  showNextStudyCard();
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
