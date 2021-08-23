class Game {

    constructor () {
        this.backgroundImages = [];
        this.playerImage = null;
    }

    setup () {
        this.background = new Background;
        this.player = new Player;
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
    }
}