//nested if else


// WINNING 19

// 19 your guess is right
// 17 is too low

// 20 tooo high

let winningNumber=19;
  
// let userGuess = prompt("Guess a number");  // prompt always take input in string 


let userGuess = +prompt("Guess a number");  // prompt always take input in string 
console.log(typeof userGuess, userGuess);


if(userGuess ===winningNumber){
    console.log("Your guess is right");

}
else{
    if(userGuess < winningNumber)
    console.log("Too Low!!!!");
    else
    console.log("too high");
}

