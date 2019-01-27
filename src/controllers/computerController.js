
class ComputerController extends Controller {

    constructor(paddle, ball) {
        super(paddle);
        this._paddle = this._gameObject;
        this._ball = ball;
    }

    update() {
        if (this._ball.position.y > this._paddle.position.y) {
            this._paddle.goDown();
        }
        if (this._ball.position.y < this._paddle.position.y) {
            this._paddle.goUp();
        }
    }

}
