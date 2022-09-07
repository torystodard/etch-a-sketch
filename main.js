let gridSize = 16;
let color = "blue";
let rainbowActive = false;

createGrid();

function createGrid() {
  const grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = "repeat(" + gridSize + ",1fr";

  gridSize *= gridSize;

  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", () => {
      if (rainbowActive === true) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
      } else {
        cell.style.backgroundColor = color;
      }
    });
    grid.appendChild(cell);
  }
}

function changeGridSize() {
  gridSize = prompt("Enter a grid size between 1-100.");
  clearGrid();
}

function clearGrid() {
  const oldCells = document.querySelectorAll(".cell");
  oldCells.forEach((cell) => {
    cell.remove();
  });

  createGrid();
}

function rainbow() {
  rainbowActive = !rainbowActive;
}
