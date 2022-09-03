const container = document.querySelector('#container');
const chooseSizeButton = document.querySelector('#choose-size');
const eraser = document.querySelector('#eraser');
let gridSize = 16;

chooseSizeButton.addEventListener('click', () => {
  gridSize = parseInt(
    prompt(
      'Please choose how many cols would you like to create (choose between 1 and 100)'
    )
  );
  if (gridSize > 100) {
    return;
  }
  grid.remove();
  createGrid();
});

function createGrid() {
  let col = 1;
  console.log(gridSize);
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  container.appendChild(grid);

  while (col <= gridSize) {
    console.log(gridSize);
    const colClass = document.createElement('div');
    colClass.classList.add(`col${col}`);
    grid.appendChild(colClass);
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = 40 / gridSize + 'em';
      square.style.height = 40 / gridSize + 'em';
      colClass.appendChild(square);
      paintOnHover(square);
      eraseElements(square);
    }
    col++;
  }
}

function paintOnHover(square) {
  square.addEventListener('mouseover', () => square.classList.add('active'));
}

function eraseElements(square) {
  eraser.addEventListener('click', () =>
    square.addEventListener('mouseover', () =>
      square.classList.contains('active')
        ? square.classList.remove('active')
        : none
    )
  );
}

createGrid();
