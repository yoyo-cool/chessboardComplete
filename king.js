class kings{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whiteKingDisplay(){
        this.sprite.addImage(whiteKingImg)
        this.sprite.scale=0.15
    }
    BlackKingDisplay(){
        this.sprite.addImage(blackKingImg)
        this.sprite.scale=0.32
    }
}