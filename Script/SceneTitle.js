function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '36px Opensans';
    context.lineWidth = 2;
    context.textAlign = 'left';
    context.textBaseline = 'top';

    context.clearRect(0, 0, 1280, 720);

    context.fillText(`Platformer 2D Sample`, 8, 8);

    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.strokeRect(480, 280, 320, 160);
    context.fillText(`Start`, 640, 360);
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (x > 480 && x < 800 && y > 280 && y < 440) {
            scene = 'Game';

            gameVar.camera.x = 0;
            gameVar.camera.y = 1600 - 720;
            gameVar.player.x = 96;
            gameVar.player.y = 1544;
            gameVar.player.jump = 1;
            gameVar.player.ySpeed = 0;
            gameVar.player.ground = true;
        }
    }
}

function keyDownTitle(key) {
    
}

function keyUpTitle(key) {

}