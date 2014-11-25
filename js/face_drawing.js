function drawFace() {
  var nose = new Nose(nose2);
  nose.draw();

  var leftEye = new Eye(true);
  leftEye.draw();

  var rightEye = new Eye(false);
  rightEye.draw();

  leftEyebrow = new LeftEyebrow(leftEyebrow1);
  console.log(leftEyebrow);
  leftEyebrow.draw();

  var rightEyebrow = new RightEyebrow(rightEyebrow1);
  rightEyebrow.draw();

  var upperLip = new UpperLip(upperLip1);
  upperLip.draw();

  var lowerLip = new LowerLip(lowerLip1);
  lowerLip.draw();
}