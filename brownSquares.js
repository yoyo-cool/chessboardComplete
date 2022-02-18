class blackSquares{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.w = w; 
      this.h = h;
      this.sprite = createSprite(x, y, w,h,options);
      this.sprite.shapeColor="#36454F"
    }
  };