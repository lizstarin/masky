function loadImages() {
  upperLip = loadImage("static/assets/upper_lip.svg");
  lowerLip = loadImage("static/assets/lower_lip.svg");
  nose = loadImage("static/assets/nose1.svg");
  leftEyebrowImage = loadImage("static/assets/left_eyebrow.svg");
  rightEyebrowImage = loadImage("static/assets/right_eyebrow.svg");
}

function definePoints(positions) {
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

function drawFaceParts() {
  drawNose(noseTip[0], noseTip[1]);

  // var leftPercentOpen = getLeftEyeOpening();
  // var rightPercentOpen = getRightEyeOpening();

  var leftEyeHeight = leftEyeTop[1] - leftEyeBottom[1];
  var rightEyeHeight = rightEyeTop[1] - rightEyeBottom[1];
  var mouthWidth = leftMouthCorner[0] - rightMouthCorner[0];
  var mouthHeight = Math.abs(upperLipCenter[1] - lowerLipCenter[1]);

  drawEye(leftEye[0], leftEye[1], leftEyeHeight);
  drawEye(rightEye[0], rightEye[1], rightEyeHeight);
  
  drawLeftEyebrow(leftEyebrow[0], leftEyebrow[1]);
  drawRightEyebrow(rightEyebrow[0], rightEyebrow[1]);
  drawUpperLip(upperLipCenter[0], upperLipCenter[1], mouthWidth);
  drawLowerLip(lowerLipCenter[0], lowerLipCenter[1], mouthWidth);
}

function drawEye(x, y, eyeHeight) {
  // if (Math.abs(eyeHeight) < 18) {
  //   eyeHeight = eyeHeight / 2;
  // } else {
  //   eyeHeight = eyeHeight * 2;
  // }
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
