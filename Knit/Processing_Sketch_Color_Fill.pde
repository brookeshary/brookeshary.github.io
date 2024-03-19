int gridSize = 50; // Size of the grid

void setup() {
  size(1920, 1080); // Set the size of the canvas
  background(255); // Set the background color to white
}

void draw() {
  // No need for anything in draw(), as we will only draw when the mouse is dragged
}

void mouseDragged() {
  // Snap mouse coordinates to the nearest grid intersection
  int x = mouseX - (mouseX % gridSize);
  int y = mouseY - (mouseY % gridSize);
  
  // Choose a random fill color for the square
  color squareColor = color(random(255), random(255), random(255));
  fill(squareColor);
  noStroke(); // No outline
  
  rect(x, y, gridSize, gridSize); // Draw the square
  
  // Calculate the center of the square
  float centerX = x + gridSize / 2;
  float centerY = y + gridSize / 2;
  
  // Draw a circle at the center of the square
  // Choose circle size based on square configuration
  float circleSize;
  if ((x + y) % (gridSize * 2) == 0) {
    circleSize = gridSize / 4; // Small circle size for this configuration
  } else {
    circleSize = gridSize / 2; // Larger circle size for this configuration
  }
  
  fill(255 - red(squareColor), 255 - green(squareColor), 255 - blue(squareColor)); // Invert the color for contrast
  ellipse(centerX, centerY, circleSize, circleSize); // Draw the circle
}

void keyPressed() {
  if (key == 'c' || key == 'C') {
    background(255); // Clear the canvas when the 'c' key is pressed
  }
}
