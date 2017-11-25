function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i < musicianArray.length; i++) {
    beatlesArray.push(musicianArray[i] + " plays " + instrumentArray[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(factsArray) {
  var excitedArray = [];
  var i = 0;
  while (i < factsArray.length) {
    excitedArray.push(factsArray[i] + "!!!");
  }
  return excitedArray;
}