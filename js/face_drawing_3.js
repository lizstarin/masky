function loadImages() {
  upperLip = loadImage("assets/upper_lip.svg");
  lowerLip = loadImage("assets/lower_lip.svg");
  nose = loadImage("assets/nose1.svg");
  leftEyebrowImage = loadImage("assets/left_eyebrow.svg");
  rightEyebrowImage = loadImage("assets/right_eyebrow.svg");
}

function drawFace() {
  drawNose(0, 0);

  var nX = points.noseTip[0];
  var nY = points.noseTip[1];

  drawEye(points.leftEyeCenter[0] - nX, points.leftEyeCenter[1] - nY, points.leftEyeHeight);
  drawEye(points.rightEyeCenter[0] - nX, points.rightEyeCenter[1] - nY, points.rightEyeHeight);
  
  drawLeftEyebrow(points.leftEyebrow[0] - nX, points.leftEyebrow[1] - nY);
  drawRightEyebrow(points.rightEyebrow[0] - nX, points.rightEyebrow[1] - nY);
  drawUpperLip(points.upperLipCenter[0] - nX, points.upperLipCenter[1] - nY, points.mouthWidth);
  drawLowerLip(points.lowerLipCenter[0] - nX, points.lowerLipCenter[1] - nY, points.mouthWidth);
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
