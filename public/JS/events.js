let a = false;
let d = false;
let w = false;
let s = false;
let shoot = false;

let bullets = [];

const coolDown = 1000;
let lastShot = Date.now() - coolDown;

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
    if (event.key == ' ') {
        shoot = true;
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
    if (event.key === ' ') {
        shoot = false;
    }
});


//CoolDown functions
function startCoolDown() {
    lastShot = Date.now();
}

function canShoot() {
    const notOver = Date.now() - lastShot > coolDown;
    if (notOver){
        return !notOver;
    }
}

function shootBullet() {
    if (shoot === true && canShoot()) {
        startCoolDown();
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
    if (shoot === true && canShoot()) {
        let bullet = new Bullet();
        bullets.push(bullet);
        console.log(bullets.length);
        shootBullet();
    };
};