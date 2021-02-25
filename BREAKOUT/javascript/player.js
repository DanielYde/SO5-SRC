var maxSpeed = 15;

class Player {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.heading = 0;
        this.rotation = 0;
        this.vel = createVector(0, 0);  


        this.render = function() {
            push(); 
            translate(this.pos.x, this.pos.y);
            fill(0, 100, 120); 
            rect(-100, 0, 200, 25);
            strokeWeight(1);
            stroke('white'); 
            line(-60, 2, -60, 23) 
            line(-20, 2, -20, 23) 
            line(20, 2, 20, 23) 
            line(60, 2, 60, 23) 
            pop(); 
        }
        this.update = function() {
            this.pos.add(this.vel);
        }
        this.movement = function() {
           
            if (this.pos.x < innerWidth - innerWidth + 100) {
                this.pos.x = innerWidth - innerWidth + 100;
                this.vel.x = 0;
            }

            if (this.pos.x > innerWidth - innerWidth) {
                if (isLeft == true) {
                    if (this.vel.x > 0) {
                        this.vel.mult(0.85); 
                    }
                    
                    var moveLeft = createVector(-1, 0);
                    moveLeft.mult(0.3);
                    
                    if (this.vel.x > -maxSpeed) {
                        if (this.vel.x < -maxSpeed) {
                            this.vel.x = -maxSpeed;
                        }
                        this.vel.add(moveLeft);
                        
                    }
                }
            }
            if (this.pos.x > innerWidth - 100) {
                this.pos.x = innerWidth - 100;
                this.vel.x = 0;
            }
            if (this.pos.x < innerWidth - 100) {
                if (isRight == true) {
                    if (this.vel.x < 0) {
                        this.vel.mult(0.85);
                    }
                       
                    var moveRight = createVector(1, 0);
                    if (this.vel.x < maxSpeed) {
                        if (this.vel.x > maxSpeed) {
                            this.vel.x = maxSpeed;
                        }
                        moveRight.mult(0.3);
                        this.vel.add(moveRight);
                    }
                }
            }
            if (isLeft == false && isRight == false) {
                this.vel.mult(0.85);
            }
            if (isLeft == true && isRight == true) {
                this.vel.x = 0;
            }
            
        }
    }
}