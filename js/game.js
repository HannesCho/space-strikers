class Game {

    constructor () {
        this.backgroundImages = [];
        this.playerImage = null;
        this.backgroundMusic = null;
    }

    setup () {
        this.background = new Background;
        this.player = new Player;
        this.backgroundMusic = new Audio('../assets/sounds/POL-waving-grass-short.wav')
    }

    preload () {
        this.backgroundImages = [
        {src : loadImage('../assets/backgrounds/background-1.png'), y: 0, speed: 1}
        ];
        this.playerImage = loadImage('../assets/player/playerShip1_blue.png') 
    }

    draw() {
        this.background.draw()
        this.player.draw()
        //background music setting
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.05;
        this.backgroundMusic.play();
    }

}