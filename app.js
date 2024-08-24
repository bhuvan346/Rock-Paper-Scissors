let score = JSON.parse(localStorage.getItem("score")) || {
  //inside reset score we remove the score object
  //this makes the object to be null
  //so we need to assign some default values
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

//updateScore();
//Checking the player move with computer move
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }
  //Computing the result
  if (result === "You win.") {
    score.Wins = score.Wins + 1;
  } else if (result === "You lose.") {
    score.Losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  }
  //Setting the score in the localstorage
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  //Updating the result
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img src="/images/${playerMove}-emoji.png" class="move-icon">

  <img src="/images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

}
//Updating the score
function updateScore() {
  document.querySelector(
    ".js-Score"
  ).innerHTML = `Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`;
}
//Picking the Computer move
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
