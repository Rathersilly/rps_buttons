buttons = document.querySelectorAll("button");
console.log(buttons)
buttons.forEach(button => button.addEventListener('click', playRound));



const choices = ["Rock", "Paper", "Scissors"];
let stats = [0,0,0];

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function computerPlay() {
  return choices[(Math.floor(Math.random() * 3))];
  }


function playRound (e) {
  
  let resultText = "";
  playerSelection = this.id;
  computerSelection = computerPlay();
  console.log(e);       //e is the event that called this function.
  console.log(this);    //this is node that is source of the event. 
  console.log(playerSelection);
  console.log(computerSelection);


  difference = choices.indexOf(playerSelection) - choices.indexOf(computerSelection);
  if (difference === 1 || difference === -2){
    resultText = "You win! " + playerSelection + " beats " + computerSelection + "!"
    stats[0]++;
  }
  else if (difference === 0) {
    resultText = "It's a tie!";
    stats[2]++;

  }
  else{
    resultText = "You lose! " + computerSelection + " beats " + playerSelection + "!"
    stats[1]++;

  }
  statText = stats[0] + " wins. " + stats[1] + " losses. " + stats[2] + " ties."
  document.getElementById("result").textContent = resultText;
  document.getElementById("stats").textContent = statText;  
}
    
   