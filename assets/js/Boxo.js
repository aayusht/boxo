var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth-20;
ctx.canvas.height = window.innerHeight-20;
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height/2;
var x1 = 0;
var x2 = 0;
var dx = 0;
var dy = 0;
var ax = 0;
var ay = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawHole() {
    ctx.beginPath();
    ctx.arc(x1, y1, ballRadius + 1, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function updateHole() {
    x1 = Math.floor(Math.random() * ctx.canvas.width);
    y1 = Math.floor(Math.random() * ctx.canvas.height);
}

function detectCollisions() {
    if(Math.sqrt((x1-x)*(x1-x) + (y1-y)*(y1-y)) < ballRadius + 1) {
        updateHole();
    }
}

function drawInfo() {
	ctx.font = '10pt monospace';
  ctx.fillStyle = 'black';
  ctx.fillText('x = ' + x, 0, 10);
  ctx.fillText('y = ' + y, 0, 20);
  ctx.fillText('dx = ' + dx, 0, 30);
  ctx.fillText('dy = ' + dy, 0, 40);
  ctx.fillText('ax = ' + ax, 0, 50);
  ctx.fillText('ay = ' + ay, 0, 60);
  ctx.fillText('distance = ' + Math.sqrt((x1-x)*(x1-x) + (y1-y)*(y1-y)), 0, 70);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    detectCollisions();
    drawHole();
		drawInfo();
    drawBall();
    if(rightPressed) {ax = .01;}
    if(leftPressed) {ax = -.01;}
    if(!rightPressed && !leftPressed) {ax = 0;}
    if(downPressed) {ay = .01;}
    if(upPressed) {ay = -.01;}
    if(!downPressed && !upPressed) {ay = 0;}

    dx += ax;
    dy += ay;

    if(x+dx >= canvas.width-ballRadius || x+dx <= ballRadius) {dx = -dx;}
    if(y+dy >= canvas.height-ballRadius || y+dy <= ballRadius) {dy = -dy;}

    x += dx;
    y += dy;
}

updateHole();
setInterval(draw, 10);

function keyDownHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed = true;
    }
    else if(e.keyCode == 87) {
        upPressed = true;
    }
    else if(e.keyCode == 83) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 65) {
        leftPressed = false;
    }
    else if(e.keyCode == 87) {
        upPressed = false;
    }
    else if(e.keyCode == 83) {
        downPressed = false;
    }
}
