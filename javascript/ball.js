var ballX = innerWidth/2;
var ballY = innerHeight/2;
var r = 40
var ballMovement = 5;
var ballPositive = ballMovement;
var ballNegative = 0 - ballMovement;

class Ball {
    constructor() {
        this.render = function () {
            stroke(200);
            ballX = ballX + ballMovement;
            circle(ballX, ballY, r);
        };

        this.movement = function () {
            if(ballX > innerWidth - r/2 && ballMovement > 0) {
                ballMovement = ballNegative;
            }
            if(ballX < innerWidth - innerWidth + r/2 && ballMovement < 0) {
                ballMovement = ballPositive;
            }
        }
    }
}