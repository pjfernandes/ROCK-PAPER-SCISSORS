function computerPlay() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}
