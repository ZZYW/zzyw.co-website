// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Stochastic Tree with angles fluctuating with Perlin noise
// Nature of Code, Chapter 8

// Perlin noise offset 
var yoff = 0;
var mouseCount = 0;
// Random seed to control randomness while drawing the tree
var seed = 5;

var mousePos = [];

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("cn1");
}

function draw() {
	background(0);
  noStroke();
  text("zzyw.co loading...",windowWidth/2,windowHeight/2);
	fill(255);
	//text("Click mouse to generate a new tree", 10, height-20);
	stroke(255);
	// Start the tree from the bottom of the screen
	translate(windowWidth/2, windowHeight);
	// Move alogn through noise
	yoff += 0.005;
	randomSeed(seed);
	// Start the recursive branching!
	branch(70, 0);
}


function mousePressed() {
  // New tree starts with new noise offset and new random seed
  yoff = random(1000);
  seed = millis();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function branch(h, xoff) {
  // thickness of the branch is mapped to its length
  var sw = map(h, 2, 100, 1, 2);
  strokeWeight(sw);
  // Draw the branch
  line(0, 0, 0, -h);
  // Move along to end
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.72;
  
  // Move along through noise space
  xoff += 0.1;

  if (h > 4) {
    // Random number of branches
    var n = random(0, 3);
    for (var i = 0; i < n; i++) {

      // Here the angle is controlled by perlin noise
      // This is a totally arbitrary way to do it, try others!
      var theta = map(noise(xoff+i, yoff), 0, 1, -PI/3, PI/3);
      if (n%2==0) theta *= -1;
      
      push();      // Save the current state of transformation (i.e. where are we now)
      rotate(theta);     // Rotate by theta
      branch(h, xoff);   // Ok, now call myself to branch again
      pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}

function updateMouseAcceleration(){
  if(mouseCount >= 20){
    mouseCount = 0;
  }

  mousePos[mouseCount] = createVector(mouseX,mouseY);
  mouseCount++;
  
}
