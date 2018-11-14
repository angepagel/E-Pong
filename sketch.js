
let paddleP1;
let paddleP2;
let ball;
let scoreP1;
let scoreP2;

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  
  middle = window.innerHeight/2 - Paddle.height/2; // Middle of the window
  paddleMargin = 30; // Margin between the window and paddles

  /* Creates and positions Player 1 and Player 2 paddles */
  paddleP1 = new Paddle(paddleMargin, middle);
  paddleP2 = new Paddle(window.innerWidth-paddleMargin-Paddle.width, middle);

  /* Initializes both players' score */
  scoreP1 = 0;
  scoreP2 = 0;

  /* Creates and positions the ball at the center of the window */
  ball = new Ball(window.innerWidth/2-Ball.radius, window.innerHeight/2-Ball.radius);
  
}

function draw() {

  background('#222222');

  paddleP1.move(90, 83); // Player 1 controls are Z(up) and S(down) (azerty)
  paddleP2.move(UP_ARROW, DOWN_ARROW); // Player 2 controls are the up and down arrows
  
  /* Ball collision with P1 and P2 paddles */
  if (ball.isColliding(paddleP1) || ball.isColliding(paddleP2)) {
    ball.invertSpeedX();
  }

  /* Ball collision with top and bottom window borders */
  if (ball.position.y < 0 || ball.position.y + Ball.diameter > window.innerHeight) {
    ball.invertSpeedY();
  }

  /* Ball collision with left border */
  if (ball.position.x + Ball.diameter < 0) {
    scoreP1++;
    ball.reset();
  }

  /* Ball collision with right border */
  if (ball.position.x > window.innerWidth) {
    scoreP2++;
    ball.reset();
  }


  paddleP1.draw();
  paddleP2.draw();
  ball.draw();

}
