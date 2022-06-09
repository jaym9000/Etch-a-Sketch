const container = document.querySelector(".container");
const resetBtn = document.querySelector(".btn");

// for loop inside for loop creates a 16 x 16 div, css styling makes each square 16x16 with a solid black line
function divCreation() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const cell = document.createElement("div");
      cell.style.cssText = "border: 1px solid black; height: 16px; width: 16px";
      container.appendChild(cell);

      hoverMouse(cell);
    }
  }
}

// highlight the mouseenter target
// makes it so when u over over the boxes their background color changes.
function hoverMouse(box) {
  box.addEventListener(
    "mouseenter",
    function (e) {
      box.style.backgroundColor = "red";
    },
    false
  );
}

// Clears the box content when reset button is clicked
function resetPage() {
  container.textContent = "";
  divCreation();
}

divCreation();

resetBtn.addEventListener("click", resetPage);
