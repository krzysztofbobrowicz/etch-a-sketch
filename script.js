const container = document.querySelector('#container');
const chooseSizeButton = document.querySelector('#choose-size');
const eraser = document.querySelector('#eraser');
let gridSize = 16;

function createGrid() {
  let col = 1;
  console.log(gridSize);
  const grid = document.createElement('div');
  grid.setAttribute('id', 'grid');
  container.appendChild(grid);

  while (col <= gridSize) {
    console.log(gridSize);
    console.log(col);
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
      eraseOnHover(square);
    }
    col++;
  }
}

chooseSizeButton.addEventListener('click', () => {
  gridSize = parseInt(
    prompt(
      'Please choose how many columns you would like to create (choose between 1 and 100)'
    )
  );
  if (gridSize > 100 || isNaN(gridSize)) {
    return;
  }
  grid.remove();
  createGrid();
});

function paintOnHover(square) {
  square.addEventListener('mouseover', () => square.classList.add('active'));
}

function toggleSwitch() {
  eraser.addEventListener('click', () => {
    if (eraser.textContent === 'Eraser') {
      eraser.textContent = 'Paint';
    } else {
      eraser.textContent = 'Eraser';
    }
  });
}

function eraseOnHover(square) {
  eraser.addEventListener('click', () => {
    if (eraser.textContent === 'Eraser') {
      square.addEventListener('mouseover', () =>
        square.classList.remove('active')
      );
    } else {
      paintOnHover(square);
    }
  });
}

createGrid();
toggleSwitch();
