/*function pawnMoveW(input, e, ep){
  var target = sheet.getRange(input);
  if (target.getRow() - 1 
  //♙
  
}
function pawnMoveB(input, e, ep){
  var target = sheet.getRange(input);
  //♟
  
}*/

function knightMove(input, e, colour, piece){
  var target = sheet.getRange(input.slice(input.length-2, input.length))
  for (var i = 0; i < 65; i++){
    if (sheet.getRange(Math.ceil((i+1)/8), (1+i%8)).getValue() == piece
        && isKnightShape(target, sheet.getRange(Math.ceil((i+1)/8), (1+i%8)))
        && (isColour(target, colour) == false)){
      sheet.getRange(Math.ceil((i+1)/8), (1+i%8)).clearContent();
      target.setValue(piece)
      i = 66;
    }if (i == 64){illegalMove()}
  }
}
  
function bishopMove(input, e, colour, piece){
  var target = sheet.getRange(input.slice(input.length - 2, input.length))
  var op = getPositions("bishop", colour)
  //Logger.log(op[0].getA1Notation());
  for (var i = 0; i < op.length; i++){
    if (isDiagonal(op[i], target, colour)){      
      target.setValue(op[i].getValue())
      op[i].clearContent()
      return;
    }  
  } illegalMove();
}

function rookMove(input, e, colour, piece, positions){
  var target = sheet.getRange(input.slice(input.length-2, input.length))  
  var op = positions[0] 
  if (isAligned(target, op)
      && (isColour(target, colour) == false)){
    op.clearContent();
    target.setValue(piece)
  }else{
    if (positions.length == 0){
      illegalMove()
    }else { illegalMove()}//rookMove(input, e, colour , retPiece("rook" + colour),
            //          positions.slice(1, positions.length)) }
  }
}
  
function queenMove(input, e, colour, piece, positions){
  var target = sheet.getRange(input.slice(input.length-2, input.length))  
  var op = positions[0]
  if (isAligned(target, op)
      && (isColour(target, colour) == false)){
    op.clearContent();
    target.setValue(piece)
  }else{
    op = getPositions("queen", colour)
    for (var i = 0; i < op.length; i++){
      if (isDiagonal(op[i], target, colour)){      
        target.setValue(op[i].getValue())
        op[i].clearContent()
        return;
      }  
    } illegalMove();
  }
}

function kingMove(input, e, colour, piece){
  var target = sheet.getRange(input.slice(input.length-2, input.length))
  var op = getPositions("king", colour)[0] 
  if (Math.abs(target.getRow() - op.getRow()) <= 1 &&
    Math.abs(target.getColumn() - op.getColumn()) <= 1
    && (isColour(target, colour) == false) && (canAttackPosn(target, colour) == false)){
      op.clearContent()
      target.setValue(piece)
    } else {
      illegalMove();
    }
}





