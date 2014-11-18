function loadImages() {
  upperLip = loadImage("static/assets/upper_lip.svg");
  lowerLip = loadImage("static/assets/lower_lip.svg");
  nose = loadImage("static/assets/nose1.svg");
  leftEyebrowImage = loadImage("static/assets/left_eyebrow.svg");
  rightEyebrowImage = loadImage("static/assets/right_eyebrow.svg");
}

function definePoints(pos) {
  var SCALE = 4;
  var positions = pos.map(function(p) {
    return [SCALE * p[0], SCALE * p[1]];
  })
  noseTip = positions[62];
  leftEye = positions[32];
  leftEyeTop = positions[29];
  leftEyeBottom = positions[31];
  rightEye = positions[27];
  rightEyeTop = positions[24];
  rightEyeBottom = positions[26];
  upperLipCenter = positions[60];
  lowerLipCenter = positions[57];
  leftEyebrow = positions[16];
  rightEyebrow = positions[20];

  leftMouthCorner = positions[50];
  rightMouthCorner = positions[44];
  headTilt = Math.atan((leftMouthCorner[1] - rightMouthCorner[1]) / (leftMouthCorner[0] - rightMouthCorner[0])); 
}

function drawFace() {
  drawNose(0, 0);

  var leftEyeHeight = leftEyeTop[1] - leftEyeBottom[1];
  var rightEyeHeight = rightEyeTop[1] - rightEyeBottom[1];
  var mouthWidth = leftMouthCorner[0] - rightMouthCorner[0];
  var mouthHeight = Math.abs(upperLipCenter[1] - lowerLipCenter[1]);

  var nX = noseTip[0];
  var nY = noseTip[1];

  drawEye(leftEye[0] - nX, leftEye[1] - nY, leftEyeHeight);
  drawEye(rightEye[0] - nX, rightEye[1] - nY, rightEyeHeight);
  
  drawLeftEyebrow(leftEyebrow[0] - nX, leftEyebrow[1] - nY);
  drawRightEyebrow(rightEyebrow[0] - nX, rightEyebrow[1] - nY);
  drawUpperLip(upperLipCenter[0] - nX, upperLipCenter[1] - nY, mouthWidth);
  drawLowerLip(lowerLipCenter[0] - nX, lowerLipCenter[1] - nY, mouthWidth);
}

function drawEye(x, y, eyeHeight) {
  if (Math.abs(eyeHeight) > 18) {
    eyeHeight = eyeHeight * 1.3;
  }
  fill(255);
  ellipse(x, y, 40, eyeHeight);
  fill(0);
  ellipse(x, y, 10, 10);
}

function drawLeftEyebrow(x, y) {
  w = leftEyebrowImage.width / 8;
  h = leftEyebrowImage.height / 8;
  image(leftEyebrowImage, x - w / 2, y - h / 2, w, h);
}

function drawRightEyebrow(x, y) {
  w = rightEyebrowImage.width / 8;
  h = rightEyebrowImage.height / 8;
  image(rightEyebrowImage, x - w / 2, y - h / 2, w, h);
}

function drawNose(x, y) {
  w = nose.width / 2;
  h = nose.height / 2;
  image(nose, x - w / 2, y - 2 * h / 3, w, h);
}

function drawUpperLip(x, y, mouthWidth) {
  if (mouthWidth > 100) {
    mouthWidth = mouthWidth * 1.5;
  }
  w = mouthWidth;
  h = upperLip.height;
  image(upperLip, x - w / 2, y, w, h);
}

function drawLowerLip(x, y, mouthWidth) {
  if (mouthWidth > 100) {
    mouthWidth = mouthWidth * 1.5;
  }
  w = mouthWidth;
  h = upperLip.height;
  image(lowerLip, x - w / 2, y + h / 2, w, h);
}
