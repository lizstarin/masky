var videoInput = document.getElementById('camera-stream');

var faceTracker = new clm.tracker();
var faces = [];
faceTracker.init(pModel);
faceTracker.start(videoInput);

function faceTrackingLoop() {
	requestAnimationFrame(faceTrackingLoop);

	var positions = faceTracker.getCurrentPosition();

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
  // rotate(headTilt);

  drawFaceParts(); 
}