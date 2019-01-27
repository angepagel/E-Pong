
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
            this._paddle.goUp();
        }
        if (keyIsDown(this.downKeyCode)) {
            this._paddle.goDown();
        }
    }

}
