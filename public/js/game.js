  	$(document).ready(function() {
      var compChoice;
      var playChoice;
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
        if (winner.type === playChoice.type)
            $('#result').text("You win! Your " + playChoice.type.toLowerCase() + " beat your opponent's " + compChoice.type.toLowerCase())
        if (winner.type === compChoice.type)
            $('#result').text("You lose! Your " + playChoice.type.toLowerCase() + " lost against your opponent's " + compChoice.type.toLowerCase())
  		};

  		$('.img-choice').on('click', function() {
        compChoice = computersChoice();
        playChoice = playersChoice(this);
  			andTheWinnerIs(game.winner(playChoice, compChoice));
  		});

});