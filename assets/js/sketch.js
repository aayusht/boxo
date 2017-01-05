var boxo;

function setup() {
	createCanvas(windows.innerWidth, window.innerHeight);
	boxo = new Boxo();
	frameRate(10);
}

function draw() {
  boxo.show();
}
