var videoInput = document.getElementById('camera-stream');

var faces = [];
var faceTracker = new clm.tracker();

function setup() {
  noStroke();

  layOutPage(setClickListeners);

  faceTracker.init(pModel);
  faceTracker.start(videoInput);

  readTextFile("js/asset-manifest.txt");
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

function setClickListeners() {
  var faceComponents = document.getElementsByClassName("face-component");

  faceComponents.forEach(function(fc) {
    fc.addEventListener("click", selectComponent, false);
  });
}

function selectComponent() {
  // var componentType = this.className;
  // this.setAttribute("class", "selected");
}