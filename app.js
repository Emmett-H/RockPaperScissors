let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
var description;

function getCompChoice(){
  const choices = ['r', 'p', 's'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function convertToWord(letter){
  if (letter === 'r'){
    description = ' smashes '
    return 'Rock';
  }
  
  if (letter === 's'){
    description = ' snips '
    return 'Scissors';
  }
  
  if (letter === 'p'){
    description = ' covers '
    return 'Paper';
  }
}

function win(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} ${description} ${convertToWord(computerChoice)}. You win! 🔥`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)} ${description} ${convertToWord(userChoice)}. You lost! 💩`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);

}

function draw(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Draw! 😑`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function game(userChoice){
  const computerChoice = getCompChoice();
  
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
      win(userChoice, computerChoice);
      break;
      
    case 'rp':
    case 'sr':
    case 'ps':
      lose(userChoice, computerChoice);
      break;  
    
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);
      break;    
  }
}

function main(){
  rock_div.addEventListener('click',() => game('r'));
  paper_div.addEventListener('click',() => game('p'));
  scissors_div.addEventListener('click',() => game('s'));
}

main();


