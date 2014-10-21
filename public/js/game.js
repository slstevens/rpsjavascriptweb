  	$(document).ready(function() {
      var compChoice;
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
             $('#result').text("Snap, it's a " + winner.type + "! " + "You both chose "+ compChoice.type + ". Choose again!");      
        else
  			     $('#result').text("The winner is " + winner.type);
  		};

  		$('.img-choice').on('click', function() {
        compChoice = computersChoice();
  			andTheWinnerIs(game.winner(playersChoice(this), compChoice))
        $('#choices').text("Computer chose " + compChoice.type + " " + ". You chose " + playersChoice(this).type)
  		});

});