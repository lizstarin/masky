function definePoints(t){var o=4,e=t.map(function(t){return[o*t[0],o*t[1]]});points.noseTip=e[62],points.leftEyeCenter=e[32],points.leftEyeTop=e[29],points.leftEyeBottom=e[31],points.rightEyeCenter=e[27],points.rightEyeTop=e[24],points.rightEyeBottom=e[26],points.upperLipCenter=e[60],points.lowerLipCenter=e[57],points.leftEyebrow=e[16],points.rightEyebrow=e[20],points.leftMouthCorner=e[50],points.rightMouthCorner=e[44],points.leftEyeHeight=points.leftEyeTop[1]-points.leftEyeBottom[1],points.rightEyeHeight=points.rightEyeTop[1]-points.rightEyeBottom[1],points.mouthWidth=points.leftMouthCorner[0]-points.rightMouthCorner[0],points.mouthHeight=Math.abs(points.upperLipCenter[1]-points.lowerLipCenter[1]),points.headTilt=Math.atan((points.leftMouthCorner[1]-points.rightMouthCorner[1])/(points.leftMouthCorner[0]-points.rightMouthCorner[0]))}var points={};