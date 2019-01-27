
class Paddle extends GameObject {

    constructor(x, y) {
        super(x, y);

        this._paddleSpeed = 10;

        this.width = 15;
        this.height = 100;
        this.view = new PaddleView(this);
        }

        
    get paddleSpeed() { return this._paddleSpeed; }


    goUp() {
        if (this.position.y > 0) {
            this.position.add(createVector(0, -this._paddleSpeed));
        }
    }

    goDown() {
        if (this.position.y + this.height < window.innerHeight) {
            this.position.add(createVector(0, this._paddleSpeed));
        }
    }

}
