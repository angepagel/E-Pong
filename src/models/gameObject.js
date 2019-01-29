
class GameObject {

    constructor(x, y) {
        this._initialPosition = createVector(x, y); 
        this._position = this._initialPosition.copy();
        
        this._width = null;
        this._height = null;
        this._speed = null;

        this._controller = new Controller(this);
        this._view = new View(this);
    }

    
    get initialPosition() { return this._initialPosition; }
    set initialPosition(newPosition) {
        this._initialPosition = createVector(newPosition.x, newPosition.y);
        this._position = this._initialPosition.copy();
    }

    get position() { return this._position; }
    set position(newPosition) { this._position = createVector(newPosition.x, newPosition.y); }

    get width() { return this._width; }
    set width(newWidth) { this._width = newWidth; }

    get height() { return this._height; }
    set height(newHeight) { this._height = newHeight; }

    get speed() { return this._speed; }
    set speed(newSpeed) {
        this._speed = createVector(newSpeed.x, newSpeed.y);
        this._speed.setMag(newSpeed.multiplier);
    }

    get controller() { return this._controller; }
    set controller(newController) { this._controller = newController; }

    get view() { return this._view; }
    set view(newView) { this._view = newView; }


    update() {
        this._controller.update();
    }

    draw() {
        this._view.draw();
    }

    resetPosition() {
        this._position = this._initialPosition.copy();
    }

}
