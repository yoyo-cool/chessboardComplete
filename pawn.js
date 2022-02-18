class pawns{
    constructor(x,y){
        this.x =x
        this.y=y
        this.sprite=createSprite(this.x,this.y,70,70)

    }
    whitePawnsDisplay(){
        this.sprite.addImage(whitePawnImg)
        this.sprite.scale=0.03
    }
    BlackPawnsDisplay(){
        this.sprite.addImage(blackPawnImg)
        this.sprite.scale=0.03
    }
}