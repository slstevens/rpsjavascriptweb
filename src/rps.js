function Rock() {};
function Scissors() {};
function Paper() {};

function Rules() {};

Rock.prototype.beats = function(choice) {
	if(choice === scissors) 
		return true;
	else
		return false;
};

Rules.prototype.winner = function(choiceOne, choiceTwo) {
	return choiceOne
};