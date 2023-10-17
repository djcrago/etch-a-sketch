const grid = document.querySelector('#container');
let n = 16;
let j = (n ** 2);
console.log(j);

for (let i = 0; i < j; i++) {
    const square = document.createElement('div');
    square.classList.toggle('square');
    square.style.height = ((500/n) + 'px');
    square.style.width = ((500/n) + 'px');
    grid.appendChild(square);
}

const squares = (Array.from(grid.querySelectorAll('.square'))).map((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
});