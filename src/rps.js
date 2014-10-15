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

function Rules() {};

Rules.prototype.winner = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type)
		return new Draw;
	else if (choiceOne.type === 'Rock')
		return choiceOne
	else
		return choiceTwo
};