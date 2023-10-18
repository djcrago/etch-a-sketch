const grid = document.querySelector('#container');
let screenWidth = (screen.availWidth) / 3; //3 was chosen arbitrarily
grid.style.cssText = `height: ${(screenWidth + 'px')}; width: ${(screenWidth + 'px')};`;
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', removeSquares);
let gridSize = 16;
let totalSquares = (gridSize ** 2);
createSquares();

function createSquares() {
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        square.style.cssText = `height: ${((screenWidth/gridSize) + 'px')}; width: ${((screenWidth/gridSize) + 'px')};`
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