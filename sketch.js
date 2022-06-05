const container = document.querySelector(".container");

// for loop inside for loop creates a 16 x 16 div, css styling makes it fit in a grid
for(let i = 0; i<16; i++){
    for(let j = 0; j<16; j++){
        const cell = document.createElement("div");
        cell.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        container.appendChild(cell);
    }
}
// Find a way to make 16x16 grid of divs.

// using the container div in html, create 16x16 more divs using Javascript
//after creating these divs, use CSS to make the divs look like a grid with the following options:

/*
float/clear
inline-block
flexbox
CSS Grid

(Probably go with flexbox or CSS Grid but learn all 4 to get familiar with them)
*/