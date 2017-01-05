var boxo;

function setup() {
	createCanvas(windowWidth, windowHeight);
	boxo = new Boxo();
	frameRate(10);
}

function draw() {
  boxo.show();
}
