
/* 
Global variable: deck!!!!! stores the current deck used
 */

const deck;




// NEW DECK EVENT LISTENER 
//Creates a new deck and adds it to a list for the user to keep track of their decks
let newDeck = document.querySelector("#newDeck");

newDeck.addEventListener("click", () => {
  deck = new Deck(); // creates a new deck object
  deck.name = document.querySelector("#deckName").value; // sets name of the deck to the given input from the user
  if (deck.name != "") {
    let deckName = deck.name;
    let deckDisplay = document.querySelector("#displayDecks"); //grabs the p tag
    let newDeckDiv = document.createElement("div");
    let newDeckDisp = document.createElement("div"); // I needed two div items, one within the other to get the display to work
    newDeckDisp.setAttribute("id", "deckID");
    newDeckDisp.innerHTML = deckName;
    newDeckDiv.classList.add("deck");
    newDeckDisp.classList.add("deckDisp");
    newDeckDiv.appendChild(newDeckDisp);
    deckDisplay.appendChild(newDeckDiv);

    newDeckDisp.addEventListener("click", () => {
      window.location.href = "viewCards.html";
    });
  }
});
