
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

        this._gameObjects.forEach(function(gameObject) {
            gameObject.update();
        });

        /* Ball collision with P1 and P2 paddles */
        if (this._ball.isColliding(this._paddleP1)) {
            angleMode(DEGREES);
            let angle = map(this._ball.position.y, this._paddleP1.position.y, this._paddleP1.position.y + this._paddleP1.height, -45, 45);
            this._speedMultiplier += this._speedIncrement;
            this._ball.speed = {
            x: cos(angle),
            y: sin(angle),
            multiplier: this._ball.speedMagnitude * this._speedMultiplier
            }
            this._soundPaddle.play();
        } 
        else if (this._ball.isColliding(this._paddleP2)) {
            angleMode(DEGREES);
            let angle = map(this._ball.position.y, this._paddleP2.position.y, this._paddleP2.position.y + this._paddleP2.height, 225, 135);
            this._speedMultiplier += this._speedIncrement;
            this._ball.speed = {
            x: cos(angle),
            y: sin(angle),
            multiplier: this._ball.speedMagnitude * this._speedMultiplier
            }
            this._soundPaddle.play();
        }

        /* Ball collision with top and bottom window borders */
        if (this._ball.position.y < 0 || this._ball.position.y + this._ball.diameter > window.innerHeight) {
            this._ball.invertSpeedY();
            this._soundWall.play();
        }

        /* Ball collision with left border */
        if (this._ball.position.x + this._ball.diameter < 0) {
            this._scoreP1++;
            this._speedMultiplier = 1;
            this._ball.resetPosition();
            this._soundScore.play();
        }

        /* Ball collision with right border */
        if (this._ball.position.x > window.innerWidth) {
            this._scoreP2++;
            this._speedMultiplier = 1;
            this._ball.resetPosition();
            this._soundScore.play();
        }

        clear();

        this._gameObjects.forEach(function(gameObject) {
            gameObject.draw();
        });

    }

}
