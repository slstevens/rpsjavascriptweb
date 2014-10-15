// A winner
// A choice between r p s
// rules of the game
// player
// The Game - "Rock, Paper, Scissors"

describe('Rock, Paper, Scissors', function() {

	describe('rules decides the winner', function() {
		
		beforeEach(function() {
			rules = new Rules;
			rock = new Rock;
			scissors = new Scissors;
		});

		it ("rock plays scissors", function() {
			expect(rules.winner(rock, scissors)).toEqual(rock);
		});

		it ("scissors plays rock", function() {
			expect(rules.winner(scissors,rock)).toEqual(rock);
		});

	});

});