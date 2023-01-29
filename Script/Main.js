window.onload = main;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');

    canvas.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('keydown', keyDown, false);
    window.addEventListener('keyup', keyUp, false);

    gameCurrentFrame = Date.now();
    gamePreviousFrame = Date.now() - 16;

    gameInstance = requestAnimationFrame(loop);
}

function loop() {
    gameCurrentFrame = Date.now();
    delta = gameCurrentFrame - gamePreviousFrame;

    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'Game') {
        loopGame();
    }

    gamePreviousFrame = Date.now();
    gameInstance = requestAnimationFrame(loop);
}

function mouseUp(event) {
    canvasRect = canvas.getBoundingClientRect();

    let x = event.clientX - canvasRect.left;
    let y = event.clientY - canvasRect.top;
    let button = event.button;

    if (scene === 'Title') {
        mouseUpTitle(x, y, button);
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button);
    }
}

function keyDown(event) {
    let key = event.key;

    if (scene === 'Title') {
        keyDownTitle(key);
    } else if (scene === 'Game') {
        keyDownGame(key);
    }
}

function keyUp(event) {
    let key = event.key;

    if (scene === 'Title') {
        keyUpTitle(key);
    } else if (scene === 'Game') {
        keyUpGame(key);
    }
}

function errorHandle() {
    cancelAnimationFrame(gameInstance);
}

function rightClick() {
    return false;
}
