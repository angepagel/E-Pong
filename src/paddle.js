
class Paddle {

    constructor(x, y) {
        this.position = createVector(x, y);
        this.width = 30;
        this.height = 30;
    }

    draw() {
        push();
        noStroke();
        fill(255);
        rect(this.position.x, this.position.y, this.width, this.height);
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
