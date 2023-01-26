let canvas;
let context;
let canvasRect;
let gameInstance;
let gamePreviousFrame;
let gameCurrentFrame;
let gameStartTime;

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
        speed : 80,
        jump : -400,
    },

    field : {
        block : [],
        gravity : 400,
    },
};
