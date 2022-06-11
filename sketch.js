// Declaring const values
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_HOVER_COLOR = "#87CEEB";

// Declaring easier to use variables
let currentSize = DEFAULT_GRID_SIZE;

// Reuseable methods
function resize(newSize) {
  size = newSize;
}

// Using DOM to get HTML Elements
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const btnn = document.createElement("div");

// Event listeners
btn.onclick = () => resetContainer();

// All specific functions
function createDiv(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    cell.classList.add("square");
    cell.addEventListener("mouseenter", hoverChangeColor);
    container.appendChild(cell);

    //change color of div on hover(event listener above activates this function on the grid)
    function hoverChangeColor() {
      cell.style.backgroundColor = "red";
      console.log("Works");
    }
  }
}

// clears grid
function clearContainer() {
  container.innerHTML = "";
}

// clears grid and resets with a new grid of the same size as currently selected
function resetContainer() {
  clearContainer();
  createDiv(currentSize);
}

// When page loads, this displays by default
window.onload = () => {
  createDiv(currentSize);
};

// createDiv(size);
