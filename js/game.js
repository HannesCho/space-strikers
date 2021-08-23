class Game {

    constructor () {
        this.backgroundImages = [];
        this.playerImage = [];
        this.backgroundMusic = null;
        this.enemyImage = [];
        this.enemies = [];
        this.laserImages = [];
    }

    setup () {
        this.background = new Background;
        this.player = new Player;
        this.backgroundMusic = new Audio('../assets/sounds/POL-waving-grass-short.wav')
    }

    preload () {
        //preload all the images
        this.backgroundImages = [
        {src : loadImage('../assets/backgrounds/background-1.png'), y: 0, speed: 1}
        ];
        this.playerImage = [loadImage('../assets/player/playerShip1_blue.png'),
                            loadImage('../assets/player/playerShip1_damage1.png'),
                            loadImage('../assets/player/playerShip1_damage2.png'),
                            loadImage('../assets/player/playerShip1_damage3.png') ]
        this.enemyImage =[
            {src : loadImage('../assets/enemies/enemyBlack1.png')},
            {src : loadImage('../assets/enemies/image96.png')},
            {src : loadImage('../assets/enemies/image99.png')},
            {src : loadImage('../assets/enemies/image100.png')},
        ]
        this.laserImages = [
            {src : loadImage('../assets/laser/laserBlue03.png')}
            ];
    }

    draw() {
        this.background.draw()
        this.player.draw()
        //background music setting
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.05;
        // this.backgroundMusic.play();

        //add enemy in every 200 frame
        if (frameCount % 200 === 0) {
            this.enemies.push(new Enemy())
        }
        this.enemies.forEach((enemy) => {
            enemy.draw();
        })
        //enemy will disappear when it reaches to the bottom
        this.enemies = this.enemies.filter((enemy) => {
            if (enemy.y > height + enemy.height) {
                return false
            } else {
                return true
            }
        })

        // when missile hit the enemy both will disappear
        this.player.lasers.forEach((laser) => {
            this.enemies.forEach((enemy) => {
                if (enemy.destroyed(laser) === true) {
                    this.enemies = this.enemies.filter((el) => {
                        return el != enemy
                    })
                    this.player.lasers = this.player.lasers.filter((el) => {
                        return el != laser
                    })
                }
            })
        })
        
        
    }

    gameOver () {
        this.enemies.forEach((enemy) => {
            if (this.player.collision(enemy) === true) {
                this.enemies = this.enemies.filter((el) => {
                    return el != enemy
                })
                console.log('game over!');
                noLoop();
            } 
        })
            
        
        
    }

}