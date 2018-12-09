
class Paddle {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.speed = 10;
        this.controller = null;
    }

    static get width() {
        return 15;
    }

    static get height() {
        return 100;
    }

    draw() {
        push();
        noStroke();
        fill(255);
        rect(this.position.x, this.position.y, Paddle.width, Paddle.height);
        pop();
    }  

}
