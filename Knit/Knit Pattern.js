let gridSize = 50; // Size of the grid

function setup() {
  createCanvas(1920, 1080); // Set the size of the canvas
  background(255); // Set the background color to white
}

function draw() {
  // No need for anything in draw(), as we will only draw when the mouse is dragged
}

function mouseDragged() {
  // Snap mouse coordinates to the nearest grid intersection
  let x = mouseX - (mouseX % gridSize);
  let y = mouseY - (mouseY % gridSize);
  
  // Choose a random fill color for the square
  let squareColor = color(random(255), random(255), random(255));
  fill(squareColor);
  noStroke(); // No outline
  
  rect(x, y, gridSize, gridSize); // Draw the square
  
  // Calculate the center of the square
  let centerX = x + gridSize / 2;
  let centerY = y + gridSize / 2;
  
  // Draw a circle at the center of the square
  // Choose circle size based on square configuration
  let circleSize;
  if ((x + y) % (gridSize * 2) == 0) {
    circleSize = gridSize / 4; // Small circle size for this configuration
  } else {
    circleSize = gridSize / 2; // Larger circle size for this configuration
  }
  
  fill(255 - red(squareColor), 255 - green(squareColor), 255 - blue(squareColor)); // Invert the color for contrast
  ellipse(centerX, centerY, circleSize, circleSize); // Draw the circle
}

function keyPressed() {
  if (key == 'c' || key == 'C') {
    background(255); // Clear the canvas when the 'c' key is pressed
  }
}
