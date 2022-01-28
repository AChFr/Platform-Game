class Player {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: height }

        this.playerSpeed = { x: 25, y: 0 }
        this.playerGravity = 0.5
        this.playerLifeCounter = 1000
        this.imageInstance = undefined
        this.playerBaseline = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/player.png'
        this.imageInstance.frames = 3
        this.imageInstance.framesIndex = 0
    }

    draw(framesCounter) {

        this.ctx.drawImage(this.imageInstance, this.imageInstance.width / this.imageInstance.frames * this.imageInstance.framesIndex, 0, this.imageInstance.width / this.imageInstance.frames, this.imageInstance.height, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
        this.animate(framesCounter)
        this.moveDown()
        this.lifeBar()

    }
    animate(framesCounter) {
        if (framesCounter % 7 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0;
        }
    }

    moveLeft() {

        this.playerPos.x > 50 ? this.playerPos.x -= this.playerSpeed.x : null

    }

    moveRight() {
        this.playerPos.x <= 700 ? this.playerPos.x += this.playerSpeed.x : null



    }

    jump() {
        if (this.playerPos.y + this.playerSize.h >= 700 || this.playerPos.y + this.playerSize.h >= this.playerBaseline - 1) {

            this.playerSpeed.y -= 15


        }
    }





    moveDown() {
        if (this.playerPos.y < 700) {
            this.playerPos.y += this.playerSpeed.y
        }

        if (this.playerPos.y + this.playerSize.h + this.playerSpeed.y < 700) {
            this.playerSpeed.y += this.playerGravity
        }
        else {
            this.playerSpeed.y = 0
            this.playerBaseline = 700
        }

    }



    lifeBar() {

        this.ctx.fillStyle = "black"
        this.ctx.fillRect(75, 45, 1005, 5)
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(75, 50, 1000, 35)
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(75, 50, this.playerLifeCounter, 35)
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(75, 80, 1005, 5)
        this.ctx.fillRect(1075, 45, 5, 35)
        this.insertImage()

    }
    insertImage() {
        const imageInstance = new Image()
        imageInstance.src = `img/bar.png`
        this.ctx.drawImage(imageInstance, 15, 10, 100, 100)
    }
}


