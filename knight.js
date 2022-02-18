class knights{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whiteKnightDisplay(){
        this.sprite.addImage(whiteknight)
        this.sprite.scale=0.1
    }
    BlackKnightDisplay(){
        this.sprite.addImage(blackknight)
        this.sprite.scale=0.12
    }
}