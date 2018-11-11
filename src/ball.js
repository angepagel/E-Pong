
class Ball {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.speed = createVector(random([-1,1]), random(-1,1)); // Generates a random trajectory
        this.speed.setMag(7);
    }

    static get radius() {
        return 7;
    }

    static get diameter() {
        return Ball.radius*2;
    }

    draw() {
        push() ;
        noStroke();
        fill(255, 0, 0);
        ellipseMode(CORNER);
        this.position.add(this.speed);
        ellipse(this.position.x, this.position.y, Ball.diameter, Ball.diameter);
        pop();
    }

    /* AABB collision detection */
    isColliding(paddle)
    {
       return !(
           (this.position.x >= paddle.position.x + Paddle.width)
        || (this.position.x + Ball.diameter <= paddle.position.x)
        || (this.position.y >= paddle.position.y + Paddle.height)
        || (this.position.y + Ball.diameter <= paddle.position.y)
        ); 
    }

    invertSpeedX() {
        this.speed.x *= -1;
    }

    invertSpeedY() {
        this.speed.y *= -1;
    }       

}
