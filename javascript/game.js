let canvas;
let ball;

function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent(game);
    ball = new Ball();
  }
  
  function draw() {
    background(50);

    ball.render();
    ball.movement();
  }