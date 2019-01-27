
class Paddle extends GameObject {

    constructor(x, y) {
        super(x, y);

        this._paddleSpeed = 10;
        
        this.width = 15;
        this.height = 100;
        this.view = new PaddleView(this);
        }

    get paddleSpeed() { return this._paddleSpeed;}

}
