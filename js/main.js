var videoInput = document.getElementById('camera-stream');

var faces = [];
var faceTracker = new clm.tracker();

function setup() {
  createCanvas(800, 600);
  noStroke();

  faceTracker.init(pModel);
  faceTracker.start(videoInput);

  readTextFile("js/asset-manifest.txt");
}

function draw() {
  background(0);

  positions = faceTracker.getCurrentPosition();
  definePoints(positions);

  translate(points.noseTip[0], points.noseTip[1]);
  rotate(points.headTilt);

  drawFace(); 
}