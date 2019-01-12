function setupBoard() {
  sheet.getRange("A1:H8").clear();
  //sheet.getRange(1,10,sheet.getLastRow(),2).clearContent();
  var whitePawnRange = sheet.getRange("A2:H2")
  var blackPawnRange = sheet.getRange("A7:H7")
  var whiteKnightRange = sheet.getRange("B1:G1")
  var blackKnightRange = sheet.getRange("B8:G8")
  var whiteBishopRange = sheet.getRange("C1:F1")
  var blackBishopRange = sheet.getRange("C8:F8")
  var whiteRookRange = sheet.getRange("A1:H1")
  var blackRookRange = sheet.getRange("A8:H8")
  var whiteKingRange = sheet.getRange("E1:E1")
  var blackKingRange = sheet.getRange("E8:E8")
  var whiteQueenRange = sheet.getRange("D1:D1")
  var blackQueenRange = sheet.getRange("D8:D8")
  var whiteNotation = sheet.getRange("J1:J1")
  var blackNotation = sheet.getRange("K1:K1")

  for (var i = 1; i < 9; i++){
    whitePawnRange.setValue("M_");
    sheet.autoResizeColumn(i);  
    whitePawnRange.setValue("♙")
    blackPawnRange.setValue("♟")
    whiteRookRange.setValue("♖")
    blackRookRange.setValue("♜")
    whiteKnightRange.setValue("♘")
    blackKnightRange.setValue("♞")
    whiteBishopRange.setValue("♗")
    blackBishopRange.setValue("♝")
    whiteKingRange.setValue("♔")
    blackKingRange.setValue("♚")
    whiteQueenRange.setValue("♕")
    blackQueenRange.setValue("♛")
  }
  sheet.getRange("A1:H8").setBorder(true, true,true,true,false,false);
  whiteNotation.setValue("White")
  blackNotation.setValue("Black")
  sheet.getRange(2,10).activate()
  var next = 'white';
  
  for (var h = 66; h < 73; h += 2){
    for (var i = 1; i < 9; i += 2){
      if (next == 'white'){
        range = sheet.getRange(String.fromCharCode(h) + i.toString() + ':' + String.fromCharCode(h) + i.toString());
        range.setBackground(next);
        next = 'lightgrey'
      }
      if (next == 'lightgrey'){
        range = sheet.getRange(String.fromCharCode(h) + i.toString() + ':' + String.fromCharCode(h) + i.toString());
        range.setBackground(next);
        next = 'white'
      }
    }
  }
  
    for (var h = 65; h < 73; h += 2){
    for (var i = 2; i < 9; i += 2){
      if (next == 'white'){
        range = sheet.getRange(String.fromCharCode(h) + i.toString() + ':' + String.fromCharCode(h) + i.toString());
        range.setBackground(next);
        next = 'lightgrey'
      }
      if (next == 'lightgrey'){
        range = sheet.getRange(String.fromCharCode(h) + i.toString() + ':' + String.fromCharCode(h) + i.toString());
        range.setBackground(next);
        next = 'white'
      }
    }
  }
  
}
