class Player {
    constructor() {
		this.width = 60;
		this.height = 50;
		this.x = (width - this.width) / 2; // set x in the middle of the canvas
		this.y = height - this.height;
        this.speed = 3;
        this.lasers = [];
	}

    preload () {
        

    }

    draw () {
        // prevent player go outside of canvas
        if (this.y >= height - this.height) {
			this.y = height - this.height;
		}
        image(game.playerImage, this.x, this.y, this.width, this.height);
        }
    //movement of the player
    moveLeft () {
        this.x -= this.speed;
        // keep player inside the canvas
        if (this.x <= 0){
            this.x = 0;
        } 
        if (this.x >= width - this.width) {
            this.x = width - this.width
        }  
    }

    moveRight () {
        this.x += this.speed;
        if (this.x <= 0){
            this.x = 0;
        } 
        if (this.x >= width - this.width) {
            this.x = width - this.width
        }  
    }   
    moveUp () {
        this.y -= this.speed;
        if (this.y <= 0){
            this.y = 0;
        } 
        if (this.y >= height - this.height) {
            this.y = height - this.height
        } 
    }
    moveDown () {
        this.y += this.speed;
        if (this.y <= 0){
            this.y = 0;
        } 
        if (this.y >= height - this.height) {
            this.y = height - this.height
        } 
    }

    fierLaser () {
        // have to preload all the image before draw!!
        //add new laser when space bar pushed down
        if (frameCount % 20 === 0) {
            this.lasers.push(new Laser(this.x + (this.width - 9)/ 2, this.y - 37));
        }
        // draw all the laser in the array
        this.lasers.forEach(function (laser) {
            laser.draw();
        })
        // remove laser outside of the screen
        this.lasers = this.lasers.filter((laser) => {
			if (laser.y < 0) {
				return false
			} else {
				return true
			}
        })
    
    }
}