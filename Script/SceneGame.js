function loopGame() {
    playerMove();
    displayGame();
}

function displayGame() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '36px Opensans';
    context.lineWidth = 2;
    context.textAlign = 'left';
    context.textBaseLine = 'top';

    context.clearRect(0, 0, 1280, 720);

    drawField();
    drawPlayer();
}

function mouseUpGame(x, y, button) {

}

function keyDownGame(key) {
    if (key === ' ') {
        playerJump();
    }

    if (key === 'a') {
        input.left = true;
    } else if (key === 'd') {
        input.right = true;
    }
}

function keyUpGame(key) {
    if (key === 'a') {
        input.left = false;
    } else if (key === 'd') {
        input.right = false;
    }
}