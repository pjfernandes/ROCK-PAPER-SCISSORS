function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}

function play(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "TIE!";
  } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors")  || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
    return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else {
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  }
}

function game() {
  let playerChoice;
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt();
    console.log(play(playerChoice, computerPlay()));
  }
}
