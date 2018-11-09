
class Paddle {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.speed = 5;
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
            if (this.position.y > 0) {
                this.position.y -= this.speed;
            }
        }
        if (keyIsDown(downKeyCode)) {
            if (this.position.y + Paddle.height < window.innerHeight) {
                this.position.y += this.speed;
            }
        }
    }    

}
