function zip(arrays) {
  return arrays[0].map(function(_,i){
      return arrays.map(function(array){return array[i]})
  });
}

function getRightEyeOpening() {
	averageFace = getAverageFace();
	currentFace = faceTracker.getCurrentPosition();
	return (currentFace[24][1] - currentFace[26][1]) / (averageFace[24][1] - averageFace[26][1]);
}

function getLeftEyeOpening() {
	averageFace = getAverageFace();
	currentFace = faceTracker.getCurrentPosition();
	return (currentFace[29][1] - currentFace[31][1]) / (averageFace[29][1] - averageFace[31][1]);
}

function getAverageFace() {
	if (faces.length == 1000) {
		faces.shift();
	}
	faces.push(faceTracker.getCurrentPosition());

	var zippedFaces = zip(faces);
	var averagePositions = zippedFaces.map(function(position) {
		return averagePairs(position);
	});

	return averagePositions;
}

function averagePairs(arr) {
	var zippedPairs = zip(arr);
	var sumX = zippedPairs[0].reduce(function(a, b) { return a + b; });
	var sumY = zippedPairs[1].reduce(function(a, b) { return a + b; });

	return([sumX / arr.length, sumY / arr.length]);
}

function normalizePositionsToNose(positions) {
	var nose = positions[62];

	position.map(function(p) {
		normalizePointToNose(nose, p)
	})
}

function normalizePointToNose(nose, point) {
	var x = nose[0] - point[0];
	var y = nose[1] - point[1];
	return [x, y];
}