class Box {
    constructor(x, z, l, y, col1, col2, col3) {
        this.pos = createVector(x, y);
        this.heading = 0;
        this.rotation = 0;

        this.render = function(){
            fill(col1, col2, col3,);
            stroke('black');
            strokeWeight(2.5); 
            rect(this.pos.x, this.pos.y, innerWidth/z, 25)
        }
    }
}