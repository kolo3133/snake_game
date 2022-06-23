let lastRenderTime = 0;
const SNAKE_SPEED = 2; //how many times snake is going to move per second

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
