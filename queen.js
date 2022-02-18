class queens{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whiteQueenDisplay(){
        this.sprite.addImage(whiteQueenImg)
        this.sprite.scale=0.08
    }
    BlackQueenDisplay(){
        this.sprite.addImage(blackQueenImg)
        this.sprite.scale=0.09
    }
}