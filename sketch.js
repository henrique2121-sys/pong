function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function draw() {
  background(220);
  
  stroke("blue");
  fill("red");
  
  console.log(mouseIsPressed);
  rect(mouseX, mouseY, 100, 150);
}
function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}
