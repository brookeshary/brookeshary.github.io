let gridSize = 30; // Size of the grid
let elements = []; // Array to store drawn elements

function setup() {
  createCanvas(windowWidth, windowHeight); // Set the size of the canvas to match the window size
  background(0); // Set the background color to black
}

function draw() {
  update(); // Update the canvas
}

function mouseDragged() {
  // Snap mouse coordinates to the nearest grid intersection
  let x = mouseX - (mouseX % gridSize);
  let y = mouseY - (mouseY % gridSize);
  
  // Choose a random fill color for the square
  let squareColor = color(random(255), random(255), random(255));
  let square = {
    x: x,
    y: y,
    color: squareColor,
    createTime: millis() // Record the creation time of the square
  };
  elements.push(square); // Add square to the elements array
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

function removeExpiredElements() {
  let currentTime = millis();
  for (let i = elements.length - 1; i >= 0; i--) {
    let element = elements[i];
    if (currentTime - element.createTime > 5000) { // Remove elements after 5 seconds (5000 milliseconds)
      elements.splice(i, 1);
    }
  }
}

function drawElements() {
  for (let element of elements) {
    fill(element.color);
    noStroke(); // No outline
    rect(element.x, element.y, gridSize, gridSize); // Draw the square

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
  removeExpiredElements(); // Remove expired elements
  drawElements(); // Draw elements
}
