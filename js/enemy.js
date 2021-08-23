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

}