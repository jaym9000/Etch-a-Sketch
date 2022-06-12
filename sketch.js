// SECTION: Declaring const values
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = "#00BFFF";

// SECTION: Declaring easier to use variables
let defaultSize = DEFAULT_GRID_SIZE;
let defaultColor = DEFAULT_COLOR;

// SECTION: Reuseable methods
function resize() {
  size = slider.value;
}

// SECTION: Using DOM to get HTML Elements
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const slider = document.getElementById("sizeSlider");
const gridSizeIndicator = document.getElementById("sizeVal");
const singleColor = document.getElementById("color");
const allColors = document.getElementById("rgb");

// SECTION: Event listeners
btn.onclick = (e) => resetContainer(slider.value);
slider.oninput = (e) => changeGridSize(slider.value);
// allColors.onclick = (e) => changeColor();

// SECTION: All specific functions
function createDiv(size) {
  //   container.style.gridTemplateColumns = `repeat(${size}, 25px [col-start]`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr`;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.addEventListener("mouseenter", hoverChangeColor);
    container.appendChild(cell);
  }
}

//change color of div on hover
function hoverChangeColor(e) {
  e.target.style.backgroundColor = singleColor.value;
}

// clears grid
function clearContainer() {
  container.innerHTML = "";
}

// clears grid and resets with a new grid of the same size as currently selected
function resetContainer(size) {
  clearContainer();
  createDiv(size);
}

// Changes the amount of divs (squares) in the grid
function changeGridSize(size) {
  gridSizeIndication(size);
  clearContainer();
  createDiv(size);
}

// This is the indicator above the slider saying '16 X 16' which means there are 16 x 16 squares.
function gridSizeIndication(size) {
  gridSizeIndicator.innerHTML = `${size} X ${size}`;
}

//
function changeColor(e) {
  let x = Math.floor(Math.random() * 256); // range is 0-255
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let thergb = "rgb(" + x + "," + y + "," + z + ")";
  e.target.style.background = thergb;
}

// When page loads, this displays by default
window.onload = () => {
  createDiv(defaultSize);
};
