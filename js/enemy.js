class Enemy {
    constructor(enemyImage, level, life) {
        this.width = 50;
        this.height = 50;
        this.x = Math.floor((Math.random() * (width - this.width)));
        this.y = 0;
        this.speed = 1;
        this.enemyImage = enemyImage;
        this.level = level;
        this.life = life;
    }

    draw () {
        if (this.level ===1) {
            this.y += this.level
        image(this.enemyImage, this.x, this.y - this.height, this.width, this.height)
        }
        if (this.level === 2){
            this.y += this.level
            this.x += 1
            image(this.enemyImage, this.x, this.y - this.height, this.width, this.height)
        }
        if (this.level === 3) {
            this.y += this.level
            image(this.enemyImage, this.x, this.y - this.height, this.width, this.height)
        }
        if (this.level === 4) {
            this.y += this.level
            this.x -= 2
            image(this.enemyImage, this.x, this.y - this.height, this.width, this.height)
        }
        if (this.level === 5) {
            this.x = 150
            if (this.y < 150) {
                this.y += 1;
            }
            image(this.enemyImage, this.x, this.y - 150, 300, 300)
        }
       
    }

    destroyed (laserInfo) {
        //get distance btw laser and enemy
        let laserX = laserInfo.x + laserInfo.width / 2;
        let laserY = laserInfo.y + laserInfo.height / 2;

        let enemyX = this.x + this.width / 2;
        let enemyY = this.y - this.height / 2;
       
        if (dist(laserX, laserY, enemyX, enemyY) > 25) {
			return 1
		} else {
			// here we have a collision
            if (this.life > 0) {
                console.log(this.life);
                this.life -= 1;
                image(game.enemydestroyedImage[3].src, enemyX-2, this.y-this.height)
                image(game.enemydestroyedImage[4].src, enemyX-2, this.y-this.height)
                return 2
            } 
            if (this.life === 0) {
            console.log(this.life);
            destroyedSound.play()
            image(game.enemydestroyedImage[2].src, enemyX-2, this.y-this.height)
            image(game.enemydestroyedImage[1].src, enemyX-10, this.y-this.height)
            image(game.enemydestroyedImage[0].src, this.x, this.y-this.height)
            return 3
            }
			
		}
    }

}