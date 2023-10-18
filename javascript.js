const grid = document.querySelector('#container');
    let gridWidth = (screen.availWidth) / 3; //3 was chosen arbitrarily
    grid.style.cssText = `height: ${(gridWidth + 'px')}; width: ${(gridWidth + 'px')};`; //dynamically determine grid size (not for mobile)
const startDrawing = document.createElement('button');
    startDrawing.classList.toggle('btn'); //adds style from css
    startDrawing.textContent = 'Start Drawing!';
    startDrawing.addEventListener('click', () => {
        createSquares();
        grid.removeChild(startDrawing);
    });
    grid.appendChild(startDrawing);
const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', removeSquares);
let gridSize = 16; //16 was chosen arbitrarily
let totalSquares = (gridSize ** 2);



function createSquares() {
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
            square.classList.toggle('square'); //so we can find it in removeSquares
            square.style.cssText = `height: ${((gridWidth/gridSize) + 'px')}; width: ${((gridWidth/gridSize) + 'px')};`
        let randomColor = addColor();
            let a = 0;
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, ${a += 0.1})`;
            });
        grid.appendChild(square);
    }
}

function removeSquares() {
    do {
        gridSize = +prompt('New board = size x size\nSize: ');
        if (gridSize === 0) { //allows user to cancel board reset
            return;
        }
    } while (gridSize > 100 || gridSize < 1);
        totalSquares = (gridSize ** 2);
    const squares = Array.from(grid.querySelectorAll('.square'));
        for (square of squares) {
            grid.removeChild(square);
        };
    createSquares();
}

function addColor () {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return rgb;
}