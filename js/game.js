let gameStart = false;
let gamePause = false;
let gameOver = false;


class Game {

    constructor () {
        this.backgroundImages = [];
        this.playerImage = [];
        this.enemyImage = [];
        this.enemies = [];
        this.laserImages = [];
        this.lasers = [];
    }

    setup () {
        this.background = new Background;
        this.player = new Player;
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
                    this.player.score += 10
                    document.querySelector('.score').innerText = this.player.score;
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

    gameStart () {
        document.querySelector('.pause-btn').innerText = 'Pause'
        startBtn.mousePressed(game.gamePause);
        startMusic.stop();
        document.querySelector('#title').style.visibility = 'hidden'; 
        startSound.play()
        setTimeout(function(){game.backgroundMusic()}, 2000)
        return gameStart = true;
    }

    backgroundMusic() {
        backgroundMusic.play();
        backgroundMusic.loop();
    }

    gamePause () {
        gamePause = !gamePause;
        if (!gameOver){
            if (gamePause) {
                document.querySelector('.pause-btn').innerText = 'Continue'
                noLoop();
                backgroundMusic.stop();
            } else {
                document.querySelector('.pause-btn').innerText = 'Pause'
                loop();
                backgroundMusic.play()
            }
        } 
    }

    gameRestart () {
        location.reload();
    }

    gameOver () {
        this.enemies.forEach((enemy) => {
            if (this.player.collision(enemy) === true) {
                this.enemies = this.enemies.filter((el) => {
                    return el != enemy
                })
                gameStart = false; 
                return gameOver = true
            } 
        })
    }
}