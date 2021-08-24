const game = new Game;
let backgroundMusic;
let laserSound;
let destroyedSound;
let muteBtn;
let pauseBtn;
let startBtn;
let musicPlay = true;


function preload() {
    backgroundMusic = loadSound('../assets/sounds/POL-waving-grass-short.wav');
    laserSound = loadSound('../assets/sounds/laser1.ogg')
    destroyedSound = loadSound('../assets/sounds/destroyed.wav')
    game.preload()
}

function setup() {
    const canvas = createCanvas(600, 600)
    canvas.parent('canvas');
    game.setup()
    backgroundMusic.setVolume(0.01);
    backgroundMusic.play();
    backgroundMusic.loop();
    muteBtn = createButton('Mute /Unmute');
    muteBtn.parent('mute');
    muteBtn.mousePressed(muteBG).addClass('btn');
    startBtn = createButton('Start');
    startBtn.parent('start').addClass('btn');
    startBtn.mousePressed(game.gameStart)
    pauseBtn = createButton('Pause').addClass('btn');
    pauseBtn.parent('pause');
    pauseBtn.mouseClicked(game.gamePause);
}

function draw() {
    if (gameStart){
        game.draw();
    
    // player move
        if (keyIsDown(37)) {
            game.player.moveLeft();
        }
        if (keyIsDown(38)) {
            game.player.moveUp();
        }
        if (keyIsDown(39)) {
            game.player.moveRight();
        }
        if (keyIsDown(40)) {
            game.player.moveDown();
        }
        if (frameCount % 20 === 0) {
            if (keyIsDown(32)) {
                if (frameCount % 25 === 0) {
                    game.player.fierLaser();
                }
            }
        }
    }   

    if (gameOver) {
        backgroundMusic.stop()
        noLoop()
        clear()
    }
}

function keyPressed() {
    if (gameStart) {
        if (keyCode === 32) {
        game.player.fierLaser()
        }
    }
}

function muteBG() {
    musicPlay = !musicPlay;
    if (musicPlay) {
        backgroundMusic.play();
    } else {
        backgroundMusic.stop();
    }
}