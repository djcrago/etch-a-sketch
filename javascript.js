const grid = document.querySelector('#container');
let n = 16; //size of grid - n x n
let size = (n ** 2); //total number of squares in grid
console.log(size);

function createSquares(size) {
    for (let i = 0; i < size; i++) { //create j number of squares
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.style.height = ((500/n) + 'px');
        square.style.width = ((500/n) + 'px');
        grid.appendChild(square);
    }
}

function removeSquares() {
    const squares = Array.from(grid.querySelectorAll('.square'));
    for (square of squares) { //remove all squares from grid
        grid.removeChild(square);
    }
}

createSquares(size);
const squares = (Array.from(grid.querySelectorAll('.square'))).map((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});

const reset = document.querySelector('#reset');
console.log(reset);
reset.addEventListener('click', () => {
    removeSquares();
    let newSize
    do {
        newSize = +prompt('Size: ');
    } while (newSize > 100 || newSize < 1);
});