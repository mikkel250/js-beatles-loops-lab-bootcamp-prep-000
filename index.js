function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i <= musicianArray.length; i++) {
    beatlesArray.push([musicianArray[i] + " " + instrumentArray[i]]);
  }
  return beatlesArray;
}