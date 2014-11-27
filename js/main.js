var videoInput = document.getElementById('camera-stream');

var faces = [];
var faceTracker = new clm.tracker();

function setup() {
  noStroke();

  layOutPage();

  faceTracker.init(pModel);
  faceTracker.start(videoInput);

  readTextFile("js/asset-manifest.txt");

  noLoop();
  var video = document.querySelector("video");
  video.addEventListener("loadeddata", function() {
    loop();
  });
}

function draw() {
  background(0);

  positions = faceTracker.getCurrentPosition();
  definePoints(positions);
  origin = points.noseTip;

  translate(origin[0], origin[1]);
  rotate(points.headTilt);

  drawFace(); 
}

function layOutPage() {
  var container = createDiv("");
  container.id("container");

  var canvas = createCanvas(800, 600);
  canvas.parent("container");

  var sidebar = createDiv("");
  sidebar.id("sidebar");
  sidebar.parent("container");
}