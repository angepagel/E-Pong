
class Ball {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.speed = createVector(random([-1,1]), random(-1,1)); // Generates a random trajectory
        this.speed.setMag(7);
    }

    static get diameter() {
        return 10
    }

    draw() {
        push() ;
        noStroke();
        fill(255, 0, 0);
        this.position.add(this.speed);
        ellipse(this.position.x, this.position.y, Ball.diameter, Ball.diameter);
        pop();
    }

}
