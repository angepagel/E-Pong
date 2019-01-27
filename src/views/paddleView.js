
class PaddleView extends View {

    constructor(paddle) {
        super(paddle);
        this._paddle = this._gameObject;
    }

    draw() {
        push();
        noStroke();
        fill(255);
        rect(this._paddle.position.x, this._paddle.position.y, this._paddle.width, this._paddle.height);
        pop();
    }  
}
