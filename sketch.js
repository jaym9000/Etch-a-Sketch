const container = document.querySelector(".grid");

for(let i = 0; i<16; i++){
    const cell = document.createElement("div");
    cell.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    container.appendChild(cell);
}
// Find a way to make 16x16 grid of divs.