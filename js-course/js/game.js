// Lesson 11 Game
let playGame = confirm("Are you ready to play?");
if (playGame) {
  let playerChoice = prompt("Please enter 'rock', 'paper', or 'scissors'.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3); // 0 for rock, 1 for paper, 2 for scissors
      let computer = computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
      if (playerOne === computer) {
        alert(`Player 1: ${playerOne}\nComputer: ${computer}\nTie!`);
      }
      else if (playerOne === "rock") {
        if (computer === "paper") {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nCPU wins!`);
        }
        else {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nPlayer wins!`)
        }
      }
      else if (playerOne === "paper") {
        if (computer === "rock") {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nPlayer wins!`)
        }
        else {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nCPU wins!`);
        }
      }
      else {
        if (computer === "rock") {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nCPU wins!`);
        }
        else {
          alert(`Player 1: ${playerOne}\nComputer: ${computer}\nPlayer wins!`)
        }
      }
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Thanks for playing!");
    }
    else {
      alert("Invalid choice given. Refresh to play again.");
    }
  }
  else {
    alert("No choice given. Refresh to play again.");
  }
}
else {
  alert("Game terminated.");
}