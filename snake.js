import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1; //how many times snake is going to move per second
const snakeBody = [{ x: 11, y: 11 }]; // setting position for snake

// fucntion for updating all game logic
export function update() {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };

    // Defines that position of snake is based on inputDirection varible

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
  }
}

// function that draws everything on a screen based on update function
export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div"); // Creating a snake body

    snakeElement.style.gridRowStart = segment.y; // Getting start y position from snakeBody variable
    snakeElement.style.gridColumnStart = segment.x; // Getting start x position from snakeBody variable

    snakeElement.classList.add("snake");

    gameBoard.appendChild(snakeElement);
  });
};
