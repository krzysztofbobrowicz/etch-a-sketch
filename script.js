const container = document.querySelector('#container');
const grid = document.querySelector('#grid');
container.appendChild(grid);
let col = 1;
// const gridPrompt = prompt(
//   'Please choose how many cols would you like to create (choose between 1 and 100)'
// );

const gridSize = 16;

while (col <= gridSize) {
  const colClass = document.createElement('div');
  colClass.classList.add(`col${col}`);
  grid.appendChild(colClass);
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = 40 / gridSize + 'em';
    square.style.height = 40 / gridSize + 'em';
    colClass.appendChild(square);

    square.addEventListener('mouseover', () => square.classList.add('active'));
  }
  col++;
}
