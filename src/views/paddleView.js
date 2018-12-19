
class PaddleView extends View {

    constructor(paddle) {
        super(paddle);
    }

    draw() {
        push();
        noStroke();
        fill(255);
        rect(this.paddle.position.x, this.paddle.position.y, Paddle.width, Paddle.height);
        pop();
    }  
}
