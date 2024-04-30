const grid = document.querySelector('#grid');

const defaultCellsInARow = 16;

const startDrawingBtn = document.createElement('button');

startDrawingBtn.textContent = 'Start Drawing!';
startDrawingBtn.addEventListener('click', () => {
  grid.removeChild(startDrawingBtn);
  populateGrid(defaultCellsInARow);
});

grid.appendChild(startDrawingBtn);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', handleReset);

// Functions

function populateGrid(cellsInARow) {
  const gridWidth = 450;
  const cellWidth = gridWidth / cellsInARow;

  const totalNumberOfCells = cellsInARow ** 2;

  for (let i = 0; i < totalNumberOfCells; i += 1) {
    const randomColor = addColor();
    const cell = createCell(cellWidth, randomColor);
    grid.appendChild(cell);
  }
}

function addColor() {
  const rgb = [];

  for (let i = 0; i < 3; i += 1) {
    rgb.push(Math.floor(Math.random() * 255));
  }
  rgb.push(0);

  return rgb;
}

function createCell(cellWidth, cellColor) {
  const cell = document.createElement('div');

  cell.style.cssText = `height: ${cellWidth}px; width: ${cellWidth}px;`;
  cell.addEventListener('mouseover', () => {
    const rgb = `${cellColor[0]}, ${cellColor[1]}, ${cellColor[2]}`;
    let a = cellColor[3];
    a += 0.1;
    cellColor.splice(3, 1, a);

    cell.style.backgroundColor = `rgba(${rgb}, ${a})`;
  });

  return cell;
}

function handleReset() {
  const newCellsInARow = getNewGridSize();

  if (newCellsInARow) {
    removeCells();
    populateGrid(newCellsInARow);
  }
}

function getNewGridSize() {
  let valid = true;

  const newCellsInARow = +prompt('New board size: (size x size)\nSize: ');

  if (newCellsInARow > 100 || newCellsInARow < 1) {
    valid = false;
    alert('Size must be between 1 and 100');
  }

  if (valid) return newCellsInARow;
  if (!valid) return null;
}

function removeCells() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}
