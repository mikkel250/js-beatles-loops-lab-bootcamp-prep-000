function theBeatlesPlay(musicianArray, instrumentArray) {
  var beatlesArray = [];
  for (var i = 0; i < musicianArray.length; i++) {
    beatlesArray.push(musicianArray[i] + " plays " + instrumentArray[i]);
  }
  return beatlesArray;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  var i = 0;
  do {
  newArray[i] = "I love the Beatles!";
  }
  while (newArray.length < 15);
  i++;
  
}