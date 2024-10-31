class Zombie {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 35;
        this.xv = 0;
        this.yv = 0;
        this.speed = 2.5;
    }

    physics() {
        this.x += this.xv;
        this.y += this.yv;
    }

    draw() {
        this.physics();
    }
}