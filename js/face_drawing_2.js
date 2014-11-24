function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              var lines = rawFile.responseText.split("\n");
              createFaceComponents(lines);
          }
      }
  }
  rawFile.send(null);
}

readTextFile("js/asset-manifest.txt");

function createFaceComponents(arr) {
  var faceComponents = [];

  arr.forEach(function(el) {
    if (el.indexOf("nose") > -1 || el.indexOf("eyebrow") > -1) {
      nose = new Nose
    } else 
    if (el.indexOf("lower_lip") > -1) {
      lowerLip = new Mouth(el, 100);
    } else
    if (el.indexOf("upper_lip") > -1) {
      upperLip = new Mouth(el, 100);
    } else
    if (el.indexOf("left_eyebrow") > -1) {
      createLeftEyebrow(el);
    } else 
    if (el.indexOf("right_eyebrow") > -1) {
      createRightEyebrow(el);
    } else {
      return;
    }
  })
}

function FaceComponent(imageName) {
  this.imageName = imageName;
  this.image = loadImage(imageName);

  this.width = image.width;
  this.height = image.height;

  var w = 100;
  var h = this.height * w / this.width;

  this.draw = function(location, origin) {
    x = location[0]
    y = location[1]
    dX = origin[0]
    dY = origin[1]
    image(this.image, x - dX, y - dY, x - w / 2, y - h / 2); 
  }
}

function Eye(eyeHeight) {
  this.eyeHeight = eyeHeight;

  if (Math.abs(eyeHeight) > 18) {
    this.eyeHeight = eyeHeight * 1.3;
  }

  this.draw = function(location, origin) {
    x = location[0]
    y = location[1]
    dX = origin[0]
    dY = origin[1]
    fill(255);
    ellipse(x, y, 40, eyeHeight);
    fill(0);
    ellipse(x, y, 10, 10);
  }
}

function Mouth(imageName, mouthWidth) {
  FaceComponent.call(this, imageName);
  this.mouthWidth = mouthWidth;

  if (mouthWidth > 100) {
    mouthWidth = mouthWidth * 1.5;
  }
}

Mouth.prototype = Object.create(FaceComponent.prototype);

function definePoints(pos) {
  var SCALE = 4;
  var positions = pos.map(function(p) {
    return [SCALE * p[0], SCALE * p[1]];
  });

  noseTip = positions[62];
  leftEyeCenter = positions[32];
  leftEyeTop = positions[29];
  leftEyeBottom = positions[31];
  rightEyeCenter = positions[27];
  rightEyeTop = positions[24];
  rightEyeBottom = positions[26];
  upperLipCenter = positions[60];
  lowerLipCenter = positions[57];
  leftEyebrow = positions[16];
  rightEyebrow = positions[20];
  leftMouthCorner = positions[50];
  rightMouthCorner = positions[44];

  leftEyeHeight = leftEyeTop[1] - leftEyeBottom[1];
  rightEyeHeight = rightEyeTop[1] - rightEyeBottom[1];
  mouthWidth = leftMouthCorner[0] - rightMouthCorner[0];
  mouthHeight = Math.abs(upperLipCenter[1] - lowerLipCenter[1]);
  headTilt = Math.atan((leftMouthCorner[1] - rightMouthCorner[1]) / (leftMouthCorner[0] - rightMouthCorner[0])); 
}  

function buildFaceComponents() {
  imageFiles = [];

  leftEye = new Eye(leftEyeHeight);
  rightEye = new Eye(rightEyeHeight);
  leftEye.draw(leftEyeCenter[0], leftEyeCenter[1]);
  rightEye.draw(rightEyeCenter[0], rightEyeCenter[1]);
}

function drawFace() {
  drawNose(0, 0);

  var nX = noseTip[0];
  var nY = noseTip[1];

  drawEye(leftEye[0] - nX, leftEye[1] - nY, leftEyeHeight);
  drawEye(rightEye[0] - nX, rightEye[1] - nY, rightEyeHeight);
  
  drawLeftEyebrow(leftEyebrow[0] - nX, leftEyebrow[1] - nY);
  drawRightEyebrow(rightEyebrow[0] - nX, rightEyebrow[1] - nY);
  drawUpperLip(upperLipCenter[0] - nX, upperLipCenter[1] - nY, mouthWidth);
  drawLowerLip(lowerLipCenter[0] - nX, lowerLipCenter[1] - nY, mouthWidth);
}