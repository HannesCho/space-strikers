const game = new Game;
let backgroundMusic;
let laserSound;
let destroyedSound;
let muteBtn;
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
    muteBtn.parent('btns');
    muteBtn.mousePressed(muteBG);
    
    
}

function draw() {
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
            if (frameCount % 20 === 0) {
                game.player.fierLaser();
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
    if (keyCode === 32) {
        game.player.fierLaser()
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