// SECTION: Declaring const values
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_HOVER_COLOR = "#87CEEB";

// SECTION: Declaring easier to use variables
let defaultSize = DEFAULT_GRID_SIZE;

// SECTION: Reuseable methods
function resize() {
  size = slider.value;
}

// SECTION: Using DOM to get HTML Elements
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const slider = document.getElementById("sizeSlider");
const gridSizeIndicator = document.getElementById("sizeVal");

// SECTION: Event listeners
btn.onclick = (e) => resetContainer(slider.value);
slider.onchange = (e) => gridSizeIndication(slider.value);
slider.onchange = (e) => changeGridSize(slider.value);

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
  e.target.style.backgroundColor = "#00BFFF";
  console.log("Works");
  //   console.log(slider.value);
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

function changeGridSize(size) {
  console.log(size);
  gridSizeIndication(size);
  clearContainer();
  createDiv(size);
}

function gridSizeIndication(size) {
  gridSizeIndicator.innerHTML = `${size} X ${size}`;
}

// When page loads, this displays by default
window.onload = () => {
  createDiv(defaultSize);
};
