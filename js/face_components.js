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

	this.x = eyeCenter[0] - points.noseTip[0];
	this.y = eyeCenter[1] - points.noseTip[1];
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
	this.image = imageName;
	this.x = points.leftEyebrow[0] - points.noseTip[0];
	this.y = points.leftEyebrow[1] - points.noseTip[1];
	this.w = this.image.width / 8;
	this.h = this.image.height / 8;
}

LeftEyebrow.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
}

function RightEyebrow(imageName) {
	this.image = imageName;
	this.x = points.rightEyebrow[0] - points.noseTip[0];
	this.y = points.rightEyebrow[1] - points.noseTip[1];
	this.w = this.image.width / 8;
	this.h = this.image.height / 8;
}

RightEyebrow.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
}

function UpperLip(imageName) {
	var mouthWidth = points.mouthWidth > 100 ? points.mouthWidth * 1.5 : points.mouthWidth;

	this.image = imageName;
	this.x = points.upperLipCenter[0] - points.noseTip[0];
	this.y = points.upperLipCenter[1] - points.noseTip[1];
	this.w = mouthWidth;
	this.h = this.image.height;
}

UpperLip.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y, this.w, this.h);
}

function LowerLip(imageName) {
	var mouthWidth = points.mouthWidth > 100 ? points.mouthWidth * 1.5 : points.mouthWidth;

	this.image = imageName;
	this.x = points.lowerLipCenter[0] - points.noseTip[0];
	this.y = points.lowerLipCenter[1] - points.noseTip[1];
	this.w = mouthWidth;
	this.h = this.image.height;
}

LowerLip.prototype.draw = function() {
	image(this.image, this.x - this.w / 2, this.y + this.h / 2, this.w, this.h);
}




