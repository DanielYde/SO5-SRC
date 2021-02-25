var canvas;
var player;
var ball;
var ball2;
var ball3;
var start = 0;
var boxRow1 = [];
var boxRow2 = [];
var boxRow3 = [];
var boxRow4 = [];
var boxRow5 = [];
var boxRow6 = [];
var boxRow7 = [];
var boxRow8 = [];
var boxRow1Respawn = 0;
var boxRow1Respawn1 = 10;
var boxRow2Respawn = 0;
var boxRow2Respawn1 = 10;
var boxRow3Respawn = 0;
var boxRow3Respawn1 = 10;
var boxRow4Respawn = 0;
var boxRow4Respawn1 = 10;
var boxRow5Respawn = 0;
var boxRow5Respawn1 = 10;
var boxRow6Respawn = 0;
var boxRow6Respawn1 = 10;
var boxRow7Respawn = 0;
var boxRow7Respawn1 = 10;
var boxRow8Respawn = 0;
var boxRow8Respawn1 = 10;
var isLeft = false;
var isRight = false;
var isStart = false;
var random1;
var random2;
var k = 1;
var k1 = 0;
var k2 = 0;
var k3 = 0;
var k4 = 0;
var k5 = 0;
var k6 = 0;
var boxAmount = 10;
var rowAmount = 2;
var topSpeed = 4;
var Score = 0;
var boxRow1Points = 5;
var boxRow2Points = 4;
var boxRow3Points = 4;
var boxRow4Points = 3;
var boxRow5Points = 3;
var boxRow6Points = 2;
var boxRow7Points = 2;
var boxRow8Points = 1;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    player.pos.y = innerHeight/5 * 4.5;
    player.pos.x = innerWidth/2;
  }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(game);
    player = new Player(innerWidth/2, innerHeight/5 * 4.5);
    ball = new Ball();
    random1 = random(-3, 3);
    random2 = random(-3, -3);

}

function draw() {
    while (k <= boxAmount) {
        k++; 
        boxRow1.push(new Box(0 + (innerWidth/boxAmount * boxRow1.length), boxAmount, boxRow1.length, 5, 255, 0, 0));
        boxRow2.push(new Box(0 + (innerWidth/boxAmount * boxRow2.length), boxAmount, boxRow2.length, 5 + (75*1), 255, 0, 0));
        boxRow3.push(new Box(0 + (innerWidth/boxAmount * boxRow3.length), boxAmount, boxRow3.length, 5 + (75*2), 255, 50, 0));
        boxRow4.push(new Box(0 + (innerWidth/boxAmount * boxRow4.length), boxAmount, boxRow4.length, 5 + (75*3), 255, 90, 0));
        boxRow5.push(new Box(0 + (innerWidth/boxAmount * boxRow5.length), boxAmount, boxRow5.length, 5 + (75*4), 255, 130, 0));
        boxRow6.push(new Box(0 + (innerWidth/boxAmount * boxRow6.length), boxAmount, boxRow6.length, 5 + (75*5), 255, 170, 0));
        boxRow7.push(new Box(0 + (innerWidth/boxAmount * boxRow7.length), boxAmount, boxRow7.length, 5 + (75*6), 255, 255, 0));
        boxRow8.push(new Box(0 + (innerWidth/boxAmount * boxRow8.length), boxAmount, boxRow8.length, 5 + (75*7), 255, 255, 0));
    }
    background(30);
    
    push();
    textAlign(CENTER);
    textSize(25);
    text('Score : ' + Score, innerWidth/2, innerHeight/5*4.85);
    pop();

    ball.render();
    ball.movement();

    player.render();
    player.update();
    player.movement();

    for (var i = boxRow1.length-1; i >= 0; i--) {
        boxRow1[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow1[i].pos.x && ball.pos.x < boxRow1[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow1[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow1[i].pos.y + 20) {
            boxRow1.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow1Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow1[i].pos.x && ball.pos.x < boxRow1[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow1[i].pos.y && ball.pos.y + 12.5 < boxRow1[i].pos.y + 5) {
            boxRow1.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow1Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow1[i].pos.x && ball.pos.x + 12.5 < boxRow1[i].pos.x + 25 && ball.pos.y > boxRow1[i].pos.y + 5 && ball.pos.y < boxRow1[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow1.splice(i, 1);
            Score = Score + boxRow1Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow1[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow1[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow1[i].pos.y + 5 && ball.pos.y < boxRow1[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow1.splice(i, 1);
            Score = Score + boxRow1Points;
            break;
        }
    }

    for (var i = boxRow2.length-1; i >= 0; i--) {
        boxRow2[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow2[i].pos.x && ball.pos.x < boxRow2[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow2[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow2[i].pos.y + 20) {
            boxRow2.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow2Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow2[i].pos.x && ball.pos.x < boxRow2[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow2[i].pos.y && ball.pos.y + 12.5 < boxRow2[i].pos.y + 5) {
            boxRow2.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow2Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow2[i].pos.x && ball.pos.x + 12.5 < boxRow2[i].pos.x + 25 && ball.pos.y > boxRow2[i].pos.y + 5 && ball.pos.y < boxRow2[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow2.splice(i, 1);
            Score = Score + boxRow2Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow2[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow2[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow2[i].pos.y + 5 && ball.pos.y < boxRow2[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow2.splice(i, 1);
            Score = Score + boxRow2Points;
            break;
        }
    }
    for (var i = boxRow3.length-1; i >= 0; i--) {    
        boxRow3[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow3[i].pos.x && ball.pos.x < boxRow3[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow3[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow3[i].pos.y + 20) {
            boxRow3.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow3Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow3[i].pos.x && ball.pos.x < boxRow3[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow3[i].pos.y && ball.pos.y + 12.5 < boxRow3[i].pos.y + 5) {
            boxRow3.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow3Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow3[i].pos.x && ball.pos.x + 12.5 < boxRow3[i].pos.x + 25 && ball.pos.y > boxRow3[i].pos.y + 5 && ball.pos.y < boxRow3[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow3.splice(i, 1);
            Score = Score + boxRow3Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow3[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow3[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow3[i].pos.y + 5 && ball.pos.y < boxRow3[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow3.splice(i, 1);
            Score = Score + boxRow3Points;
            break;
        }
    }
    for (var i = boxRow4.length-1; i >= 0; i--) {
        boxRow4[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow4[i].pos.x && ball.pos.x < boxRow4[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow4[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow4[i].pos.y + 20) {
            boxRow4.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow4Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow4[i].pos.x && ball.pos.x < boxRow4[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow4[i].pos.y && ball.pos.y + 12.5 < boxRow4[i].pos.y + 5) {
            boxRow4.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow4Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow4[i].pos.x && ball.pos.x + 12.5 < boxRow4[i].pos.x + 25 && ball.pos.y > boxRow4[i].pos.y + 5 && ball.pos.y < boxRow4[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow4.splice(i, 1);
            Score = Score + boxRow4Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow4[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow4[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow4[i].pos.y + 5 && ball.pos.y < boxRow4[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow4.splice(i, 1);
            Score = Score + boxRow4Points;
            break;
        }
    }
    for (var i = boxRow5.length-1; i >= 0; i--) {    
        boxRow5[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow5[i].pos.x && ball.pos.x < boxRow5[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow5[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow5[i].pos.y + 20) {
            boxRow5.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow5Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow5[i].pos.x && ball.pos.x < boxRow5[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow5[i].pos.y && ball.pos.y + 12.5 < boxRow5[i].pos.y + 5) {
            boxRow5.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow5Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow5[i].pos.x && ball.pos.x + 12.5 < boxRow5[i].pos.x + 25 && ball.pos.y > boxRow5[i].pos.y + 5 && ball.pos.y < boxRow5[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow5.splice(i, 1);
            Score = Score + boxRow5Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow5[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow5[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow5[i].pos.y + 5 && ball.pos.y < boxRow5[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow5.splice(i, 1);
            Score = Score + boxRow5Points;
            break;
        }
    }
    for (var i = boxRow6.length-1; i >= 0; i--) {    
        boxRow6[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow6[i].pos.x && ball.pos.x < boxRow6[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow6[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow6[i].pos.y + 20) {
            boxRow6.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow6Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow6[i].pos.x && ball.pos.x < boxRow6[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow6[i].pos.y && ball.pos.y + 12.5 < boxRow6[i].pos.y + 5) {
            boxRow6.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow6Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow6[i].pos.x && ball.pos.x + 12.5 < boxRow6[i].pos.x + 25 && ball.pos.y > boxRow6[i].pos.y + 5 && ball.pos.y < boxRow6[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow6.splice(i, 1);
            Score = Score + boxRow6Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow6[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow6[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow6[i].pos.y + 5 && ball.pos.y < boxRow6[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow6.splice(i, 1);
            Score = Score + boxRow6Points;
            break;
        }
    }
    for (var i = boxRow7.length-1; i >= 0; i--) {    
        boxRow7[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow7[i].pos.x && ball.pos.x < boxRow7[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow7[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow7[i].pos.y + 20) {
            boxRow7.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow7Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow7[i].pos.x && ball.pos.x < boxRow7[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow7[i].pos.y && ball.pos.y + 12.5 < boxRow7[i].pos.y + 5) {
            boxRow7.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow7Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow7[i].pos.x && ball.pos.x + 12.5 < boxRow7[i].pos.x + 25 && ball.pos.y > boxRow7[i].pos.y + 5 && ball.pos.y < boxRow7[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow7.splice(i, 1);
            Score = Score + boxRow7Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow7[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow7[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow7[i].pos.y + 5 && ball.pos.y < boxRow7[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow7.splice(i, 1);
            Score = Score + boxRow7Points;
            break;
        }
    }
    for (var i = boxRow8.length - 1; i >= 0; i--) {        
        boxRow8[i].render();

        // Bunden af kassen
        if (ball.pos.x > boxRow8[i].pos.x && ball.pos.x < boxRow8[i].pos.x + innerWidth/boxAmount && ball.pos.y - 12.5 < boxRow8[i].pos.y + 25 && ball.pos.y - 12.5 > boxRow8[i].pos.y + 20) {
            boxRow8.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow8Points;
            break;
        }
        // Toppen af kassen
        if (ball.pos.x > boxRow8[i].pos.x && ball.pos.x < boxRow8[i].pos.x + innerWidth/boxAmount && ball.pos.y + 12.5 > boxRow8[i].pos.y && ball.pos.y + 12.5 < boxRow8[i].pos.y + 5) {
            boxRow8.splice(i, 1);
            ball.vel.y = ball.vel.y*(-1)
            Score = Score + boxRow8Points;
            break;
        }
        //Venstre side af kassen
        if (ball.pos.x > boxRow8[i].pos.x && ball.pos.x + 12.5 < boxRow8[i].pos.x + 25 && ball.pos.y > boxRow8[i].pos.y + 5 && ball.pos.y < boxRow8[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow8.splice(i, 1);
            Score = Score + boxRow8Points;
            break;
        }
        // Højre side af kassen
        if (ball.pos.x - 12.5 < boxRow8[i].pos.x + innerWidth/boxAmount && ball.pos.x - 12.5 > boxRow8[i].pos.x + innerWidth/boxAmount - 25 && ball.pos.y > boxRow8[i].pos.y + 5 && ball.pos.y < boxRow8[i].pos.y + 20) {
            ball.vel.x = ball.vel.x*(-1);
            boxRow8.splice(i, 1);
            Score = Score + boxRow8Points;
            break;
        }
    }

    if (ball.pos.x + 15 > innerWidth && ball.vel.x > 0) {
        ball.vel.x = ball.vel.x * -1;
    }
    if (ball.pos.x - 15 < innerWidth - innerWidth && ball.vel.x < 0) {
        ball.vel.x = ball.vel.x * -1;
    }
    if (ball.pos.y - 12.5 < 0) {
        ball.vel.y = ball.vel.y*(-1)
    }
    if (ball.pos.y - 12.5 > innerHeight) {
        ball.vel = createVector(0, 0);
        player.pos = createVector(innerWidth/2, innerHeight/5 * 4.5);
        k6 = 0;
        k = 0;
        start = 0;
        Score = 0;
        for (var i1 = boxRow1.length - 1; i1 >= 0; i1--) {
            boxRow1.splice(i1, 10);
        }
        for (var i2 = boxRow2.length - 1; i2 >= 0; i2--) {
            boxRow2.splice(i2, 10);
        }
        for (var i3 = boxRow3.length - 1; i3 >= 0; i3--) {
            boxRow3.splice(i3, 10);
        }
        for (var i4 = boxRow4.length - 1; i4 >= 0; i4--) {
            boxRow4.splice(i4, 10);
        }
        for (var i5 = boxRow5.length - 1; i5 >= 0; i5--) {
            boxRow5.splice(i5, 10);
        }
        for (var i6 = boxRow6.length - 1; i6 >= 0; i6--) {
            boxRow6.splice(i6, 10);
        }
        for (var i7 = boxRow7.length - 1; i7 >= 0; i7--) {
            boxRow7.splice(i7, 10);
        }
        for (var i8 = boxRow8.length - 1; i8 >= 0; i8--) {
            boxRow8.splice(i8, 10);
        }




    }

    // Collision detection between Ball and Player
    if (ball.pos.x > player.pos.x - 100 && ball.pos.x < player.pos.x + 100 && ball.pos.y > player.pos.y - 12.5 && ball.pos.y < player.pos.y) {
        ball.vel.y = ball.vel.y*(-1);
        
        // Collision detection between Ball and Player. Number 1 with x positive
        if (ball.pos.x > player.pos.x - 100 && ball.pos.x < player.pos.x - 60 && ball.vel.x > 0) {
            ball.vel.y = -1.5
            ball.vel.x = 4.5
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 1 with x negative
        if (ball.pos.x > player.pos.x - 100 && ball.pos.x < player.pos.x - 60 && ball.vel.x < 0) {
            ball.vel.y = -1.5
            ball.vel.x = -4.5
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 2 with x positive
        if (ball.pos.x > player.pos.x - 60 && ball.pos.x < player.pos.x - 20 && ball.vel.x > 0) {
            ball.vel.y = -2.0
            ball.vel.x = 4.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 2 with x negative
        if (ball.pos.x > player.pos.x - 60 && ball.pos.x < player.pos.x - 20 && ball.vel.x < 0) {
            ball.vel.y = -2.0
            ball.vel.x = -4.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 3 with x positive
        if (ball.pos.x > player.pos.x - 20 && ball.pos.x < player.pos.x + 20 && ball.vel.x > 0) {
            ball.vel.y = -3.0
            ball.vel.x = 3.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 3 with x negative
        if (ball.pos.x > player.pos.x - 20 && ball.pos.x < player.pos.x + 20 && ball.vel.x < 0) {
            ball.vel.y = -3.0
            ball.vel.x = -3.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 4 with x positive
        if (ball.pos.x > player.pos.x + 20 && ball.pos.x < player.pos.x + 60 && ball.vel.x > 0) {
            ball.vel.y = -2.0
            ball.vel.x = 4.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 3 with 4 negative
        if (ball.pos.x > player.pos.x + 20 && ball.pos.x < player.pos.x + 60 && ball.vel.x < 0) {
            ball.vel.y = -2.0
            ball.vel.x = -4.0
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 5 with x positive
        if (ball.pos.x > player.pos.x + 60 && ball.pos.x < player.pos.x + 100 && ball.vel.x > 0) {
            ball.vel.y = -1.5
            ball.vel.x = 4.5
            console.log(ball.vel);
        }
        // Collision detection between Ball and Player. Number 5 with x negative
        if (ball.pos.x > player.pos.x + 60 && ball.pos.x < player.pos.x + 100 && ball.vel.x < 0) {
            ball.vel.y = -1.5
            ball.vel.x = -4.5
            console.log(ball.vel);
        }
        
        
        
    }

}

















function keyPressed() {
    if (keyCode === 65) {
        isLeft = true;
    }
    if (keyCode === 68) {
        isRight = true;
    }
    if (keyCode === 32) {
        isStart = true
    }
}

function keyReleased() {
    if (keyCode === 65) {
        isLeft = false;
    }
    if (keyCode === 68) {
        isRight = false;
    }
    if (keyCode === 32) {
        isStart = false
    }
}