/*
//Problems\\
1. Bullets don't shoot when you press a move key at the same time
2. The player can only shoot bullets in one direction
//Problems\\
*/

//Canvas setup
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

canvas.style.backgroundColor = 'green';

let player = new Player(100, 100, 50, 60);

//Update function
function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw();
        bullets[i].update();
    }

    move();
    spawnBullet();

    requestAnimationFrame(update);
}

update();