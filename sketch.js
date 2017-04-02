function setup(){
  createCanvas(600,400);
}

function draw(){
  background(250);
  strokeWeight(0);
  stroke(255);
  
  if (mouseIsPressed) {
    for(var x = 0; x <= width; x += 10){
      for(var y = 0; y <= height; y += 10){
        fill(random(255), random(255), random(255));
        rect(x, y, 10, 10);
      }
    }
  }else{
    bomb();
  }
}

function bomb(){
  fill(0,0,51);
  rect(230, 280, 140, 20);

  rect(210, 260, 180, 20);
  rect(210, 240, 180, 20);
  rect(210, 220, 180, 20);
  rect(210, 200, 180, 20);
  rect(210, 180, 180, 20);

  rect(230, 160, 140, 20);
  rect(250, 140, 100, 20);

  fill(0);
  rect(250, 300, 100, 20);
  rect(230, 280, 60, 20);

  rect(210, 260, 40, 20);
  rect(210, 240, 20, 20);

  fill(51,51,102);
  rect(290, 240, 100, 20);
  rect(270, 220, 120, 20);
  rect(250, 200, 140, 20);
  rect(250, 180, 140, 20);
  rect(250, 160, 120, 20);
  rect(270, 140, 80, 20);

  fill(102,102,153);
  rect(350, 220, 20, 20);
  rect(330, 200, 40, 20);
  rect(310, 180, 40, 20);

  fill(0);
  rect(370, 140, 20, 20);
  fill(255,153,0);
  rect(390, 140, 20, 20);
  fill(255,0,0);
  rect(390, 120, 20, 20);
}