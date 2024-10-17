class Bullet {
    constructor(x, y, w, h) {
        this.x = player.x;
        this.y = player.y;
        this.w = 20;
        this.h = 15;
        this.xv = -5;
        this.yv = 0;
        this.sprite = new Image();
        this.sprite.src = "sprites/bullet.png";
    }

    physics() {
        this.x += this.xv;
        this.y += this.yv;
    }

    draw() {
        if (!this.sprite.complete) {
            return;
        }

        const frameWidth = this.sprite.width / 2;
        const frameHeight = this.sprite.height / 2;
        const totalFrames = 4;
        const fps = 12;
        const frameDuration = 1000 / fps;
        const currentFrame = Math.floor(Date.now() / frameDuration) % totalFrames;
        const sx = (currentFrame % 2) * frameWidth;
        const sy = Math.floor(currentFrame / 2) * frameHeight;
        //ctx.drawImage(this.sprite, sx, sy, frameWidth, frameHeight, this.x, this.y, this.w, this.h);
        somcanvas.getContext('this.sprite.src'). drawImage(this.sprite, sx, sy, frameWidth, frameHeight, this.x, this.y, this.w, this.h);
    }

    update() {
        this.physics();
    }
}
