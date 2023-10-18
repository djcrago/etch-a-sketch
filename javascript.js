const grid = document.querySelector('#container');
const resetButton = document.querySelector('#resetButton');

let n = 16; //size of grid - n x n
let size = (n ** 2); //total number of squares in grid

createSquares();

const squares = (Array.from(grid.querySelectorAll('.square'))).map(colorSquares);

resetButton.addEventListener('click', () => {
    removeSquares();
    do {
        n = +prompt('Size: ');
    } while (n > 100 || n < 1);
    size = (n ** 2);
    createSquares();
    const squares = (Array.from(grid.querySelectorAll('.square'))).map(colorSquares);
});

function createSquares() {
    for (let i = 0; i < size; i++) { //create size number of squares
        let square = document.createElement('div');
        square.classList.toggle('square');
        square.style.height = ((500/n) + 'px');
        square.style.width = ((500/n) + 'px');
        grid.appendChild(square);
    }
}

function colorSquares(square) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
}

function removeSquares() {
    const squares = Array.from(grid.querySelectorAll('.square'));
    for (square of squares) { //remove all squares from grid
        square.classList.toggle('square');
        grid.removeChild(square);
    }
}