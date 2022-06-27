export let inputDirection = { x: 0, y: 0 }; // setting to not move a snake by default

window.addEventListener("keydown", (e) => {
  //Modifying snake position by this switch statement
  switch (
    e.key // taking key as a event
  ) {
    case "ArrowUp":
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
