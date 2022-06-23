export const SNAKE_SPEED = 1; //how many times snake is going to move per second
const snakeBody = [{ x: 11, y: 11 }]; // setting position for snake

// fucntion for updating all game logic
export const update = () => {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  //   snakeBody[0].x += 1;
  //   snakeBody[0].y += 0;
};

// function that draws everything on a screen based on update function
export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div"); // Creating a snake body

    snakeElement.style.gridRowStart = segment.x; // Getting start x position from snakeBody variable
    snakeElement.style.gridColumnStart = segment.y; // Getting start x position from snakeBody variable

    snakeElement.classList.add("snake");

    gameBoard.appendChild(snakeElement);
  });
};
