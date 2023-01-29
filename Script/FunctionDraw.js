function drawField() {
    context.strokeStyle = 'Green';

    for (let i = 0; i < gameVar.field.block.length; i++) {
        context.strokeRect(Math.floor(gameVar.field.block[i][0] - gameVar.camera.x), Math.floor(gameVar.field.block[i][1] - gameVar.camera.y), 40, 40);
    }
}

function drawPlayer() {
    context.strokeStyle = 'Black';

    context.strokeRect(Math.floor(gameVar.player.x - gameVar.camera.x - 16), Math.floor(gameVar.player.y - gameVar.camera.y - 16), 32, 32);
}