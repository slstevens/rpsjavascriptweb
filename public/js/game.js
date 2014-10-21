  	$(document).ready(function() {

  		var game = new Rules
  		var gest = {rock: new Rock, paper: new Paper, scissors: new Scissors, lizard: new Lizard, spock: new Spock}
      var computersChoice =  function() {
  		  gestures = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
        return gestures[Math.floor(Math.random()* gestures.length)];

      };
  	


      var playersChoice = function(choice) {
        return gest[$(choice).data('gesture')]
      };

  		var andTheWinnerIs = function(winner) {
        if(winner.type === 'Draw')
             $('h2').text("Snap, it's a " + winner.type);
              
        else
  			     $('h2').text("The winner is " + winner.type);
              
  		};

  		$('.img-choice').on('click', function() {
        var compChoice = computersChoice();
  			andTheWinnerIs(game.winner(playersChoice(this), compChoice))
        $('h3').text("Computer chose " + compChoice.type + " " + "Player chose " + playersChoice(this).type)
  		});



});