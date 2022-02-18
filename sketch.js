var boardPosition = 100
var positionXofWhiteSquare = 100
var positionYofWhiteSquare = 100
var positionXofBlackSquare = 170
var positionYofBlackSquare = 100

function preload(){
  whiteknight=loadImage('knight.png')
  blackknight=loadImage('knight2.png')
  whiteKingImg=loadImage('king.png')
  blackKingImg=loadImage('king2.png')
  whiteBishopImg=loadImage('bishop.jpg')
  blackBishopImg=loadImage('bishop2.png')
  whiteQueenImg=loadImage('queen.jpg')
  blackQueenImg=loadImage('queen2.png')
  whiteRookImg=loadImage('rook.png')
  blackRookImg=loadImage('rook2.png')
  whitePawnImg=loadImage('pawn.png')
  blackPawnImg=loadImage('pawn2.png')
}

function setup() {
  createCanvas(1280,720);
  background('brown');
  fill('white')  
  createWhiteSquares()
  createWhiteSquares()
  createWhiteSquares()
  createWhiteSquares()
  createBlackSquares()
  createBlackSquares()
  createBlackSquares()
  createBlackSquares()

  WhiteKnight1=new knights(520,590,70,70)
  WhiteKnight2=new knights(170,590,70,70)
  BlackKnight1=new knights(520,100,70,70)
  BlackKnight2=new knights(170,100,70,70)
  whiteKing=new kings(380,590,70,70)
  blackKing=new kings(380,100,70,70)
  whiteBishop1= new Bishops(450,590,70,70)
  whiteBishop2= new Bishops(240,590,70,70)
  blackBishop1= new Bishops(450,100,70,70)
  blackBishop2= new Bishops(240,100,70,70)
  whiteQueen= new queens(310,590,70,70)
  blackQueen= new queens(310,100,70,70)
  whiteRook1=new rooks(590,590,70,70)
  whiteROok2=new rooks(100,590,70,70)
  blackRook1=new rooks(590,100,70,70)
  blackRook2=new rooks(100,100,70,70)
  whitePawn1= new pawns(100,520,70,70)
  whitePawn2= new pawns(170,520,70,70)
  whitePawn3= new pawns(240,520,70,70)
  whitePawn4= new pawns(310,520,70,70)
  whitePawn5= new pawns(380,520,70,70)
  whitePawn6= new pawns(450,520,70,70)
  whitePawn7= new pawns(520,520,70,70)
  whitePawn8= new pawns(590,520,70,70)
  blackPawn1= new pawns(100,170,70,70)
  blackPawn2= new pawns(170,170,70,70)
  blackPawn3= new pawns(240,170,70,70)
  blackPawn4= new pawns(310,170,70,70)
  blackPawn5= new pawns(380,170,70,70)
  blackPawn6= new pawns(450,170,70,70)
  blackPawn7= new pawns(520,170,70,70)
  blackPawn8= new pawns(590,170,70,70)
  
}

function draw() {
  WhiteKnight1.whiteKnightDisplay()
  WhiteKnight2.whiteKnightDisplay()
  BlackKnight1.BlackKnightDisplay()
  BlackKnight2.BlackKnightDisplay()
  whiteKing.whiteKingDisplay()
  blackKing.BlackKingDisplay()
  whiteBishop1.whiteBishopDisplay()
  whiteBishop2.whiteBishopDisplay()
  blackBishop1.BlackBishopDisplay()
  blackBishop2.BlackBishopDisplay()
  whiteQueen.whiteQueenDisplay()
  blackQueen.BlackQueenDisplay()
  whiteRook1.whiteRookDisplay()
  whiteROok2.whiteRookDisplay()
  blackRook1.BlackRookDisplay()
  blackRook2.BlackRookDisplay()
  whitePawn1.whitePawnsDisplay()
  whitePawn2.whitePawnsDisplay()
  whitePawn3.whitePawnsDisplay()
  whitePawn4.whitePawnsDisplay()
  whitePawn5.whitePawnsDisplay()
  whitePawn6.whitePawnsDisplay()
  whitePawn7.whitePawnsDisplay()
  whitePawn8.whitePawnsDisplay()
  blackPawn1.BlackPawnsDisplay()
  blackPawn2.BlackPawnsDisplay()
  blackPawn3.BlackPawnsDisplay()
  blackPawn4.BlackPawnsDisplay()
  blackPawn5.BlackPawnsDisplay()
  blackPawn6.BlackPawnsDisplay()
  blackPawn7.BlackPawnsDisplay()
  blackPawn8.BlackPawnsDisplay()
  
  drawSprites();
}

function createWhiteSquares(){
  for(var i = 0; i < 4 ; i++){
    whiteSquare= new whiteSquares(positionXofWhiteSquare,positionYofWhiteSquare,70,70)
    positionXofWhiteSquare+=140
}
  positionYofWhiteSquare+=70
  positionXofWhiteSquare=100
  positionXofWhiteSquare+=70
  for(var i = 0; i<4;i++){
    whiteSquare= new whiteSquares(positionXofWhiteSquare,positionYofWhiteSquare,70,70)
    positionXofWhiteSquare+=140
  }
  positionYofWhiteSquare+=70
  positionXofWhiteSquare=100
}
function createBlackSquares(){
  fill('black')
  for(var i = 0; i<4;i++){
    blackSquare= new blackSquares(positionXofBlackSquare,positionYofBlackSquare,70,70)
    positionXofBlackSquare+=140
  }
  positionYofBlackSquare+=70
  positionXofBlackSquare=100
  for(var i = 0; i < 4 ; i++){
    blackSquare= new blackSquares(positionXofBlackSquare,positionYofBlackSquare,70,70)
    positionXofBlackSquare+=140
}
positionYofBlackSquare+=70
positionXofBlackSquare=100
positionXofBlackSquare+=70
}