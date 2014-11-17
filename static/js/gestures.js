function zip(arrays) {
  return arrays[0].map(function(_,i){
      return arrays.map(function(array){return array[i]})
  });
}

function getAveragePositions(positions) {
	if (faces.length == 1000) {
		faces.shift();
	}
	faces.push(positions);

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

function getRightEyeOpening() {
	return (positions[24][1] - positions[26][1]) / (averagePositions[24][1] - averagePositions[26][1]);
}

function getLeftEyeOpening() {
	return (positions[29][1] - positions[31][1]) / (averagePositions[29][1] - averagePositions[31][1]);
}

// function getHeadTilt() {
// 	leftMouthCorner = positions[50];
// 	rightMouthCorner = positions[44];
// 	return Math.atan((leftMouthCorner[1] - rightMouthCorner[1]) / (leftMouthCorner[0] - rightMouthCorner[0])); 
// }