let canvas;
let context;
let canvasRect;
let gameInstance;
let gamePreviousFrame;
let gameCurrentFrame;
let gameStartTime;
let delta = 16;

let scene = 'Title';
let state = '';

let input = {
    up : false,
    left : false,
    down : false,
    right : false,
};

let gameVar = {
    camera : {
        x : 0,
        y : 0,
    },

    player : {
        x : 0,
        y : 0,
        jump : 0,
        speed : 160,
        ySpeed : 0,
        jumpPower : -600,
        ground : true,
        terminalSpeed : 600,
    },

    field : {
        left : 0,
        right : 1600,
        top : 0,
        bottom : 1600,
        block : [[0, 1440], [40, 1440], [0, 1480], [0, 1520], [40, 1560], [80, 1560], [120, 1560], [160, 1520], [320, 1480], [360, 1480], [400, 1480]],
        gravity : 1600,
    },
};
