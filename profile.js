var xp = localStorage.getItem("xp")
var username = localStorage.getItem("username")
var level = localStorage.getItem("level")



let percentage = xp/500;
document.getElementsByClassName("progress").width = percentage;
console.log(xp, percentage)


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
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];
//Size of each piece
const data = [16, 16, 16, 16, 16, 16];
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

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

