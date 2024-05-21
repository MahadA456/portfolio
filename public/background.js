function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  
  function draw() {
    background(255, 204, 0);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 20, 20);
  }
  