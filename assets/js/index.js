import { initVideoPlayerFeatures } from './video-player-features.js'
import { initUI } from "./init.js"

const VOLUME_START = 0.5

const supportsVideo = !!document.createElement("video").canPlayType

if (supportsVideo) {
  console.log('video element supported!')

  // const { initUI } = await import('../js/init.js')
  initUI()

  const video = document.querySelector("#video")
  const videoControls = document.querySelector("#video-controls")
  const fullscreen = document.querySelector("#fullscreen")

  // Hide the default controls
  video.controls = false

  // Start Volume
  video.volume = VOLUME_START

  // Display the user defined video controls
  videoControls.style.display = "grid"

  // Check if the browser supports the Fullscreen API
  const fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen)

  if (!document?.fullscreenEnabled) {
    fullscreen.style.display = "none"
  }

  initVideoPlayerFeatures()
}


