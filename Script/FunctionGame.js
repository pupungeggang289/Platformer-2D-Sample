function pointInisdeRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4;
}

function playerMove() {
    let predictedX = gameVar.player.x;
    let predictedY = gameVar.player.y;

    if (input.left === true) {
        predictedX += -1 * gameVar.player.speed * delta / 1000;
    } else if (input.right === true) {
        predictedX += gameVar.player.speed * delta / 1000;
    }

    gameVar.player.ground = false;

    predictedY += gameVar.player.ySpeed * delta / 1000;

    if (gameVar.player.ySpeed < 0) {
        for (let i = 0; i < gameVar.field.block.length; i++) {
            if (pointInisdeRect(gameVar.player.x, predictedY, gameVar.field.block[i][0] - 16, gameVar.field.block[i][1] + 40, 72, 16)) {
                predictedY = gameVar.field.block[i][1] + 56;
                gameVar.player.ySpeed = 0;
                break;
            }
        }
    }

    if (gameVar.player.ySpeed >= 0) {
        for (let i = 0; i < gameVar.field.block.length; i++) {
            if (pointInisdeRect(gameVar.player.x, predictedY, gameVar.field.block[i][0] - 16, gameVar.field.block[i][1] - 16, 72, 16)) {
                predictedY = gameVar.field.block[i][1] - 16;
                gameVar.player.ySpeed = 0;
                gameVar.player.ground = true;
                gameVar.player.jump = 1;
                break;
            }
        }
    }

    if (gameVar.player.ground === false) {
        if (gameVar.player.ySpeed + gameVar.field.gravity * delta / 1000 < gameVar.player.terminalSpeed) {
            gameVar.player.ySpeed += gameVar.field.gravity * delta / 1000;
        } else {
            gameVar.player.ySpeed = gameVar.player.terminalSpeed;
        }
    }

    for (let i = 0; i < gameVar.field.block.length; i++) {
        if (pointInisdeRect(predictedX, predictedY, gameVar.field.block[i][0] + 40, gameVar.field.block[i][1] - 16, 16, 72)) {
            predictedX = gameVar.field.block[i][0] + 56;
            break;
        }

        if (pointInisdeRect(predictedX, predictedY, gameVar.field.block[i][0] - 16, gameVar.field.block[i][1] - 16, 16, 72)) {
            predictedX = gameVar.field.block[i][0] - 16;
            break;
        }
    }

    gameVar.player.x = predictedX;
    gameVar.player.y = predictedY;
}

function playerJump() {
    if (gameVar.player.jump > 0) {
        gameVar.player.jump -= 1;
        gameVar.player.ySpeed = gameVar.player.jumpPower;
        gameVar.player.ground = false;
    }
}