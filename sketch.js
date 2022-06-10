// Declaring const values
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_HOVER_COLOR = "#87CEEB";

// Declaring easier to use variables
let size = DEFAULT_GRID_SIZE;

// Reuseable methods
function resize(newSize) {
  size = newSize;
}

// Using DOM to get HTML Elements
const container = document.getElementById("container");

// All specific functions
function createDiv(size) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    cell.classList.add("square");
    container.appendChild(cell);
  }
}

window.onload = () => {
  createDiv(size);
};

// createDiv(size);
