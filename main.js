import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

// Creating a game loop, function that reapate herself infinity
// For updating for ex. Snake position calculations in current time

function main(currentTime) {
  // Time stemp of main function
  window.requestAnimationFrame(main); // Passing main function as a props to animationFrame
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // Deviding time by 1000 to get time in miliseconds
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // numbers of second each the snake move

  lastRenderTime - currentTime;

  //   Game logic
  update();
  draw();
}

window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
};
const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
};
