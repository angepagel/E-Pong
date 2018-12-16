
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

}
