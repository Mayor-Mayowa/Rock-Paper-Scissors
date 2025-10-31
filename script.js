console.log("WELCOME CHALLENGER")
const choices = ["rock","paper","scissors"]




function playGame(){

humanScore = 0;
computerScore = 0;

  function playRound(humanChoice,computerChoice){
   var getComputerChoice = choices[Math.floor(Math.random()*choices.length)]
   var getHumanChoice = prompt(choices).toLowerCase()
   console.log("You chose" + " " + getHumanChoice)
   console.log("Computer plays" + " " + getComputerChoice)
 if (getHumanChoice === getComputerChoice){
   console.log("it's a tie");
   return "tie"
 }
 else if(getHumanChoice == "rock" && getComputerChoice == "scissors"){
   humanScore++;
   console.log("You Win rock beats scissors");
 }
  else if (getHumanChoice == "paper" && getComputerChoice == "rock"){
   humanScore++;
   console.log("You Win paper beats rock")
 }
else if (getHumanChoice == "scissors" && getComputerChoice == "paper"){
   humanScore++;
   console.log("You Win scissors beats paper")
 }
else if (getHumanChoice == !getHumanChoice){
  console.log("please pick rock, paper, or scissors")
}
else {
   console.log("You Lose" +" "+ getComputerChoice +" " + "beats" + " " + getHumanChoice)
   computerScore++;
 }
 console.log(humanScore +" " + computerScore)
}
for (let round = 1; round <= 5; round++){
    console.log(`---Round ${round}---`)
  playRound();
}

console.log("FINAL RESULTS");
console.log(`YOU: ${humanScore} |   | COMPUTER: ${computerScore}`);

if (humanScore > computerScore){
  console.log("YOU EMERGE VICTORIOUS!!!, HAIL THEE FOR THY TALENT IS UNMATCHED")
}
else if (computerScore > humanScore){
  console.log("TSK! PITIFUL! YOU LOST!!!")
}
else {
  console.log("A TIE IT IS!")
}
}
playGame()