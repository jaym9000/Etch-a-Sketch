// SECTION: Declaring const values
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_HOVER_COLOR = "#87CEEB";

// SECTION: Declaring easier to use variables
let currentSize = DEFAULT_GRID_SIZE;

// SECTION: Reuseable methods
function resize(newSize) {
  size = newSize;
}

// SECTION: Using DOM to get HTML Elements
const container = document.getElementById("container");
const btn = document.getElementById("btn");
const slider = document.getElementById("sizeSlider");
const gridSizeIndicator = document.getElementById("sizeVal");

// SECTION: Event listeners
btn.onclick = () => resetContainer();
slider.onchange = (e) => changeGridSize(e);
gridSizeIndicator.onchange = (e) => writeAboveSlider(e);

// SECTION: All specific functions
function createDiv(size) {
  //   container.style.gridTemplateColumns = `repeat(${size}, 25px [col-start]`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr`;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.style.cssText = "border: 1px solid black;";
    let widthxheight = parseInt(402 / size);
    cell.style.width = `${widthxheight}px`;
    cell.style.height = `${widthxheight}px`;
    cell.classList.add("square");
    cell.addEventListener("mouseenter", hoverChangeColor);
    container.appendChild(cell);

    //change color of div on hover(event listener above activates this function on the grid)
    function hoverChangeColor() {
      cell.style.backgroundColor = "#00BFFF";
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

function changeGridSize(size) {
  //   document.write(slider.value + "X" + slider.value);
  console.log(slider.value);
}

function gridSizeInidcation(size) {
  gridSizeIndicator.innerHTML = "";
  gridSizeIndicator.innerHTML = `${slider.value} X ${slider.value}`;
}

// When page loads, this displays by default
window.onload = () => {
  createDiv(currentSize);
};
