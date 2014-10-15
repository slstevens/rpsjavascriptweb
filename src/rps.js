function Rock() {};
function Scissors() {};
function Paper() {};

function Rules() {};

Rules.prototype.winner = function(choiceOne, choiceTwo) {
	if (choiceOne === rock)
		return choiceOne
	else
		return choiceTwo
};