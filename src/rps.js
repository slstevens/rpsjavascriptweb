function Rock() {
	this.type = 'Rock';
};
function Scissors() {
	this.type = 'Scissors'
};
function Paper() {
	this.type = 'Paper'
};
function Draw() {};

function Rules() {

	this.trumps = {
		"Rock" : "Scissors",
		"Scissors" : "Paper",
		"Paper" : "Rock"
	}
};

Rules.prototype.winner = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type)
		return new Draw;
	if (this.trumps[choiceOne.type] === choiceTwo.type)
		return choiceOne

	return choiceTwo
};