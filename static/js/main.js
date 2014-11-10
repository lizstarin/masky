navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

if (navigator.getUserMedia) {
   navigator.getUserMedia (
      { video: true },

      // successCallback
      function(localMediaStream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(localMediaStream);
      },

      // errorCallback
      function(err) {
         console.log("The following error occured: " + err);
      }
   );
} else {
   console.log("getUserMedia not supported");
}

var videoInput = document.getElementById('camera-stream');

var ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(videoInput);

var canvasInput = document.getElementById('draw-canvas');
var cc = canvasInput.getContext('2d');

var noseTip;

function faceTrackingLoop() {
	requestAnimationFrame(faceTrackingLoop);

	var positions = ctracker.getCurrentPosition();
	noseTip = positions[62];
	leftEye = positions[32];
	rightEye = positions[27];
	upperLipCenter = positions[60];
	lowerLipCenter = positions[57];
	leftEyebrow = positions[16];
	rightEyebrow = positions[20];
}

faceTrackingLoop();

function setup() {
	createCanvas(800, 600);
	noStroke();
}

function draw() {
	background(0);

	drawNose(noseTip[0], noseTip[1]);
  	drawEye(leftEye[0], leftEye[1]);
  	drawEye(rightEye[0], rightEye[1]);
  	drawEyebrow(leftEyebrow[0], leftEyebrow[1]);
  	drawEyebrow(rightEyebrow[0], rightEyebrow[1]);
  	drawUpperLip(upperLipCenter[0], upperLipCenter[1]);
  	drawLowerLip(lowerLipCenter[0], lowerLipCenter[1]);
}

function drawEye(x, y) {
	fill(255);
  	ellipse(x, y, 40, 20);
  	fill(0);
  	ellipse(x, y, 10, 10);
}

function drawEyebrow(x, y) {
	fill(255, 255, 0);
	ellipse(x, y, 60, 6);
}

function drawNose(x, y) {
	fill(255, 0, 0);
  	ellipse(x, y, 40, 40);
}

function drawUpperLip(x, y) {
	fill(0, 0, 255);
	ellipse(x, y, 120, 10);
}

function drawLowerLip(x, y) {
	fill(0, 0, 255);
	ellipse(x, y, 120, 10);
}
