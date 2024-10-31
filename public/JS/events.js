let a = false;
let d = false;
let w = false;
let s = false;
let shoot = false;

let bullets = [];

//Mouse Variables
let mouseX = 0;
let mouseY = 0;

//CoolDown Variables
const coolDown = 250;
let lastShot = Date.now();

//Key Events
document.addEventListener('keydown', event => {
    if (event.key == 'w') {
        w = true;
    }
    if (event.key == 'a') {
        a = true;
    }
    if (event.key == 's') {
        s = true;
    }
    if (event.key == 'd') {
        d = true;
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'w') {
        w = false;
    }
    if (event.key === 'a') {
        a = false;
    }
    if (event.key === 's') {
        s = false;
    }
    if (event.key === 'd') {
        d = false;
    }
});

//Mouse tracking
window.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    //console.log(mouseX, mouseY);
});

//Mouse shoot
window.addEventListener('mousedown', event => {
    shoot = true;
});
window.addEventListener('mouseup', event => {
    shoot = false;
});

//CanShoot function
function canShoot() {
    const notOver = Date.now() - lastShot > coolDown;
    if (notOver){
        return true;
    }
}

//Move function
function move() {
    if (w) {
        player.yv = -3;
    }
    if (a) {
        player.xv = -3;
    }
    if (s) {
        player.yv = 3;
    }
    if (d) {
        player.xv = 3;
    }

    if (!w && !s) {
        player.yv = 0;
    }
    if (!a && !d) {
        player.xv = 0;
    }
}

//Bullet Spawn Function
function spawnBullet() {
    if (shoot && canShoot()) {
        let bullet = new Bullet(player.x, player.y, mouseX, mouseY);
        bullets.push(bullet);
        lastShot = Date.now();
    }
}

//Update function
function eventUpdate() {
    move();
    spawnBullet();
}