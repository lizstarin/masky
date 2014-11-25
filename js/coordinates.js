var points = {};

function definePoints(pos) {
  var SCALE = 4;
  var positions = pos.map(function(p) {
    return [SCALE * p[0], SCALE * p[1]];
  });

  points.noseTip = positions[62];
  points.leftEyeCenter = positions[32];
  points.leftEyeTop = positions[29];
  points.leftEyeBottom = positions[31];
  points.rightEyeCenter = positions[27];
  points.rightEyeTop = positions[24];
  points.rightEyeBottom = positions[26];
  points.upperLipCenter = positions[60];
  points.lowerLipCenter = positions[57];
  points.leftEyebrow = positions[16];
  points.rightEyebrow = positions[20];
  points.leftMouthCorner = positions[50];
  points.rightMouthCorner = positions[44];

  points.leftEyeHeight = points.leftEyeTop[1] - points.leftEyeBottom[1];
  points.rightEyeHeight = points.rightEyeTop[1] - points.rightEyeBottom[1];
  points.mouthWidth = points.leftMouthCorner[0] - points.rightMouthCorner[0];
  points.mouthHeight = Math.abs(points.upperLipCenter[1] - points.lowerLipCenter[1]);
  points.headTilt = Math.atan((points.leftMouthCorner[1] - points.rightMouthCorner[1]) / (points.leftMouthCorner[0] - points.rightMouthCorner[0])); 
} 