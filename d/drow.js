<!doctype html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js"></script>
  <title>star</title>
</head>

<body>
<script>
var drop = []

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
}

function draw() {
  background(0);
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
}
}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {
    noStroke();
    fill(250);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));
  }
  this.update = function() {
    this.speed = random(2, 10);
    this.gravity = 0.095;
    this.y = this.y + this.speed*this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}
</script>
</body>
<html>
