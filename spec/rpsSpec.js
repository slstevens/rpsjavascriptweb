// A winner
// A choice between r p s
// rules of the game
// player
// The Game - "Rock, Paper, Scissors"

describe('Rock, Paper, Scissors', function() {

	describe("gestures", function() {
		it('should know its a Rock', function() {
			rock = new Rock;
			expect(rock.type).toEqual('Rock')
		});	

		it('should know its a Paper', function() {
			paper = new Paper;
			expect(paper.type).toEqual('Paper')
		});

		it('should know its a Scissors', function() {
			scissors = new Scissors;
			expect(scissors.type).toEqual('Scissors')
		});

		it('should know its a lizard', function() {
			lizard = new Lizard;
			expect(lizard.type).toEqual('Lizard')
		});

	});

	describe('rules decides the winner', function() {
		
		beforeEach(function() {
			rules = new Rules;
			rock = new Rock;
			scissors = new Scissors;
			paper = new Paper;
			lizard = new Lizard;
			spock = new Spock;
		});

		it ("rock plays scissors", function() {
			expect(rules.winner(rock, scissors)).toEqual(rock);
		});

		it ("scissors plays rock", function() {
			expect(rules.winner(scissors, rock)).toEqual(rock);
		});

		it ("rock plays rock", function() {
			rock2 = new Rock;
			draw = new Draw;
			expect(rules.winner(rock, rock2)).toEqual(draw);
		});

		it ("paper plays rock", function() {
			expect(rules.winner(paper, rock)).toEqual(paper);
		});

		it ("rock plays paper", function() {
			expect(rules.winner(rock, paper)).toEqual(paper);
		})

		it("scissors plays paper", function() {
			expect(rules.winner(scissors, paper)).toEqual(scissors);
		});

		it("paper plays scissors", function() {
			expect(rules.winner(paper, scissors)).toEqual(scissors);
		});

		it('lizard plays rock', function() {
			expect(rules.winner(lizard, rock)).toEqual(rock);
		});

		it('rock plays lizard', function() {
			expect(rules.winner(rock, lizard)).toEqual(rock);
		});

		it('lizard plays paper', function() {
			expect(rules.winner(lizard, paper)).toEqual(lizard);
		});

		it('paper plays lizard', function() {
			expect(rules.winner(paper, lizard)).toEqual(lizard);
		});

		it('lizard plays scissors', function() {
			expect(rules.winner(lizard, scissors)).toEqual(scissors)
		});

		it('scissors plays lizard', function() {
			expect(rules.winner(scissors, lizard)).toEqual(scissors)
		});

		// Going to stop doing both possibilities now

		it('lizard plays spock', function() {
			expect(rules.winner(lizard, spock)).toEqual(lizard);
		});
	});

	// describe('Playing RPS', function() {
	// 	it("player should have a name", function() {
	// 		player = new Player
	// 		expect(player.name);
	// 	});
	// });
});
