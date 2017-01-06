console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*if (cardOne === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
if (cardThree === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}*/
//creates the game board
var gameBoard = document.getElementById('game-board');
//cards in the play
var cards = ['queen', 'queen', 'king', 'king'];
//cards that would be in play
var cardsInPlay = [];
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = "card";
		//stores data about an element that's not tied to a style
		cardElement.setAttribute('data-card', cards[i]);
		//executes isTwoCards when clicked
		cardElement.addEventListener('click', isTwoCards);
		//appends the cards to the gameBoard
		gameBoard.appendChild(cardElement);
		gameBoard.appendChild(cardElement);
	}
}
var isTwoCards = function() {
	//gives access to the card you clicked
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='barackObama.jpg' class='image'>"; //king
	} else {
		this.innerHTML = "<img src='michelleObama.jpg' class='image'>"; // queen
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
//checks if the two cards selected match
var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
};
createBoard();