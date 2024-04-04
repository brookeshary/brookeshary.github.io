// thank you Geongeorge for the base of this code!
var rows = 40;
var cols = 60;
var block = [0, 0]; // 0->width 1->height

// Define an array of symbols
var symbols = ['☮'];

// Set dead color
var dead = '';

var play = false;
var pix = makeArray(cols, rows);
var pixT = makeArray(cols, rows); // temp array

var lastX = -1;
var lastY = -1;

function setup() {
    var cnv = createCanvas(1500, 1000);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(0,0,0,0);
    block = drawGrid(rows, cols);
    frameRate(15);

    
  // Set alive color using getRandomSymbol function
  alive = getRandomSymbol();
}

function getRandomSymbol() {
  return random(symbols);
}

function draw() {
  // empty for now
  if (play) {
    // game mechanics here
    var neighbors = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        neighbors = getNeighborCount(i, j);
        if (getPixelStatus(i, j)) {
          // alive cell
          if (neighbors < 2) {
            // kill (under population)
            drawPixelTemp(i, j, false);
          } else if (neighbors <= 3) {
            // lives for another generation
            drawPixelTemp(i, j, true);
          } else {
            // kill (over population)
            drawPixelTemp(i, j, false);
          }
        } else {
          // dead cell
          if (neighbors == 3) {
            // born (reproduction)
            drawPixelTemp(i, j, true);
          }
        }
      }
    }

    // make temp the real and draw
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (pixT[i][j] == 1) {
          drawPixel(i, j, true);
        } else {
          drawPixel(i, j, false);
        }
      }
    }
  } // endif
} // end fn

function makeArray(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

function drawGrid(r, c) {
  noStroke();
  const blockWidth = width / c;
  const blockHeight = height / r;
  for (let i = 0; i < height; i += blockHeight) {
    line(0, i, width, i);
  }
  for (let j = 0; j < width; j += blockWidth) {
    line(j, 0, j, height);
  }
  let blocks = [blockWidth, blockHeight];
  return blocks;
}

function drawPixel(x, y, a) {
  let posiX = x * block[0];
  let posiY = y * block[1];

  if (a == true) {
    pix[x][y] = 1;
    fill(dead);
  } else {
    pix[x][y] = 0;
    fill(dead);
  }

  // font size based on the block size
  let fontSize = min(block[0], block[1]) * .9;
  textSize(fontSize);

  // Draw text with fill color
  text(a ? alive : dead, posiX + block[0] / 2, posiY + block[1] / 2);
}

function drawPixelTemp(x, y, a) {
  if (a == true) {
    pixT[x][y] = 1;
  } else {
    pixT[x][y] = 0;
  }
}

function togglePixel(x, y) {
  if (pix[x][y] == 0) {
    drawPixel(x, y, true);
  } else {
    drawPixel(x, y, false);
  }
}

function getPixelAddr(x, y) {
  var arr = new Array(2);
  arr[0] = (x - x % block[0]) / block[0];
  arr[1] = (y - y % block[1]) / block[1];
  return arr;
}

function getPixelStatus(x, y) {
  if (pix[x][y] == 1) {
    return true;
  } else {
    return false;
  }
}

function getNeighborCount(x, y) {
  var count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (j == 0 && i == 0) continue;
      if (pixelExists(x + i, y + j)) {
        if (getPixelStatus(x + i, y + j)) count++;
      }
    }
  }
  return count;
}

function pixelExists(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) return true;
  else return false;
}

function keyPressed() {
  if (keyIsPressed) {
    if (keyCode == ENTER) {
      console.log("Enter");
      play = !play;
    }
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    let pos = getPixelAddr(mouseX, mouseY);
    lastX = pos[0];
    lastY = pos[1];
    togglePixel(lastX, lastY);
  }
}

function mouseDragged() {
  if (mouseIsPressed) {
    let pos = getPixelAddr(mouseX, mouseY);
    if (pos[0] != lastX || pos[1] != lastY) {
      lastX = pos[0];
      lastY = pos[1];
      togglePixel(lastX, lastY);
    }
  }
}
