var videoInput = document.getElementById('camera-stream');

var faces = [];
var faceTracker = new clm.tracker();

function setup() {
  createCanvas(800, 600);
  noStroke();
  loadImages();

  faceTracker.init(pModel);
  faceTracker.start(videoInput);
}

function draw() {
  background(0);

  positions = faceTracker.getCurrentPosition();
  definePoints(positions);

  translate(noseTip[0], noseTip[1]);
  rotate(headTilt);

  drawFace(); 
}