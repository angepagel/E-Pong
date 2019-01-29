
class Pong {

    constructor(mode) {
        this._mode = mode;
        this._gameObjects = [];

        this._scoreP1 = this._scoreP2 = 0;

        this._speedMultiplier = 1;
        this._speedIncrement = 0.07;
    }

    preload() {
        this._soundWall = loadSound('assets/wall.wav');
        this._soundPaddle = loadSound('assets/paddle.wav');
        this._soundScore = loadSound('assets/score.wav');
    }

    setup() {
        return
    }

    draw() {
        return
    }

}
