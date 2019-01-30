
class Ball extends GameObject {

    constructor(x, y) {
        super(x, y);

        this._speedMagnitude = 7;

        this.width = this.height = 14;
        this.speed = {
            x: random([-1,1]),
            y: random([-1,1]),
            multiplier: this._speedMagnitude
        }
        this.view = new BallView(this);
    }


    get diameter() { return this.width; }

    get radius() { return this.diameter/2; }
    
    get speedMagnitude() { return this._speedMagnitude; }


    invertSpeedX() {
        this.speed.x *= -1;
    }

    invertSpeedY() {
        this.speed.y *= -1;
    }

    resetPosition() {
        this.position = this.initialPosition.copy();
        this.speed = {
            x: random([-1,1]),
            y: random([-1,1]),
            multiplier: this._speedMagnitude
        }
    }
    
}
