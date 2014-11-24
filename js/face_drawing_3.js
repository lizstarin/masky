function loadImages() {
  upperLip1 = loadImage("assets/upper_lip.svg");
  lowerLip1 = loadImage("assets/lower_lip.svg");
  nose1 = loadImage("assets/nose1.svg");
  nose2 = loadImage("assets/nose2.svg");
  leftEyebrow1 = loadImage("assets/left_eyebrow.svg");
  rightEyebrow1 = loadImage("assets/right_eyebrow.svg");
}

function drawFace() {
  var nose = new Nose(nose2);
  nose.draw();

  var leftEye = new Eye(true);
  leftEye.draw();

  var rightEye = new Eye(false);
  rightEye.draw();

  var leftEyebrow = new LeftEyebrow(leftEyebrow1);
  leftEyebrow.draw();

  var rightEyebrow = new RightEyebrow(rightEyebrow1);
  rightEyebrow.draw();

  var upperLip = new UpperLip(upperLip1);
  upperLip.draw();

  var lowerLip = new LowerLip(lowerLip1);
  lowerLip.draw();
}