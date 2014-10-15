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
	else if (choiceOne.type === 'Paper' && choiceTwo.type === 'Rock' ||
			 choiceOne.type === 'Rock' && choiceTwo.type === 'Scissors' ||
			 choiceOne.type === 'Scissors' && choiceTwo.type === 'Paper')
		return choiceOne
	else
		return choiceTwo
};