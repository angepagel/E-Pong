
class PlayerController extends Controller {

    constructor(paddle, player) {
        super(paddle);
        if (player === 'P1') {
            this.upKeyCode = 90;
            this.downKeyCode = 83;
        } else if (player === 'P2') {
            this.upKeyCode = UP_ARROW;
            this.downKeyCode = DOWN_ARROW;
        }
    }

    update() {
        return
    }

}
