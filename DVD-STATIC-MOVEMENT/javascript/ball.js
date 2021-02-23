var speed = 5;

var color;
var preColor;
var a = innerWidth/2;
var b = innerHeight/2;
var ballX = a;
var ballY = b;
var r = 50
var ballHorizontal = speed;
var ballVertical = speed;
var ballHorizontalPositive = ballHorizontal;
var ballHorizontalNegative = 0 - ballHorizontal;
var ballVerticalPositive = ballVertical;
var ballVerticalNegative = 0 - ballVertical;

class Ball {
    constructor() {
        this.render = function () {
            stroke(200);

            a = innerWidth/2;
            b = innerHeight/2;
            
            ballX = ballX + ballHorizontal;
            ballY = ballY + ballVertical;
            if (color == 1) {
                image(dvd_white, ballX, ballY, r*2, r);
            }
            if (color == 2) {
                image(dvd_red, ballX, ballY, r*2, r);
            }
            if (color == 3) {
                image(dvd_green, ballX, ballY, r*2, r);
            }
            if (color == 4) {
                image(dvd_blue, ballX, ballY, r*2, r);
            }
            if (color == 5) {
                image(dvd_yellow, ballX, ballY, r*2, r);
            }
        };

        this.movement = function () {
            if(ballX > innerWidth - r*2 && ballHorizontal > 0) {
                ballHorizontal = ballHorizontalNegative;
                preColor = color;
                
                color = int(random(1, 6));
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
            }
            if(ballX < innerWidth - innerWidth && ballHorizontal < 0) {
                ballHorizontal = ballHorizontalPositive;
                preColor = color;
                
                color = int(random(1, 6));
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
            }
            if(ballY > innerHeight - r && ballVertical > 0) {
                ballVertical = ballVerticalNegative;
                preColor = color;
                
                color = int(random(1, 6));
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
            }
            if(ballY < innerHeight - innerHeight && ballVertical < 0) {
                ballVertical = ballVerticalPositive;
                preColor = color;
                   
                color = int(random(1, 6));
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
                if (preColor == color) {
                    color = int(random(1, 6));
                }
            }
        }
    }
}