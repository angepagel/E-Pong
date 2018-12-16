
class BallView extends View {

    constructor(ball) {
        super(ball);
    }

    draw() {
        push() ;
        noStroke();
        fill(255, 0, 0);
        ellipseMode(CORNER);
        this.ball.position.add(this.speed);
        ellipse(this.ball.position.x, this.ball.position.y, Ball.diameter, Ball.diameter);
        pop();
    }

}
