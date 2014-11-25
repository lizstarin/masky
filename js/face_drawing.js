function drawFace() {
  var nose = new Nose(selections.noseSelection);
  nose.draw();

  var leftEye = new Eye(true);
  leftEye.draw();

  var rightEye = new Eye(false);
  rightEye.draw();

  var leftEyebrow = new LeftEyebrow(selections.leftEyebrowSelection);
  leftEyebrow.draw();

  var rightEyebrow = new RightEyebrow(selections.rightEyebrowSelection);
  rightEyebrow.draw();

  var upperLip = new UpperLip(selections.upperLipSelection);
  upperLip.draw();

  var lowerLip = new LowerLip(selections.lowerLipSelection);
  lowerLip.draw();
}