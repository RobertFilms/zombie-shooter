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
    if (event.key == 'w'.toLowerCase()) {
        w = true;
    }
    if (event.key == 'a'.toLowerCase()) {
        a = true;
    }
    if (event.key == 's'.toLowerCase()) {
        s = true;
    }
    if (event.key == 'd'.toLowerCase()) {
        d = true;
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'w'.toLowerCase()) {
        w = false;
    }
    if (event.key === 'a'.toLowerCase()) {
        a = false;
    }
    if (event.key === 's'.toLowerCase()) {
        s = false;
    }
    if (event.key === 'd'.toLowerCase()) {
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
        let bullet = new Bullet(player.x+(player.h/2), player.y+(player.w/2), mouseX, mouseY);
        bullets.push(bullet);
        lastShot = Date.now();
    }
}

//Update function
function eventUpdate() {
    move();
    spawnBullet();
}