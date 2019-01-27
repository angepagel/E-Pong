
class PlayerController {

    constructor(paddle, player) {
        this._paddle = paddle;
        if (player === 'P1') {
            this.upKeyCode = 90;
            this.downKeyCode = 83;
        } else if (player === 'P2') {
            this.upKeyCode = UP_ARROW;
            this.downKeyCode = DOWN_ARROW;
        }
    }

    update() {
        if (keyIsDown(this.upKeyCode)) {
            if (this._paddle.position.y > 0) {
                this._paddle.position.add(createVector(0, -this._paddle.paddleSpeed));
            }
        }
        if (keyIsDown(this.downKeyCode)) {
            if (this._paddle.position.y + this._paddle.height < window.innerHeight) {
                this._paddle.position.add(createVector(0, this._paddle.paddleSpeed));
            }
        }
    }

}
