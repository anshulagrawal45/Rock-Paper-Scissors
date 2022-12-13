let welcomescreen = document.getElementById("welcome-screen");
let gamescreen = document.getElementById("game-screen");
let endscreen = document.getElementById("end-screen");
let resultscreen = document.getElementById("result-screen");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let computer = document.getElementById("computer");
let user = document.getElementById("user");
let resultinter = document.getElementById("result-inter");
let scoreinter = document.getElementById("score");
let scorefinal = document.getElementById("total-score");
let result = document.getElementById("result");
let i = 0,score = 0;

function start() {
  if (i < 5) {
    welcomescreen.style.display = "none";
    endscreen.style.display = "none";
    gamescreen.style.display = "block";
  } else {
    end();
  }
}

let icon,iconname;
function selecticon(icon) {
  paper.style.border = "none";
  rock.style.border = "none";
  scissor.style.border = "none";
  icon.style.border = "4px solid #2a2a2a";
  iconname = icon.id;
}
function selectbtn(icon) {
  i++;
  gamescreen.style.display = "none";
  endscreen.style.display = "block";
  let array = ["scissor", "paper", "rock"];
  let computericon = array[Math.floor(Math.random() * array.length)];
  game(iconname, score, computericon);
  computer.src = `img/${computericon}.png`;
  user.src = `img/${iconname}.png`;
}
function game(iconname, score, computericon) {
  if (iconname == "rock") {
    if (computericon == "scissor") {
      score++;
      resultinter.innerText = "You Win";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "green";
    } else if (computericon == "paper") {
      resultinter.innerText = "You Lose";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "red";
    } else {
      i--;
      resultinter.innerText = "Tie";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "blue";
    }
  } else if (iconname == "paper") {
    if (computericon == "scissor") {
      resultinter.innerText = "You Lose";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "red";
    } else if (computericon == "paper") {
      i--;
      resultinter.innerText = "Tie";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "blue";
    } else {
      score++;
      resultinter.innerText = "You Win";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "green";
    }
  } else {
    if (computericon == "scissor") {
      i--;
      resultinter.innerText = "Tie";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "blue";
    } else if (computericon == "paper") {
      score++;
      resultinter.innerText = "You Win";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "green";
    } else {
      resultinter.innerText = "You Lose";
      scoreinter.innerText = `Score: ${score}`;
      resultinter.style.backgroundColor = "red";
    }
  }
}
function end() {
  resultscreen.style.display = "block";
  endscreen.style.display = "none";
  scorefinal.innerText = `Total Score: ${score}`;
  if(result>=3){
    result.innerText = "You Won !!!";
  }
  else{
    result.innerText = "You Lose :("
  }
}
function newgame(){
    location.reload();
}