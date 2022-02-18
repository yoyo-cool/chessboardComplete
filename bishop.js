class Bishops{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whiteBishopDisplay(){
        this.sprite.addImage(whiteBishopImg)
        this.sprite.scale=0.1
    }
    BlackBishopDisplay(){
        this.sprite.addImage(blackBishopImg)
        this.sprite.scale=0.1
    }
}