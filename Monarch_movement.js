//CONSTANTS
const NUM_CIRCLES = 50;
const FLOAT_SPEED =1.0;
const TRANSITION_SPEED = 0.05;
const CIRCLE_SIZE_DIVISOR = 25;

//VARIABLES
let circles = [];
let float = true;
let circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //create initialize circle objects with position and speed
  for (let i = 0; i <NUM_CIRCLES; i++) {
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

  //update and draw each circle sin the array
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    if (float) {
      //update the circles position based on speed
    circle.x += circle.speedX;
    circle.y += circle.speedY;

      //check for collisions with edges and reverse speed if necessary
    if (circle.x < 0 + circleSize /2 || circle.x > width - circleSize /2) {
      circle.speedX = -circle.speedX;
    }

    if (circle.y < 0 + circleSize /2 || circle.y > width - circleSize /2) {
      circle.speedY = -circle.speedY;
    }
    } else {
      //calculate the width needed for the circles
    let spacing = width / NUM_CIRCLES;

      //set target positions for the lined up state
      circle.targetX = i * spacing + circleSize * 0.75;
      circle.targetY = height / 2;

      //animate the transition to the target position using Lerp
      circle.x = lerp(circle.x, circle.targetX, TRANSITION_SPEED);
      circle.y = lerp(circle.y, circle.targetY, TRANSITION_SPEED);
    }

    //draw the circle and the updated position
    ellipse (circle.x, circle.y, circleSize, circleSize)
  }
}
//  function mouseWheel () {
  //  float = false;
//  }

  function mouseClicked() {
    float = !float;
    }

function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
  circleSize = width / CIRCLE_SIZE_DIVISOR;
}
