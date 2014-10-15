// A winner
// A choice between r p s
// rules of the game
// player
// The Game - "Rock, Paper, Scissors"

describe('Rock, Paper, Scissors', function() {

	describe('rules decides the winner', function() {
		it ("rock plays scissors", function() {
			rules = new Rules;
			rock = new Rock;
			scissors = new Scissors;
			expect(rules.winner(rock, scissors)).toEqual(rock);
		});
	});


	it("Rock beats Scissors", function() {
		rock = new Rock;
		scissors = new Scissors;
		expect(rock.beats(scissors)).toEqual(true);
	});

	it("Rock loses against Paper", function() {
		paper = new Paper;
		rock = new Rock;
		expect(rock.beats(paper)).toEqual(false);
	});

});