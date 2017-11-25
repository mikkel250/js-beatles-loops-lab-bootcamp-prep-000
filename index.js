function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i <= musicianArray.length; i++) {
    beatlesArray[0] = [musicianArray + " " + instrumentArray];
  }
  return beatlesArray;
}