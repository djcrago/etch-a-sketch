const grid = document.querySelector('#container');
    let gridWidth = (screen.availWidth) / 3; //3 was chosen arbitrarily
    grid.style.cssText = `height: ${(gridWidth + 'px')}; width: ${(gridWidth + 'px')};`; //dynamically determine grid size
const startDrawing = document.createElement('button');
    startDrawing.classList.toggle('btn'); //adds style from css
    startDrawing.textContent = 'Start Drawing!';
    grid.appendChild(startDrawing);
    startDrawing.addEventListener('click', () => {
        createSquares();
        grid.removeChild(startDrawing);
    });
const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', removeSquares);
let gridSize = 16; //16 was chosen arbitrarily
let totalSquares = (gridSize ** 2);



function createSquares() {
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        square.style.cssText = `height: ${((gridWidth/gridSize) + 'px')}; width: ${((gridWidth/gridSize) + 'px')};`
        square.addEventListener('mouseover', () => {
            let randomColor = addColor();
            square.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
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

function addColor () {
    let rgb = [0, 0, 0];
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return rgb;
}