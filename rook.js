class rooks{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whiteRookDisplay(){
        this.sprite.addImage(whiteRookImg)
        this.sprite.scale=0.08
    }
    BlackRookDisplay(){
        this.sprite.addImage(blackRookImg)
        this.sprite.scale=0.13
    }
}