function setFaceComponent(imageName, location) {
	this.image = imageName;
	
	this.x = location[0] - origin[0];
	this.y = location[1] - origin[1];
}

function Nose(imageName) {
	this.image = imageName;
	this.x = 0;
	this.y = 0;
	this.w = this.image.width / 2;
  	this.h = this.image.height / 2;
}

Nose.prototype.draw = function() {
  	image(this.image, this.x - this.w / 2, this.y - 2 * this.h / 3, this.w, this.h);
}

function Eye(isLeft) {
	var eyeHeight = isLeft ? points.leftEyeHeight : points.rightEyeHeight;
	var eyeCenter = isLeft ? points.leftEyeCenter : points.rightEyeCenter;
	var eh = Math.abs(eyeHeight) > 18 ? eyeHeight * 1.3 : eyeHeight; 

	this.x = eyeCenter[0] - origin[0];
	this.y = eyeCenter[1] - origin[1];
	this.w = 40;
	this.h = eh;
}

Eye.prototype.draw = function() {
	fill(255);
  	ellipse(this.x, this.y, this.w, this.h);
  	fill(0);
  	ellipse(this.x, this.y, 10, 10);
}

function LeftEyebrow(imageName) {
	setFaceComponent.call(this, imageName, points.leftEyebrow);
	this.w = this.image.width / 8;
	this.h = this.image.height / 8;
}

LeftEyebrow.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
}

function RightEyebrow(imageName) {
	setFaceComponent.call(this, imageName, points.rightEyebrow);
	this.w = this.image.width / 8;
	this.h = this.image.height / 8;
}

RightEyebrow.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
}

function UpperLip(imageName) {
	var mouthWidth = points.mouthWidth > 100 ? points.mouthWidth * 1.5 : points.mouthWidth;

	setFaceComponent.call(this, imageName, points.upperLipCenter);
	this.w = mouthWidth;
	this.h = this.image.height;
}

UpperLip.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y, this.w, this.h);
}

function LowerLip(imageName) {
	var mouthWidth = points.mouthWidth > 100 ? points.mouthWidth * 1.5 : points.mouthWidth;

	setFaceComponent.call(this, imageName, points.lowerLipCenter);
	this.w = mouthWidth;
	this.h = this.image.height;
}

LowerLip.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y + this.h / 2, this.w, this.h);
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              var rawFileTrimmed = rawFile.responseText.trim();
              var lines = rawFileTrimmed.split("\n");
              loadImages(lines);
          }
      }
  }
  rawFile.send(null);
}

function camelize(str) {
  return str.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
    return (c ? c.toUpperCase() : '');
  });
}

function loadImages(lines) {
  lines.forEach(function(line) {
    var varName = camelize(line).slice(0, -4);
    var className = varName.indexOf("1") > -1 ? "face-component selected " : "face-component ";

    var fileName = "assets/" + line;
    window[varName] = loadImage(fileName);

    var componentType = findComponentType(fileName);

    var faceComponent = createDiv("<img src = " + fileName + ">");
    faceComponent.parent("sidebar");
    faceComponent.class(className + componentType);
    faceComponent.attribute("component-type", componentType);
    faceComponent.elt.addEventListener("click", selectComponent);
  });

  initializeSelections();
}

function selectComponent() {
  var componentType = this.getAttribute("component-type");
  var oldSelection = this.parentNode.getElementsByClassName("selected face-component " + componentType);
  if (this == oldSelection) {
    return;
  } else if (oldSelection.length > 0) {
    oldSelection[0].classList.remove("selected");
  }
  this.classList.add("selected");
  setSelection(this, componentType);
}

function initializeSelections() {
	selections = {
		noseSelection: nose1,
		upperLipSelection: upperLip1,
		lowerLipSelection: lowerLip1,
		leftEyebrowSelection: leftEyebrow1,
		rightEyebrowSelection: rightEyebrow1
	}
}

function setSelection(el, type) {
	var selectionKey = camelize(type) + "Selection";
	var imageFileName = el.getElementsByTagName("img")[0].src;
	var imageName = camelize(imageFileName.split("/").pop().slice(0, -4));

	selections[selectionKey] = window[imageName];
}

function findComponentType(str) {
	var s = str.toLowerCase();

	if(s.indexOf("nose") > -1) {
		return "nose";
	} else 
	if(s.indexOf("eye") > -1 && s.indexOf("eyebrow") == -1) {
		return "eye";
	} else
	if(s.indexOf("upper_lip") > -1) {
		return "upper_lip";
	} else
	if(s.indexOf("lower_lip") > -1) {
		return "lower_lip";
	} else
	if(s.indexOf("left_eyebrow") > -1) {
		return "left_eyebrow";
	} else
	if(s.indexOf("right_eyebrow") > -1) {
		return "right_eyebrow";
	} else {
		return "";
	}
}




