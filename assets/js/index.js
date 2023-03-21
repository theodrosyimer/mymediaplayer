const supportsVideo = !!document.createElement("video").canPlayType
if (supportsVideo) {
  console.log('video element supported!')
  const videoContainer = document.getElementById("video-container")
  const video = document.getElementById("video")
  const videoControls = document.getElementById("video-controls")

  // Hide the default controls
  video.controls = false

  // Display the user defined video controls
  videoControls.style.display = "flex"
}
