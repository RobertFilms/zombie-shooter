/*
//Problems/Things to do\\
1. The player can only shoot bullets in one direction
2. Camrea system
//Problems/Things to do\\
*/

//Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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
    
    //Player border collision
    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }
    if (player.y < 0) {
        player.y = 0;
    }
    if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw();
        bullets[i].update();
    }

    for (let i = 0; i < zombies.length; i++) {
        zombies[i].draw();
        zombies[i].update();
    }

    eventUpdate();

    requestAnimationFrame(update);
}

window.onload = () => {update()}