//CONSTANTS
const NUM_CIRCLES = 200;
const FLOAT_SPEED =2;
const TRANSITION_SPEED = .04;
const CIRCLE_SIZE_DIVISOR = 80;

//VARIABLES
let circles = [];
let float = true;
let circleSize;
let font;
let fontSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();


  //create initialize circle objects with position and speed
  for (let i = 0; i < NUM_CIRCLES; i++) {
    circleSize = width / CIRCLE_SIZE_DIVISOR;
    let circle = {
      x: random(circleSize/2, width - circleSize/2),
      y: random(circleSize/2, width - circleSize/2),
      speedX: random(-FLOAT_SPEED, FLOAT_SPEED),
      speedY: random(-FLOAT_SPEED, FLOAT_SPEED),
      targetX:null,
      targetY:null,
    };
    circles.push(circle);
  }
}
//clear the background after each frame
function draw() {
  clear(); // Clear the background (translucent) each frame


  //update and draw each circle in the array
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
      if (float) {
        // Set the fill color to red (RGB)
        fill(244, 238, 229);
      //update the circles position based on speed
    circle.x += circle.speedX + random(-2, 2);
    circle.y += circle.speedY + random(-2, 2);

      //check for collisions with edges and reverse speed if necessary
    if (circle.x < 0 + circleSize /2 || circle.x > width - circleSize /2) {
      circle.speedX = -circle.speedX;
    }

    if (circle.y < 0 + circleSize /2 || circle.y > height - circleSize /2) {
      circle.speedY = -circle.speedY;
    }
    } else {
      //calculate the width needed for the circles
    let spacing = width / NUM_CIRCLES*2;

      //set target positions for the lined up state
      //circle.targetX = i * spacing + circleSize * 0.75;
      //circle.targetY = height;

      //set target positions for the lined up state
      circle.targetX = mouseX;
      circle.targetY = mouseY;

      //animate the transition to the target position using Lerp
      circle.x = lerp(circle.x, circle.targetX, TRANSITION_SPEED);
      circle.y = lerp(circle.y, circle.targetY, TRANSITION_SPEED);
    }

    //draw the circle and the updated position
    ellipse (circle.x, circle.y, circleSize, circleSize)
  }
}

  function mouseClicked() {
    float = !float;
    }

function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
  circleSize = width / CIRCLE_SIZE_DIVISOR;
}
