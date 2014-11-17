var videoInput = document.getElementById('camera-stream');

var faceTracker = new clm.tracker();
var faces = [];
var positions, averagePositions;
faceTracker.init(pModel);
faceTracker.start(videoInput);

function faceTrackingLoop() {
	requestAnimationFrame(faceTrackingLoop);

	positions = faceTracker.getCurrentPosition();
  definePoints(positions);
}

faceTrackingLoop();

function setup() {
  createCanvas(800, 600);
  noStroke();
  loadImages();
}

function draw() {
  background(0);

  // translate(noseTip[0], noseTip[1]);
  // rotate(headTilt);

  drawFaceParts(); 
}