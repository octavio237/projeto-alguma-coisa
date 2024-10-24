var a =10;

function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  //background("black");
  if (mouseIsPressed) {
    rect( mouseX, mouseY,25,25,40,40)
    fill("pink");
  } else {
    stroke("purple")
    fill("pink");
  }


}