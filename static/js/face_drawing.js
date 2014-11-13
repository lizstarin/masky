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
  rightEye = positions[27];
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

  var leftPercentOpen = getLeftEyeOpening();
  var rightPercentOpen = getRightEyeOpening();
  drawEye(leftEye[0], leftEye[1], leftPercentOpen);
  drawEye(rightEye[0], rightEye[1], rightPercentOpen);
  
  drawLeftEyebrow(leftEyebrow[0], leftEyebrow[1]);
  drawRightEyebrow(rightEyebrow[0], rightEyebrow[1]);
  drawUpperLip(upperLipCenter[0], upperLipCenter[1]);
  drawLowerLip(lowerLipCenter[0], lowerLipCenter[1]);
}

function drawEye(x, y, percentOpen) {
  fill(255);
  ellipse(x, y, 40, 20 * percentOpen);
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

function drawUpperLip(x, y) {
  w = upperLip.width / 2;
  image(upperLip, x - w, y);
}

function drawLowerLip(x, y) {
  w = lowerLip.width / 2;
  h = lowerLip.height / 2;
  image(lowerLip, x - w, y + h / 2);
}
