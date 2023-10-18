const grid = document.querySelector('#container');
let gridSize = 16; //size of grid == n x n
let totalSquares = (gridSize ** 2); //total number of squares in grid

createSquares();
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', removeSquares);

function createSquares() {
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        square.style.height = ((500/gridSize) + 'px');
        square.style.width = ((500/gridSize) + 'px');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        grid.appendChild(square);
    }
}

function removeSquares() {
    const squares = Array.from(grid.querySelectorAll('.square'));
    for (square of squares) {
        square.classList.toggle('square');
        grid.removeChild(square);
    }
    do {
        gridSize = +prompt('Size: ');
    } while (gridSize > 100 || gridSize < 1);
    totalSquares = (gridSize ** 2);
    createSquares();
}