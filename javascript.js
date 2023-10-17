const grid = document.querySelector('#container');
let n = 16;
let j = (n ** 2);
console.log(j);

for (let i = 0; i < j; i++) {
    const square = document.createElement('div');
    square.style.cssText = 'color: blue; background-color: lightblue;';
    let h = (500/n) + 'px';
    square.style.height = h;
    let w = (500/n) + 'px'
    square.style.width = w;
    square.textContent = 'sqr';
    grid.appendChild(square);
}
console.log(grid);

const square = grid.querySelector('div')