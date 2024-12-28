let gridSize = 45; // Size of the grid
let elements = []; // Array to store drawn elements
let lastGenerationFrame = 0; // Frame count of the last shape generation
let generationDelay = 1; // Delay between each shape generation (in frames)

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
  let availablePositions = getAvailablePositions(); // Get available positions on the canvas
  if (availablePositions.length > 0) {
    let index = floor(random(availablePositions.length)); // Randomly select an index from available positions
    let position = availablePositions[index]; // Get the selected position
    let x = position.x;
    let y = position.y;

    // Choose a random fill color for the shape
    let shapeColor = color(random(255), random(255), random(255));
    let shape = {
      x: x,
      y: y,
      color: shapeColor,
      createTime: millis() // Record the creation time of the shape
    };
    elements.push(shape); // Add shape to the elements array
  }
}

function getAvailablePositions() {
  let availablePositions = [];
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      let occupied = false;
      for (let element of elements) {
        if (x === element.x && y === element.y) {
          occupied = true;
          break;
        }
      }
      if (!occupied) {
        availablePositions.push({ x: x, y: y });
      }
    }
  }
  return availablePositions;
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

