
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
        createCanvas(window.innerWidth, window.innerHeight);
        frameRate(60);

        this._paddleP1 = new Paddle(0,0);
        this._paddleP2 = new Paddle(0,0);
        this._ball = new Ball(0,0);

        this._paddleP1.initialPosition = {
            x: 30,
            y: window.innerHeight/2 - this._paddleP1.height/2
        }

        this._paddleP2.initialPosition = {
            x: window.innerWidth - 30 - this._paddleP2.width,
            y: window.innerHeight/2 - this._paddleP2.height/2
        }

        this._ball.initialPosition = {
            x: window.innerWidth/2 - this._ball.radius,
            y: window.innerHeight/2 - this._ball.radius
        }

        this._gameObjects.push(this._paddleP1, this._paddleP2, this._ball);


        this._paddleP1.controller = new PlayerController(this._paddleP1, 'P1');

        if (this._mode === 'vs') {
            this._paddleP2.controller = new PlayerController(this._paddleP2, 'P2');
        }
        else {
            this._paddleP2.controller = new ComputerController(this._paddleP2, this._ball);
        }

    }

    draw() {
        return
    }

}
