class Enemy {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = Math.floor((Math.random() * (width - this.width)));
        this.y = 0;
        this.speed = 1;
    }

    draw () {
        this.y += this.speed
        image(game.enemyImage[0].src, this.x, this.y - this.height, this.width, this.height)
    }

    destroyed (laserInfo) {
        //get distance btw laser and enemy
        let laserX = laserInfo.x + laserInfo.width / 2;
        let laserY = laserInfo.y + laserInfo.height / 2;

        let enemyX = this.x + this.width / 2;
        let enemyY = this.y - this.height / 2;
       
        if (dist(laserX, laserY, enemyX, enemyY) > 25) {
			return false
		} else {
			// here we have a collision
            image(game.enemyImage[3].src, enemyX-2, this.y-this.height)
            image(game.enemyImage[2].src, enemyX-10, this.y-this.height)
            image(game.enemyImage[1].src, this.x, this.y-this.height)
			return true;
		}
    }

}