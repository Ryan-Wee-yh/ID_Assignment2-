var xp = localStorage.getItem("xp")
var username = localStorage.getItem("username")
var level = localStorage.getItem("level")



showusername();
function showusername(){
    $('#username').text(username);
}
showlevel();
function showlevel(){
    $('#level').text(level);
}
showxp();
function showxp(){
    $('#xp').text(xp);
}

// spin the wheel
const spinButton = document.querySelector('#spin-button');
const wheel = document.querySelector('#wheel');
const result = document.querySelector('#result');

let options = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];

spinButton.addEventListener('click', spinWheel);

function spinWheel() {
  let randomIndex = Math.floor(Math.random() * options.length);
  let randomDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
  let finalDegree = randomDegree + (360 * 5) + (randomIndex * (360 / options.length));

  wheel.style.transition = 'all 5s ease-out';
  wheel.style.transform = 'rotate(' + finalDegree + 'deg)';

  setTimeout(function() {
    result.textContent = 'You won: ' + options[randomIndex];
  }, 5000);
}


// tic tac toe
const board = document.querySelector("#board");
const squares = document.querySelectorAll(".square");
let currentPlayer = "X";

board.addEventListener("click", handleClick);

function handleClick(event) {
  const square = event.target;
  if (square.textContent === "") {
    square.textContent = currentPlayer;
    switchPlayer();
  }
}

// function switchPlayer() {
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

board.addEventListener("click", handleClick);

function handleClick(event) {
  const square = event.target;
  if (square.textContent === "") {
    square.textContent = currentPlayer;
    if (!checkForWin() && !checkForDraw()) {
      switchPlayer();
      if (currentPlayer === "O") {
        makeAIMove();
      }
    }
  }
}

function makeAIMove() {
  let emptySquares = [];
  for (const square of squares) {
    if (square.textContent === "") {
      emptySquares.push(square);
    }
  }

  let randomIndex = Math.floor(Math.random() * emptySquares.length);
  emptySquares[randomIndex].textContent = currentPlayer;

  if (!checkForWin()) {
    switchPlayer();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (const combination of winningCombinations) {
        if (
            squares[combination[0]].textContent === currentPlayer &&
            squares[combination[1]].textContent === currentPlayer &&
            squares[combination[2]].textContent === currentPlayer
        ) {
            alert(`Player ${currentPlayer} wins!`);
            return true;
        }
    }

    return false;
}

function checkForDraw() {
    for (const square of squares) {
        if (square.textContent === "") {
            return false;
        }
    }

    alert("It's a draw!");
    return true;
}
