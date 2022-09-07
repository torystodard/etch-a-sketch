let gridSize = 16;

createGrid();

function createGrid() {
  const grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = "repeat(" + gridSize + ",1fr";

  gridSize *= gridSize;

  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "blue";
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
