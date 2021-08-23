const game = new Game;
let backgroundMusic;
let laserSound;

function preload() {
    backgroundMusic = loadSound('../assets/sounds/POL-waving-grass-short.wav');
    laserSound = loadSound('../assets/sounds/laser1.ogg')
    game.preload()
}

function setup() {
    createCanvas(600, 600)
    game.setup()
    backgroundMusic.play();
    // backgroundMusic.loop();
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
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.fierLaser()
    }
}

