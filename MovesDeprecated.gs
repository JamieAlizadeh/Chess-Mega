/*function knightMove(input, e){
  var legalCheck = false;
  var target = sheet.getRange(input.slice(input.length - 2, input.length) + ":" + input.slice(input.length - 2, input.length))
  if (e.range.getA1Notation().slice(0,1) == "J"){
    for (var i = 1; i < 9; i++){
      for (var j = 1; j < 9; j++){
        if (sheet.getRange(i,j).getValue() == "♘"){
          if (isKnightShape(target, sheet.getRange(i, j)) == true){
            if (target.getValue() == "♙" ||
                target.getValue() == "♘" ||
                target.getValue() == "♗" ||
                target.getValue() == "♖" ||
                target.getValue() == "♕" ||
                target.getValue() == "♔"){
              illegalMove()
            }
            else{
              switch (legalCheck) {
              case false:
                legalCheck = true;
                break;
              case true:
                legalCheck = false;
                doubleMove()
                break;
              }
            }
          }
        }
      }
    }
    if (legalCheck == true){
      sheet.getRange(i,j).clearContent();
      Logger.log(sheet.getRange(i,j).getA1Notation())
      target.setValue("♘")
    }else{
      illegalMove() 
    }
    if (isKnightShape(target, blackKingPosition) == true){
      blackCheck()
    }
  }  
  if (e.range.getA1Notation().slice(0,1) == "K"){
    for (var i = 1; i < 9; i++){
      for (var j = 1; j < 9; j++){
        if (sheet.getRange(i,j).getValue() == "♞"){
          if (isKnightShape(target, sheet.getRange(i, j)) == true){
            if (target.getValue() == "♟" ||
                target.getValue() == "♞" ||
                target.getValue() == "♝" ||
                target.getValue() == "♜" ||
                target.getValue() == "♛" ||
                target.getValue() == "♚"){
              illegalMove()
            }
            else{
              sheet.getRange(i,j).clearContent();
              if (legalCheck == false){
                legalCheck = true; 
              } else{
                doubleMove()
                legalCheck = false;
              }
            }
          }
        }
      }
    }
    if (legalCheck == true){
      sheet.getRange(i,j).clearContent();
      target.setValue("♞")
    }else{
      illegalMove() 
    }
    if (isKnightShape(target, whiteKingPosition) == true){
      whiteCheck()
    }
  }
}

function queenMove(input, e){
  var target = sheet.getRange(input.slice(input.length - 2, input.length));
  for (var i = 1; i < 9; i++){
    for (var j = 1; j < 9; j++){
      if (e.range.getA1Notation().slice(0,1) == "J"){
        if (sheet.getRange(i,j).getValue() == "♕"){
          if (isAligned(target, sheet.getRange(i,j)) || isDiagonal(target, sheet.getRange(i,j))){
            sheet.getRange(i,j).clearContent()
          }
        }
      }
      if (e.range.getA1Notation().slice(0,1) == "K"){
        if (sheet.getRange(i,j).getValue() == "♛"){
          if (isAligned(target, sheet.getRange(i,j)) || isDiagonal(target, sheet.getRange(i,j))){
            Logger.log(sheet.getRange(i, j).getValue());
            sheet.getRange(i,j).clearContent()
          }
        }
      }
    }
  }
  if (e.range.getA1Notation().slice(0,1) == "J"){
    target.setValue("♕")
    if (isAligned(target, blackKingPosition) == true || isDiagonal(target, whiteKingPosition) == true){
      whiteCheck()
    }
  }
  if (e.range.getA1Notation().slice(0,1) == "K"){
    target.setValue("♛")
    if (isAligned(target, whiteKingPosition) == true || isDiagonal(target, whiteKingPosition) == true){
      blackCheck()
    }
  }
}

function rookMove(input, e){
var target = sheet.getRange(input.slice(input.length - 2, input.length));
  for (var i = 1; i < 9; i++){
    for (var j = 1; j < 9; j++){
      if (e.range.getA1Notation().slice(0,1) == "J"){
        if (sheet.getRange(i,j).getValue() == "♖"){
          if (isAligned(target, sheet.getRange(i,j))){
            sheet.getRange(i,j).clearContent()
          }
        }
      }
      if (e.range.getA1Notation().slice(0,1) == "K"){
        if (sheet.getRange(i,j).getValue() == "♜"){
          if (isAligned(target, sheet.getRange(i,j))){
            sheet.getRange(i,j).clearContent()
          }
        }
      }      
    }
  }
  if (e.range.getA1Notation().slice(0,1) == "J"){
    target.setValue("♖")
    if (isAligned(target, blackKingPosition) == true){
      whiteCheck()
    }
  }
  if (e.range.getA1Notation().slice(0,1) == "K"){
    target.setValue("♜")
    if (isAligned(target, whiteKingPosition) == true){
      blackCheck()
    }
  }
}

function kingMove(input,e){
  var target = sheet.getRange(input.slice(input.length - 2, input.length) + ":" + input.slice(input.length - 2, input.length))
  if (e.range.getA1Notation().slice(0,1) == "J"){
    for (var i = 1; i < 9; i++){
      for (var j = 1; j < 9; j++){
        Logger.log(sheet.getRange(i,j));
        if (sheet.getRange(i,j).getValue() == "♔"){
          sheet.getRange(i,j).clearContent();
        }
      }
    }
    target.setValue("♔")
    whiteKingPosition = target.getA1Notation()
  }
  if (e.range.getA1Notation().slice(0,1) == "K"){
    for (var i = 1; i < 9; i++){
      for (var j = 1; j < 9; j++){
        if (sheet.getRange(i,j).getValue() == "♚"){
          sheet.getRange(i,j).clearContent();
        }
      }
    } 
    target.setValue("♚")
    blackKingPosition = target.getA1Notation()
  }
}

function bishopMove(input, e){
  var target = sheet.getRange(input.slice(input.length - 2, input.length))
  for (var i = 1; i < 9; i++){
    for (var j = 1; j < 9; j++){
      if ((sheet.getRange(i, j).getValue() == "♗" && e.range.getA1Notation().slice(0,1) == "J")||
          (sheet.getRange(i, j).getValue() == "♝" && e.range.getA1Notation().slice(0,1) == "K")){
        if (isDiagonal(target, sheet.getRange(i,j)) == true){
          sheet.getRange(i, j).clearContent();
        }
      }
    }  
  }

  if (e.range.getA1Notation().slice(0,1) == "J"){
    target.setValue("♗")
    if (isDiagonal(target, blackKingPosition) == true){
      whiteCheck()
    }
  }  
  if (e.range.getA1Notation().slice(0,1) == "K"){
    target.setValue("♝")
    if (isDiagonal(target, whiteKingPosition) == true){
      whiteCheck()
    }
  }
}

function rookMove(input, e, colour, piece){
  var target = sheet.getRange(input.slice(input.length-2, input.length))
  for (var i = 0; i < 65; i++){
    if (sheet.getRange(Math.ceil((i+1)/8), (1+i%8)).getValue() == piece
        && isAligned(target, sheet.getRange(Math.ceil((i+1)/8), (1+i%8)))
        && (isColour(target, colour) == false)){
      sheet.getRange(Math.ceil((i+1)/8), (1+i%8)).clearContent();
      target.setValue(piece)
      i = 66;
    }if (i == 64){illegalMove()}
  }
}

function pawnMove(input, e){
  var target = sheet.getRange(input);
  if (e.range.getA1Notation().slice(0,1) == "J"){    
    target.setValue("♙")
    if (
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) - 1))
      .getValue() == "♙"){       
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) - 1)).clearContent();
    }
    else if (
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) - 2))
      .getValue() == "♙"){       
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) - 2)).clearContent();
    }
  }
  else{
    target.setValue("♟")
    if (
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) + 1))
      .getValue() == "♟"){       
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) + 1))
    }
    else if (
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) + 2))
      .getValue() == "♟"){
      sheet.getRange(input.slice(0,1) + (Number(input.slice(1,2)) + 2)).clearContent();
    }
  }
}

function isDiagonal(target, OriginalPosition){
  var check = false;
  var downRightBlock = false;
  var upRightBlock = false;
  var downLeftBlock = false;
  var upLeftBlock = false;
  
  for (var i = 1; i < 9; i++){
    if (downRightBlock == false){  
      if (sheet.getRange(target.getRow() + i, target.getColumn() + i).getA1Notation() == OriginalPosition.getA1Notation()){
        check = true;
      }
      if (sheet.getRange(target.getRow() + i, target.getColumn() + i).getValue() != ""){
        downRightBlock = true;
      }
    }
    if (downLeftBlock == false){
      if (target.getRow() + i < 9 && target.getColumn() - i > 0){
        if (sheet.getRange(target.getRow() + i, target.getColumn() - i).getA1Notation() == OriginalPosition.getA1Notation() ){
          check = true;
        }
        if (sheet.getRange(target.getRow() + i, target.getColumn() - i).getValue() != ""){
          downLeftBlock = true;
        }
      }      
    }
    if (upRightBlock == false){
      if (target.getRow() - i > 0 && target.getColumn() + i < 9){
        if (sheet.getRange(target.getRow() - i, target.getColumn() + i).getA1Notation() == OriginalPosition.getA1Notation() ){
          check = true;
        }
        if (sheet.getRange(target.getRow() - i, target.getColumn() + i).getValue() != ""){
          upRightBlock = true;
        }
      }
    }
    if (upLeftBlock == false){
      if (target.getRow() - i > 0 && target.getColumn() - i > 0){      
        if (sheet.getRange(target.getRow() - i, target.getColumn() - i).getA1Notation() == OriginalPosition.getA1Notation() ){
          check = true;
        }
        if (sheet.getRange(target.getRow() - i, target.getColumn() - i).getValue() != ""){
          upLeftBlock = true;
        }    
      }
    }
  }
  return check;
}
*/
