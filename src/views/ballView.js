
class BallView extends View {

    constructor(ball) {
        super(ball);
        this._ball = this._gameObject;
    }

    draw() {
        push();
        noStroke();
        fill(255, 0, 0);
        ellipseMode(CORNER);
        this._ball.position.add(this._ball.speed);
        ellipse(this._ball.position.x, this._ball.position.y, this._ball.diameter, this._ball.diameter);
        pop();
    }

}
