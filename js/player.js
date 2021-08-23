class Player {
    constructor() {
		this.width = 60;
		this.height = 50;
		this.x = (width - this.width) / 2; // set x in the middle of the canvas
		this.y = height - this.height;
        this.speed = 3;
	}

    draw () {
        // prevent player go outside of canvas
        if (this.y >= height - this.height) {
			this.y = height - this.height;
		}
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}