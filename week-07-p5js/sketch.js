function setup() {
  createCanvas(900, 900);
  
  for (let i = 0; i < 55; i++) {
    rectX[i+2] = random(width) ;
     for(let i = 0; i < 3; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
  }

  }

}



let circleX = 450;
let circleY = 900;
let circles = [];
let rectX = [];

function draw() {
  background(50);



fill(0,0,255)
for (let i = 10; i < 25; i++) {
  circle(50 * (i+1), circleY[i], 25);
}


for (let i = 2; i < rectX.length; i++) {
    let rectY = height * i / rectX.length;
    rect(rectY, rectX[i], 25);

    rectX[i]++;
   
    if (rectX[i] > height) {
      rectX[i] = 0;
    }
  }
fill(0,225,255)
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }

  fill(225,0,0)
rect(0,800,900,100)
rect(0,0,900,100)

fill(0,225,0)
 

  if (keyIsDown(UP_ARROW)) {
    circleY--;
  }
  if (keyIsDown(DOWN_ARROW)) {
    circleY++;
  }
  if (keyIsDown(LEFT_ARROW)) {
    circleX--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circleX++;
  }

  circle(circleX, circleY, 50);
}

class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    circle(this.x, this.y, 50);
  }



}







