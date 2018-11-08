
class Paddle {

    constructor(x, y) {
        this.position = createVector(x, y);
    }

    static get width() {
        return 30;
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

    move(upKeyCode, downKeyCode) {  
        if (keyIsDown(upKeyCode)) {
            this.position.y -= 5;
        }
        if (keyIsDown(downKeyCode)) {
            this.position.y += 5;
        }
    }    

}
