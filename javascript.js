const grid = document.querySelector('#container');
let n = 16;
let j = Math.sqrt(n);
console.log(j);

for (let i = 0; i < n; i++) {
    const square = document.createElement('div');
    square.style.cssText = 'color: blue; background-color: lightblue;';
    let h = (500/j) + 'px';
    square.style.height = h;
    let w = (500/j) + 'px'
    square.style.width = w;
    square.textContent = 'square';
    grid.appendChild(square);
}
console.log(grid);