let gridSize = 45; // Size of the grid
let elements = []; // Array to store drawn elements
let currentRow = 0; // Current row index
let currentColumn = 0; // Current column index
let lastGenerationFrame = 0; // Frame count of the last shape generation
let generationDelay = 50; // Delay between each shape generation (in frames)
let direction = 1; // Direction of shape generation (1 for right to left, -1 for left to right)

function setup() {
  createCanvas(windowWidth, windowHeight); // Set the size of the canvas to match the window size
  background(255); // Set the background color to white
}

function draw() {
  if (frameCount - lastGenerationFrame > generationDelay) {
    generateShape(); // Generate a shape if the delay has passed
    lastGenerationFrame = frameCount; // Update the last generation frame
  }
  update(); // Update the canvas
}

function generateShape() {
  let columns = Math.ceil(width / gridSize); // Number of columns for the current row
  let x, y;

  // Determine x-coordinate based on direction
  if (direction === 1) {
    x = currentColumn * gridSize;
  } else {
    x = (columns - currentColumn - 1) * gridSize; // Adjust x-coordinate for left to right generation
  }

  y = currentRow * gridSize; // Y-coordinate of the shape

  // Choose a random fill color for the shape
  let shapeColor = color(random(255), random(255), random(255));
  let shape = {
    x: x,
    y: y,
    color: shapeColor,
    createTime: millis() // Record the creation time of the shape
  };
  elements.push(shape); // Add shape to the elements array
  
  currentColumn++; // Move to the next column

  // Check if the row is complete
  if (currentColumn >= columns) {
    currentRow++; // Move to the next row
    currentColumn = 0; // Reset the column index

    // Alternate the direction for the next row
    direction *= -1;
  }
}

function mouseDragged() {
  // Check if the mouse is over any square and remove it
  for (let i = elements.length - 1; i >= 0; i--) {
    let element = elements[i];
    if (mouseX >= element.x && mouseX < element.x + gridSize &&
        mouseY >= element.y && mouseY < element.y + gridSize) {
      elements.splice(i, 1); // Remove the element
      break; // Exit the loop after removing one element
    }
  }
}

function keyPressed() {
  if (key == 'c' || key == 'C') {
    background(255); // Clear the canvas when the 'c' key is pressed
    elements = []; // Clear the elements array
    currentRow = 0; // Reset the current row index
    currentColumn = 0; // Reset the current column index
    lastGenerationFrame = 0; // Reset the last generation frame
    direction = 1; // Reset the direction
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size when window is resized
}


function drawElements() {
  for (let element of elements) {
    fill(element.color);
    noStroke(); // No outline
    rect(element.x, element.y, gridSize, gridSize); // Draw the shape

    let centerX = element.x + gridSize / 2;
    let centerY = element.y + gridSize / 2;

    let circleSize;
    if ((element.x + element.y) % (gridSize * 2) == 0) {
      circleSize = gridSize / 4;
    } else {
      circleSize = gridSize / 2;
    }

    fill(255 - red(element.color), 255 - green(element.color), 255 - blue(element.color));
    ellipse(centerX, centerY, circleSize, circleSize);
  }
}

function update() {
  background(255); // Clear the canvas
  drawElements(); // Draw elements
}
