function Rock() {
	this.type = 'Rock';
};
function Scissors() {
	this.type = 'Scissors'
};
function Paper() {
	this.type = 'Paper'
};
function Lizard() {
	this.type = 'Lizard'
};
function Spock() {
	this.type = 'Spock'
};

function Draw() {};

function Rules() {

	this.trumps = {
		"Rock" : {"Scissors": "blunt", "Lizard": "crushes"},
		"Scissors" : {"Paper": "cuts", "Lizard": "decapitates"},
		"Paper" : {"Rock": "covers", "Spock": "disproves"},
		"Lizard" : {"Paper": "eats", "Spock": "poisons"},
		"Spock" : {"Scissors": "smashes", "Rock": "vaporises"}
	};
};

Rules.prototype.winner = function(choiceOne, choiceTwo) {
	if (choiceOne.type === choiceTwo.type)
		return new Draw;
	if (choiceTwo.type in this.trumps[choiceOne.type] )
		return choiceOne

	return choiceTwo
};