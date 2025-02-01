function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //rotate(90);
  
  let h = hour();
  let m = minute();
  let s = second();
  
  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(s, 0, 60, 0, 360);
  arc(200, 200, 300, 300, 0, secondAngle);
  
  stroke(150, 100, 255);
  let minuteAngle = map(m, 0, 60, 0, 360);
  arc(200, 200, 280, 280, 0, minuteAngle);
  
  stroke(150, 255, 100);
  let hourAngle = map(h, 0, 24, 0, 360);
  arc(200, 200, 260, 260, 0, hourAngle);
  
}
