let canvas;
let ball;
let canvasResize;
let dvd_white;
let dvd_red;
let dvd_green;
let dvd_blue;
let dvd_yellow;

function preload() {
  dvd_white = loadImage('../images/dvd_logo_white.png')
  dvd_red = loadImage('../images/dvd_logo_red.png')
  dvd_green = loadImage('../images/dvd_logo_green.png')
  dvd_blue = loadImage('../images/dvd_logo_blue.png')
  dvd_yellow = loadImage('../images/dvd_logo_yellow.png')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (ballY > innerHeight) {
    ballY = innerHeight;
  }
  if (ballX > innerWidth) {
    ballX = innerWidth;
  }
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(game);
    ball = new Ball();
    color = 1;
  }
  
  function draw() {
    background(0, 0 ,0);

    ball.render();
    ball.movement();
    //canvasResize.resize();
  }