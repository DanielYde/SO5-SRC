class Ball {
    constructor() {
        this.pos = createVector(player.pos.x, innerHeight/5 * 4.5 - 15);
        
        this.direction = -45;
        this.vel = createVector(0, 0);
        
        
        this.render = function() {
            if (k6 == 0) {
                this.pos = createVector(player.pos.x, innerHeight/5 * 4.5 - 15);
            }
            this.heading = (this.direction*PI/180);
            push();
            fill('white');
            circle(this.pos.x, this.pos.y, 30);
            pop(); 
        }
        this.movement = function() {
            var force = p5.Vector.fromAngle(this.heading);
            force.mult(0.1);
            //this.vel.add(force);
            this.vel.limit(topSpeed);

            this.pos.add(this.vel); 
            
            if (isStart == true && start == 0) {
                k6 = 1;
                this.vel = createVector(random1, random2);
                this.pos = createVector(player.pos.x, innerHeight/5 * 4.5 - 15);
                start = 1;
            }
        }
    }
}