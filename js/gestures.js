function zip(arrays) {
  return arrays[0].map(function(_,i){
      return arrays.map(function(array){return array[i]})
  });
}

function getAveragePositions(positions) {
	if (faces.length == 5) {
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