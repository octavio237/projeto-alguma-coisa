var a =10;

function setup() {
  createCanvas(1100, 1100);
  background("white");
}

function draw() {
  
  if (mouseIsPressed) {
    rect( mouseX, mouseY,25,25,40,40)
    fill("pink");
  } else {
    stroke("purple")
    fill("black");
  }
  


}