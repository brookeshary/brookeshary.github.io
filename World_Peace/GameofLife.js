const cols = 50;
const rows = 40;
const spacing = 1;
let cellWidth, cellHeight;

function setup() {
  createCanvas((.9)*windowWidth, (.8)*windowHeight);
  noLoop();
  noStroke();
  cellWidth = (width - (cols + 1) * spacing) / cols;
  cellHeight = cellWidth;
  drawGrid();
}

function drawGrid() {
  background(255);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols / 2; i++) { //set left half 
      let x = spacing + i * (cellWidth + spacing);
      let y = spacing + j * (cellHeight + spacing);
      fill(0); //black initially
      rect(x, y, cellWidth, cellHeight);
    }
  }
}
function mouseClicked() {
  let i = floor((mouseX - spacing) / (cellWidth + spacing));
  let j = floor((mouseY - spacing) / (cellHeight + spacing));

  if (i >= 0 && i < cols / 2 && j >= 0 && j < rows) {
    let x = spacing + i * (cellWidth + spacing);
    let y = spacing + j * (cellHeight + spacing);

    // left side cell, initial
    fill(255);
    rect(x, y, cellWidth, cellHeight);

    // Mirrored cell in the right side to a random color
    let mirroredX = width / 2 + x + cellWidth;
    fill(random(50, 255), random(30, 200), random(50, 255));
    rect(mirroredX, y, cellWidth, cellHeight);
  }

  // Check if the click is on the right side, and make the cell disappear
  if (mouseX > width / 2) {
    let iRight = floor((mouseX - width / 2 - spacing) / (cellWidth + spacing));
    let jRight = floor((mouseY - spacing) / (cellHeight + spacing));
    let xRight = width / 2 + iRight * (cellWidth + spacing);
    let yRight = spacing + jRight * (cellHeight + spacing);
    
    fill(255);
    rect(xRight, yRight, cellWidth, cellHeight);
  }
}