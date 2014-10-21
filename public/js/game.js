  	$(document).ready(function() {

  		var game = new Rules
  		var gest = {rock: new Rock, paper: new Paper, scissors: new Scissors, lizard: new Lizard, spock: new Spock}
  		var computersChoice = function() {
  			gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
  			return gestures[Math.floor(Math.random()* gestures.length)];
  		};

  		var andTheWinnerIs = function(winner) {
        if(winner === 'Draw')
             $('h1').text("Snap, it's a " + winner);
           
        else
  			     $('h1').text("The winner is " + winner);
  		};

  		var playersChoice = function(choice) {
  			return gest[$(choice).data('gesture')]
  		};

  		$('.img-choice').on('click', function() {
  			andTheWinnerIs(game.winner(playersChoice(this), computersChoice()).type)
  		});

});