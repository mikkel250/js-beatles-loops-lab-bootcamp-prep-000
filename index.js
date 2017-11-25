function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i <= musicianArray.length; i++) {
    beatlesArray[i] = [musicianArray + instrumentArray];
  }
  return beatlesArray;
}