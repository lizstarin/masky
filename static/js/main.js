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